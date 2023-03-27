import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/firebase.config';
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";



const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const { currentUser :{uid}} = useContext(AuthContext);
  const category="landscape";
  
  console.log(category ,uid );
  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    
    const uploadTask = storageRef.put(file);
    
    uploadTask.on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
      const createdAt = timestamp();
      
      await collectionRef.add({ url: downloadUrl, createdAt, uid});
      setUrl(downloadUrl);
    });
    
    return () => {
      // Clean up the upload task if the component unmounts
      uploadTask.cancel();
    }
  }, [file,uid]);

  return { progress, url, error };
};

export default useStorage;