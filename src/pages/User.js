import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";
import UploadForm from "../components/UploadForm";
import React, { useState } from 'react';

export const User = () => {
  const [selectedImg, setSelectedImg] = useState(null);
    return (
      <>
      <h1> User Profile</h1>
      <UploadForm /> 
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      
      </>
    )
  };

