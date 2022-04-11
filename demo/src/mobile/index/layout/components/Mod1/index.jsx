import React, { useState, useEffect } from 'react';

import styles from './index.css';

const Mod1 = (props) => {
  return (
    <div className={styles.list1V2}>
      <div className={styles.header1}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.empty} />
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <span className={styles.title} lines={1}>
            简介
          </span>
        </div>
        <div className={styles.container1}>
          <div className={styles.wrapper1}>
            <span className={styles.comment} lines={1}>
              点我发评论
            </span>
          </div>
          <div className={styles.wrapper2}>
            <img
              className={styles.iconChat}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/50c9e610b59b11ec95b04da6c9445af8.png'}
            />
            <span className={styles.num} lines={1}>
              1345
            </span>
          </div>
        </div>
      </div>
      <div className={styles.body1}>
        <div className={styles.captionWrapper}>
          <span className={styles.caption} lines={1}>
            中情局的秘密档案
          </span>
        </div>
        <div className={styles.container2}>
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
        <div className={styles.container3}>
          <div className={styles.wrapper3}>
            <div className={styles.group1}>
              <img
                className={styles.largeIcon}
                src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/50e05440b59b11ec958a09e4edf763b7.png'}
              />
              <img
                className={styles.iconComplete}
                src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/4fe2e170b59b11ec9bf31162114c6041.png'}
              />
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
      <div className={styles.footer}>
        <div className={styles.container4}>
          <div className={styles.iconLikeWrapper}>
            <img
              className={styles.iconLike}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/506ad620b59b11ec90f12199faeba7d5.png'}
            />
          </div>
          <div className={styles.wrapper4}>
            <span className={styles.num1} lines={1}>
              9
            </span>
          </div>
        </div>
        <div className={styles.containerItem0}>
          <div className={styles.iconStarWrapper}>
            <img
              className={styles.iconStar}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/506be790b59b11ecb68f21bd8980e873.png'}
            />
          </div>
          <div className={styles.wrapper5}>
            <span className={styles.favor} lines={1}>
              收藏
            </span>
          </div>
        </div>
        <div className={styles.containerItem1}>
          <div className={styles.iconWechatWrapper}>
            <img
              className={styles.iconWechat}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5058fbd0b59b11ecbc6b6f565c95302d.png'}
            />
          </div>
          <div className={styles.tagWrapper}>
            <span className={styles.tag2} lines={1}>
              微信
            </span>
          </div>
        </div>
        <div className={styles.containerItem2}>
          <div className={styles.wrapper6}>
            <img
              className={styles.icon}
              src={'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/50572710b59b11ec853d8df02c51a0df.png'}
            />
          </div>
          <div className={styles.labelWrapper}>
            <span className={styles.label} lines={1}>
              朋友圈
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mod1;
