import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";
import UploadForm from "../components/UploadForm";
import React, { useState } from 'react';
import Title from "../components/Title";

export const User = () => {
  const [selectedImg, setSelectedImg] = useState(null);
    return (
      <>
      <Title />
      <UploadForm /> 
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      
      </>
    )
  };

