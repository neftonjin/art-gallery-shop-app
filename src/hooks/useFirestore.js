import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/firebase.config';

const useFirestore = (collection, uid) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {


    let query = projectFirestore.collection(collection);
    if (uid) {
      query = query.where('uid', '==' ,uid);
    }




    const unsub =query
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection,uid]);

  return { docs };
}

export default useFirestore;