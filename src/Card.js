import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    //My face
    const avatarurl =
      'https://media.licdn.com/dms/image/C4D03AQEcGwaJjqKikA/profile-displayphoto-shrink_200_200/0?e=1536796800&v=beta&t=Clz9gIhNEeAcdVStgHEk3yrVhINIIVI40giF41oVXTY';

    return (
      <section style={styles.root}>
        <div style={styles.sectionImg}>
          <img src={this.props.image} style={styles.img} />
        </div>

        <img src={avatarurl} style={styles.avatar} />

        <div style={styles.sectionHeader}>
          <div style={styles.sectionHeaderText}>
            <h1 style={styles.header}>{this.props.header}</h1>
            <h5 style={styles.subheader}>{this.props.subheader}</h5>
          </div>
        </div>

        <div style={styles.sectionTxt}>{this.props.text}</div>

        <div style={styles.actionBtn}>
          {this.props.liked == 'true' ? (
            <div>
              <div>&#10084;</div>
            </div>
          ) : (
            <div>&#9825;</div>
          )}
        </div>
      </section>
    );
  }
}

// TypeCheck
Card.propTypes = {
  image: PropTypes.any,
  header: PropTypes.string,
  subheader: PropTypes.string,
  text: PropTypes.string
};

//JSX styling because pure Reactjs
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

  //Photo section
  img: {
    width: '308px',
    height: '133px'
  },
  sectionImg: {
    height: '133px'
  },

  //header section
  sectionHeader: {
    padding: '19px',
    paddingBottom: '0px',
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
  avatar: {
    position: 'absolute',
    margin: '15px 19px',
    width: 'auto',
    height: 'auto',
    maxWidth: '50px',
    maxHeight: '50px',
    borderRadius: '50px'
  },

  //Text section
  sectionTxt: {
    padding: '19px',
    fontSize: '12px',
    lineHeight: '1.583',
    color: '#3A3A3A'
  },

  //Action button
  actionBtn: {
    color: '#27ae60',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20
  }
};

export default Card;
