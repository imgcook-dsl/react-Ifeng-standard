import React, { useState, useEffect } from 'react';

import styles from './index.css';

const mobile = (props) => {
  return (
    <div className={styles.group}>
      <div className={styles.header}>
        <img
          className={styles.floorBg}
          src={
            require('https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5caef150b59b11ec8ea205d5b701cc38.png').default
          }
        />
      </div>
      <div className={styles.body}>
        <img
          className={styles.banner}
          src={
            require('https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/6454f350b59b11ec958a09e4edf763b7.png').default
          }
        />
      </div>
    </div>
  );
};
export default mobile;
