import React, { useState } from 'react'

import ProfileBox from "../components/ProfileBox";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";
import UploadForm from "../components/UploadForm";
import { Typography } from '@mui/material';


export const MyProfile = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <main>

        <ProfileBox></ProfileBox>
        <Typography variant='h4' align='center'>
          Your Images
        </Typography>
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        <UploadForm />

      </main>
    </>
  )
}
