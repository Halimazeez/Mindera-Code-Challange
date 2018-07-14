import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  sendCallBack = () => {
    this.props.callBack(this.props.id, this.props.liked);
  };

  render() {
    // console.log('id:' + this.props.id + 'liked:' + this.props.liked);
    //console.log(typeof this.props.id);

    //My face
    const avatarurl =
      'https://media.licdn.com/dms/image/C4D03AQEcGwaJjqKikA/profile-displayphoto-shrink_200_200/0?e=1536796800&v=beta&t=Clz9gIhNEeAcdVStgHEk3yrVhINIIVI40giF41oVXTY';

    return (
      <section style={styles.root}>
        <a href={this.props.href} style={styles.href}>
          <div style={styles.sectionImg}>
            <img src={this.props.image} style={styles.img} alt="Random" />
          </div>

          <img src={avatarurl} style={styles.avatar} alt="Avatar" />

          <div style={styles.sectionHeader}>
            <div style={styles.sectionHeaderText}>
              <h1 style={styles.header}>{this.props.header}</h1>
              <h5 style={styles.subheader}>{this.props.subheader}</h5>
            </div>
          </div>

          <div style={styles.sectionTxt}>{this.props.text}</div>
        </a>
        <div style={styles.actionBtn} onClick={this.sendCallBack}>
          {this.props.liked === true ? (
            <a style={styles.href}>
              <div>
                <div>&#10084;</div>
              </div>
            </a>
          ) : (
            <a style={styles.href}>
              <div>&#9825;</div>
            </a>
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
    marginLeft: '26px',
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
    fontSize: '30px',
    lineHeight: '40px',
    width: '50px',
    margin: 'auto'
  },

  //Link decoration
  href: {
    textDecoration: 'none',
    cursor: 'pointer'
  }
};

export default Card;
