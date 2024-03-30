import React, { useState } from 'react'
import styles from "./Home.module.css"
import DropZone from '../DropZone/DropZone'


const Home = () => {

  return (
    <div className={styles.wrapper}>
      <h1>
        Share Files Easily With FILE SHARE
      </h1>
      <div className={styles.dropZone}>
        <DropZone></DropZone>
      </div>
    </div>
  )
}

export default Home