import React, { useState, useEffect } from 'react';
import { fetch } from 'whatwg-fetch';
import Carousel from 'antd';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import styles from './index.css';

const Layout = (props) => {
  const [state, setState] = useState({
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  });

  const getInfo = () => {
    return fetch('https://api.ifengcloud.ifeng.com/mock/1735/Active_Shareofficer_User/getIndexData', { method: 'GET' })
      .then((response) => response.json())
      .then((data, error) => {
        console.log('请求数据为', data);
        return data;
      })
      .catch((e) => {
        console.log('error', e);
      });
  };

  return (
    <div style={styles.mod}>
      <Carousel style={styles['']}>
        <div style={styles.header}>
          {[1, 2].map((item, index) => {
            return (
              <span key={index} style={styles.header}>
                {item.name}
              </span>
            );
          })}
        </div>
      </Carousel>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
export default Layout;
