import React, { useState, useEffect } from 'react';

import styles from './index.css';

const Body = (props) => {
  const [state, setState] = useState([
    { age: '18', name: 'Canan' },
    { age: '28', name: 'Dany' },
  ]);

  const handleClick = () => {
    alert('hello world');
  };

  return (
    <div style={styles.body}>
      {state.map((item, index) => {
        return (
          <div key={index} style={styles.header}>
            <span style={styles.header}>{item.age}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Body;
