import React, { useState, useEffect } from 'react';

import Body from './components/Body';
import Footer from './components/Footer';

import styles from './index.css';

const Layout = (props) => {
  return (
    <div style={styles.mod}>
      <div style={styles.header}>
        {[{ name: 'xjn' }, { name: 'xjn' }].map((item, index) => {
          return (
            <span key={index} style={styles.header}>
              {item.name}
            </span>
          );
        })}
      </div>
      <Body />
      <Footer />
    </div>
  );
};
export default Layout;
