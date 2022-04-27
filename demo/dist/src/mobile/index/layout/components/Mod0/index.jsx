import React, { useState, useEffect } from 'react';

import Component1 from './Component1/index.jsx';

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
      <Component1 />
    </div>
  );
};
export default mobile;
