import React, { useState, useEffect } from 'react';

import styles from './index.module.css';

const Mod2 = (props) => {
  return (
    <div className={styles.list1V21}>
      <div className={styles.empty1} />
      <div className={styles.header2}>
        <div className={styles.container5}>
          <div className={styles.wrapper7}>
            <span className={styles.title1} lines={1}>
              选集
            </span>
            <div className={styles.horizontalLine} />
          </div>
          <div className={styles.captionWrapper1}>
            <span className={styles.caption1} lines={1}>
              相关推荐
            </span>
          </div>
        </div>
        <div className={styles.titleWrapper1}>
          <span className={styles.title2} lines={1}>
            共10集
          </span>
        </div>
      </div>
      <div className={styles.body2}>
        <div className={styles.grid}>
          <div className={styles.colItem0}>
            <div className={styles.empty2} />
            <div className={styles.group2}>
              <div className={styles.captionWrapper2}>
                <span className={styles.caption2} lines={1}>
                  第 1 集
                </span>
              </div>
              <div className={styles.infoWrapper}>
                <span className={styles.info} lines={1}>
                  这届奥特曼长得有奥特…
                </span>
              </div>
            </div>
          </div>
          <div className={styles.colItem1}>
            <div className={styles.empty3} />
            <div className={styles.group3}>
              <div className={styles.titleWrapper2}>
                <span className={styles.title3} lines={1}>
                  第 2 集
                </span>
              </div>
              <div className={styles.metaWrapper}>
                <span className={styles.meta} lines={1}>
                  这届奥特曼长得有奥特…
                </span>
              </div>
            </div>
          </div>
          <div className={styles.container6}>
            <div className={styles.container7}>
              <div className={styles.captionWrapper3}>
                <span className={styles.caption3} lines={1}>
                  第 3 集
                </span>
              </div>
              <div className={styles.subtitleWrapper}>
                <span className={styles.subtitle} lines={1}>
                  这届奥特曼长得有奥特…
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mod2;
