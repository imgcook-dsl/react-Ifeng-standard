import React, { useState, useEffect } from 'react';

import styles from './index.css';

const mobile = (props) => {
  return (
    <div className={styles.group}>
      <div className={styles.header}>
        <img
          className={styles.floorBg}
          src={
            require('https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a5c89570baf611ec9724af04dac194c3.png').default
          }
        />
      </div>
      <div className={styles.body}>
        <img
          className={styles.banner}
          src={
            require('https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a70470d0baf611ec9c3151293f42903f.png').default
          }
        />
      </div>
    </div>
  );
};
export default mobile;
