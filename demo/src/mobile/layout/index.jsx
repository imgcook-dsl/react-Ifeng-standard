import React, { useState, useEffect } from 'react';

import Body from './components/Body';
import Footer from './components/Footer';

import styles from './index.css';

const Layout = (props) => {
  return (
    <div style={styles.mod}>
      <div style={styles.header} />
      <Body />
      <Footer />
    </div>
  );
};
export default Layout;
