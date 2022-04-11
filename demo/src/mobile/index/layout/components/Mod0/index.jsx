import React, { useState, useEffect } from 'react';

import styles from './index.css';

const Mod0 = (props) => {
  return (
    <div className={styles.group}>
      <div className={styles.header}>
        <img
          className={styles.floorBg}
          src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5caef150b59b11ec8ea205d5b701cc38.png'}
        />
      </div>
      <div className={styles.body}>
        <img
          className={styles.banner}
          src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/6454f350b59b11ec958a09e4edf763b7.png'}
        />
      </div>
    </div>
  );
};
export default Mod0;
