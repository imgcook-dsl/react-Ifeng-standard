import React, { useState, useEffect } from 'react';

import styles from './index.module.css';

const Mod3 = (props) => {
  return (
    <div className={styles.list1V3}>
      <div className={styles.layer} />
      <div className={styles.header3}>
        <div className={styles.titleWrapper3}>
          <span className={styles.title4} lines={1}>
            片段花絮
          </span>
        </div>
      </div>
      <div className={styles.body3}>
        <div className={styles.containerItem01}>
          <div className={styles.wrapper8}>
            <img
              className={styles.entryPic}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5c9a7ef0b59b11ec888be34f50965030.png'}
            />
            <div className={styles.wordWrapper}>
              <span className={styles.word} lines={1}>
                31:27
              </span>
            </div>
          </div>
          <div className={styles.captionWrapper4}>
            <span className={styles.caption4} lines={2}>
              中情局的一系列神秘操作集锦视频的是…
            </span>
          </div>
        </div>
        <div className={styles.containerItem11}>
          <div className={styles.wrapper9}>
            <img
              className={styles.entryPic1}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5a2168a0b59b11ecb68f21bd8980e873.png'}
            />
            <div className={styles.tagWrapper1}>
              <span className={styles.tag3} lines={1}>
                31:27
              </span>
            </div>
          </div>
          <div className={styles.titleWrapper4}>
            <span className={styles.title5} lines={2}>
              中情局的一系列神秘操作集锦视频的是…
            </span>
          </div>
        </div>
        <div className={styles.containerItem21}>
          <div className={styles.itemWrapper}>
            <img
              className={styles.item}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5242f180b59b11eca2c581813b413e4a.png'}
            />
          </div>
          <div className={styles.captionWrapper5}>
            <span className={styles.caption5} lines={2}>
              中情局的一系列神秘操作集锦视频的是…
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mod3;
