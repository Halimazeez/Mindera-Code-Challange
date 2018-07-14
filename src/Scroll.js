import React, { Component } from 'react';

export default class Scroll extends Component {
  render() {
    return (
      <div style={styles.buttons}>
        <div onClick={this.props.leftClick}>
          <i className="material-icons" style={styles.href}>
            chevron_left
          </i>
        </div>
        <div onClick={this.props.rightClick}>
          <i className="material-icons" style={styles.href}>
            chevron_right
          </i>
        </div>
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
