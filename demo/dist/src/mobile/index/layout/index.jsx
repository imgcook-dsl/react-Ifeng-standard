import React, { useState, useEffect } from 'react';

import Mod0 from './components/Mod0/index.jsx';
import Mod1 from './components/Mod1/index.jsx';

import styles from './index.css';

const mobile = (props) => {
  return (
    <div className={styles.page}>
      <Mod0 />
      <Mod1 />
    </div>
  );
};
export default mobile;
