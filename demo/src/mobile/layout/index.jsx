'use strict';
import React, { useState, useEffect, memo } from 'react';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import styles from './index.module.css';

export default memo((props) => {
  return (
    <div className={styles.mod}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
});
