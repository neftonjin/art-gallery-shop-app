import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';


const ProgressBar = ({file , setFile}) => {
    const {url, progress} =useStorage(file);
    console.log(progress);

    useEffect(() => {
      if(url){
        setFile(null);
      }
      return 
    },[url,setFile])
  return <div className="progress-bar" style={ {width:progress+'%'} }> Upload Progress {Math.round(progress)+'%'}</div>;
};

export default ProgressBar;