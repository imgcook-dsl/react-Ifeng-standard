import React, { useState, useEffect } from 'react';

import styles from './index.css';

const mobile = (props) => {
  return (
    <div className={styles.body}>
      <img
        className={styles.banner}
        src={
          require('https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a70470d0baf611ec9c3151293f42903f.png').default
        }
      />
    </div>
  );
};
export default mobile;
