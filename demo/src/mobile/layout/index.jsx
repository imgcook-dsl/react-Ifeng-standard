import React, { useState, useEffect } from 'react';

import Mod0 from './components/Mod0';
import Mod1 from './components/Mod1';
import Mod2 from './components/Mod2';
import Mod3 from './components/Mod3';
import Mod4 from './components/Mod4';

import styles from './index.module.css';

const Layout = (props) => {
  return (
    <div className={styles.page}>
      <Mod0 />
      <Mod1 />
      <Mod2 />
      <Mod3 />
      <Mod4 />
    </div>
  );
};
export default Layout;
