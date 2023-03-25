import React from "react";
import ArtCard from "../components/ArtCard";
import ProfileBox from "../components/ProfileBox";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";
import UploadForm from "../components/UploadForm";
import React, { useState } from 'react';
import Title from "../components/Title";


export const User = () => {
  const [selectedImg, setSelectedImg] = useState(null);
    return (
      <>
      <main>
      <ProfileBox></ProfileBox>
      <ArtCard></ArtCard>
      <Title />
      <UploadForm /> 
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      </main>
      </>
    )
  };

