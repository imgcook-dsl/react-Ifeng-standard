import React, { useState, useEffect } from 'react';

import Component1 from './Component1/index.jsx';
import Component2 from './Component2/index.jsx';
import Component3 from './Component3/index.jsx';

import styles from './index.css';

const mobile = (props) => {
  return (
    <div className={styles.list1V2}>
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
};
export default mobile;
