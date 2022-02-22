import React, { useState, useEffect } from 'react';

import styles from './index.css';

const Header = (props) => {
  return (
    <div
      style={styles.fuck}
      onClick={(e) => {
        alert('hello wordl3');
      }}
      hmComponent={'van-button'}
    >
      {[{ name: 'Canan' }, { age: '18' }].map((item, index) => {
        return (
          <span key={index} style={styles.header}>
            {item.name}
          </span>
        );
      })}
    </div>
  );
};
export default Header;
