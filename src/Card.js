import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const avatarurl =
      'https://media.licdn.com/dms/image/C4D03AQEcGwaJjqKikA/profile-displayphoto-shrink_200_200/0?e=1536796800&v=beta&t=Clz9gIhNEeAcdVStgHEk3yrVhINIIVI40giF41oVXTY';

    return (
      <section style={styles.root}>
        <div style={styles.sectionImg}>
          <img src={this.props.image} style={styles.sectionPhoto} />
        </div>
        <img src={avatarurl} style={styles.avatar} />
        <div style={styles.sectionHeader}>
          <div style={styles.sectionHeaderText}>
            <h1 style={styles.header}>{this.props.header}</h1>
            <h5 style={styles.subheader}>{this.props.subheader}</h5>
          </div>
        </div>

        <div style={styles.text}>{this.props.text}</div>

        <div style={styles.action} />
      </section>
    );
  }
}

Card.propTypes = {
  image: PropTypes.any,
  header: PropTypes.text,
  subheader: PropTypes.text,
  text: PropTypes.text
};

//img url grab
// export the styles later
const styles = {
  root: {
    display: 'block',

    maxWidth: '308px',
    lineHeight: '19px',
    margin: 'auto',
    border: '1px solid #eee',
    borderRadius: '1px',
    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff'
  },
  sectionPhoto: {
    width: '308px',
    height: '133px'
  },
  sectionImg: {
    height: '133px'
  },
  sectionHeader: {
    padding: '19px',
    display: 'flex'
  },
  sectionHeaderText: {
    marginLeft: '60px'
  },
  subheader: {
    margin: '0',
    textTransform: 'uppercase',
    fontSize: '12px',
    color: '#ADADAD',
    letterSpacing: '0.2px'
  },
  header: {
    fontSize: '23px',
    color: '#3a3a3a',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '4px',
    marginTop: '2px'
  },
  text: {},
  action: {},
  avatar: {
    position: 'absolute',
    margin: '15px 19px',
    width: 'auto',
    height: 'auto',
    maxWidth: '50px',
    maxHeight: '50px',
    borderRadius: '50px'
  }
};

export default Card;
