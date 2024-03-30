import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './DropZone.module.css';
import drag from '../../assets/drag.png';
import pic2 from '../../assets/pic2.jpeg';
import { Button, Divider } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';


const DropZone = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setDroppedFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "image/png": ['.png'],
      "image/jpeg": ['.jpeg'],
      "audio/mpeg": ['.mpeg', '.mp3'],
    }
  });

  return (
    <div className={`${styles.dropBox} ${isDragReject ? styles.reject : isDragAccept ? styles.accept : ''}`}>
      <div {...getRootProps()} className={styles.mainBox}>
        <input hidden {...getInputProps()}  />
        <div>
          <p>Drag & Drop Here</p>
          <img src={pic2} />
          <p>To Share Your Moments</p>
          {
            isDragReject ? <p>Sorry, File is not supported</p> : ''
            // <p>Only Jpeg, png & mp3 files are supported</p>
          }
        </div>
        {droppedFiles.length > 0 && (
          <div>
            {droppedFiles.map((file, index) => (
              <p style={{ margin: '0' }} key={index}>{file.name}</p>
            ))}
            <br></br>
          </div>
        )}
      </div>
      <Button variant="contained" sx={{margin:'10px'}} endIcon={<UploadIcon/>} >Upload</Button>
    </div>
  );
}

export default DropZone;
