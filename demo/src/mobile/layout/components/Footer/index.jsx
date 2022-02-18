import React, { useState, useEffect } from 'react';

import styles from './index.css';

const Footer = (props) => {
  const [state, setState] = useState({ name: 'xjn' });

  const xxx = () => {
    console.log(123231);
  };

  return (
    <div style={styles.footer}>
      <div
        style={styles.header}
        onClick={(e) => {
          console.log(222);
          this.xxx();
        }}
        onAnimationStart={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
};
export default Footer;
