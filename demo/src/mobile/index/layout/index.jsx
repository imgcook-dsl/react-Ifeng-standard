import React, { useState, useEffect } from 'react';

import Mod0 from './components/Mod0/index.jsx';
import Mod1 from './components/Mod1/index.jsx';
import Mod2 from './components/Mod2/index.jsx';
import Mod3 from './components/Mod3/index.jsx';
import Mod4 from './components/Mod4/index.jsx';

import styles from './index.css';

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
