import React, { useState, useEffect } from 'react';

import styles from './index.css';

const mobile = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.container3}>
        <div className={styles.iconLikeWrapper}>
          <img
            className={styles.iconLike}
            onClick={(e) => {
              console.log('click');
            }}
            src={
              require('https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a37dbb10baf611ec81146d1807e5ef1e.png')
                .default
            }
          />
        </div>
        <div className={styles.wrapper2}>
          <span className={styles.num1} lines={1}>
            9
          </span>
        </div>
      </div>
      <div className={styles.containerItem0}>
        <div className={styles.iconStarWrapper}>
          <img
            className={styles.iconStar}
            src={
              require('https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a37afbf0baf611ec8382e77a5e91dcad.png')
                .default
            }
          />
        </div>
        <div className={styles.wrapper3}>
          <span className={styles.favor} lines={1}>
            收藏
          </span>
        </div>
      </div>
      <div className={styles.containerItem1}>
        <div className={styles.iconWechatWrapper}>
          <img
            className={styles.iconWechat}
            src={
              require('https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a377c7a0baf611eca3b3af3bdc694aac.png')
                .default
            }
          />
        </div>
        <div className={styles.tagWrapper}>
          <span className={styles.tag2} lines={1}>
            微信
          </span>
        </div>
      </div>
      <div className={styles.containerItem2}>
        <div className={styles.wrapper4}>
          <img
            className={styles.icon}
            src={
              require('https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a3757db0baf611ec8a95e9877b16dcfa.png')
                .default
            }
          />
        </div>
        <div className={styles.labelWrapper}>
          <span className={styles.label} lines={1}>
            朋友圈
          </span>
        </div>
      </div>
    </div>
  );
};
export default mobile;
