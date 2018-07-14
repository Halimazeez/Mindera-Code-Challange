import React, { Component } from 'react';

export default class Scroll extends Component {
  render() {
    return (
      <div style={styles.buttons}>
        <i className="material-icons" style={styles.href}>
          chevron_left
        </i>
        <i className="material-icons" style={styles.href}>
          chevron_right
        </i>
      </div>
    );
  }
}
const styles = {
  href: {
    textDecoration: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '40px'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    color: '#27ae60'
  }
};
