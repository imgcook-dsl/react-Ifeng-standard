import React, { useState, useEffect } from 'react';

import styles from './index.css';

const mobile = (props) => {
  return (
    <div className={styles.body1}>
      <div className={styles.captionWrapper}>
        <span className={styles.caption} lines={1}>
          中情局的秘密档案
        </span>
      </div>
      <div className={styles.container1}>
        <div className={styles.tagWrapperItem0}>
          <span className={styles.tag} lines={1}>
            专题
          </span>
        </div>
        <div className={styles.tagWrapperItem1}>
          <span className={styles.tag1} lines={1}>
            军事
          </span>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.wrapper1}>
          <div className={styles.group3}>
            <img
              className={styles.largeIcon}
              src={
                require('https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a3a3e0b0baf611ec9ed04d6cdd4ef585.png')
                  .default
              }
            />
            <div className={styles.iconDownWrapper}>
              <img
                className={styles.iconDown}
                src={
                  require('https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a34d5c40baf611ecbfa74fcb637c6970.png')
                    .default
                }
              />
            </div>
          </div>
          <div className={styles.videoWrapper}>
            <span className={styles.video} lines={1}>
              记录大时代
            </span>
          </div>
        </div>
        <div className={styles.articleWrapper}>
          <span className={styles.article} lines={3}>
            美国中央情报局再次因为丑闻成为全球焦点，从暴力对待战俘开始，新兵被强制要求此文字打点显示规美国中央情报局再次因为丑闻成为全球焦点。
          </span>
        </div>
      </div>
    </div>
  );
};
export default mobile;
