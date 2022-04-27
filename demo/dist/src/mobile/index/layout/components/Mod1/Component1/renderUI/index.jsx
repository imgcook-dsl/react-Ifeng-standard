import React, { useState, useEffect } from 'react';

import styles from './index.css';

const mobile = (props) => {
  return (
    <div className={styles.header1}>
      <div className={styles.container}>
        <div className={styles.empty} />
        <div className={styles.titleWrapper}>
          <span className={styles.title} lines={1}>
            简介
          </span>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.group1}>
            <span className={styles.comment} lines={1}>
              点我发评论
            </span>
          </div>
          <div className={styles.group2}>
            <img
              className={styles.iconChat}
              src={
                require('https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a39eb090baf611ecbcc6e3b0265aa63b.png')
                  .default
              }
            />
            <span className={styles.num} lines={1}>
              1345
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default mobile;
