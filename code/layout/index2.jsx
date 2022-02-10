'use strict';
// Hooks式;
import React, { useState, useEffect } from 'react';
import { fetch } from 'whatwg-fetch';
import jsonp from 'fetch-jsonp';
import styles from './style.css';
const print = function(value) {
  // console.log(value);
};
const Page_0 = () => {
  const [state, setState] = useState([]);
  return (
    <div style={styles.box}>
      {this.state.data.map((item, index) => {
        return (
          <div
            key={index}
            onClick={e => {
              window.open(item.url, '_blank');
            }}
            data-url={item.url}
            key={item.index}
          >
            <div style={styles.bd}>
              <img style={styles.layer} src={'https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png'} />
              <img style={styles.bg} src={item.coverImage} />
              <div style={styles.wrap}>
                <img
                  style={styles.riverdinwei}
                  src={'https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png'}
                />
                <span style={styles.distance}>距离500m</span>
              </div>
            </div>
            <div style={styles.main}>
              <span style={styles.title}>{item.title}</span>
            </div>
            <div style={styles.ft}>
              <div style={styles.block}>
                <img style={styles.xianjin} src={'https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png'} />
                <span style={styles.fashionHome}>{item.user.userName}</span>
              </div>
              {this.isReadCountShow(item.readCount) && (
                <div style={styles.group}>
                  <img
                    style={styles.favorite}
                    src={'https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png'}
                  />
                  <span style={styles.num}>{item.readCount}</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Page_0;
