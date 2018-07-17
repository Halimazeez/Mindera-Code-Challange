import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/card.css';

class Card extends Component {
  componentDidMount() {
    if (this.props.text === 'ad.') {
      console.log('start');
      let element = document.getElementById('cardID');
      element.styles.right = 0;
    }
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
      <section style={styles.root} className="hover" id="card">
        <a href={this.props.href} style={styles.href}>
          <div style={styles.sectionImg}>
            <img src={this.props.image} style={styles.img} alt="Image" />
          </div>
          <div style={styles.sectionHeader}>
            <img src={avatarurl} style={styles.avatar} alt="Avatar" />

            <div style={styles.sectionHeaderText}>
              <h1 style={styles.header}>{this.props.header}</h1>
              <h5 style={styles.subheader}>{this.props.subheader}</h5>
            </div>
          </div>

          <div style={styles.sectionTxt}>{this.props.text}</div>
        </a>
        <div style={styles.actionBtn} onClick={this.sendCallBack}>
          {this.props.liked === true ? (
            <i className="material-icons" style={styles.href}>
              favorite
            </i>
          ) : (
            <i className="material-icons" style={styles.href}>
              favorite_border
            </i>
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
  text: PropTypes.string,
  sendCallBack: PropTypes.func,
  href: PropTypes.string
};

Card.defaultProps = {
  header: 'yarn start-api',
  text: 'Cards will load automatically when the api server has started.',
  image: 'lol'
};

//JSX styling because pure pure React.js
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '308px',
    lineHeight: '19px',
    margin: '26px 13px 26px 13px',
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
    display: 'flex'
  },
  sectionHeaderText: {
    paddingBottom: '0px',
    padding: '19px 0',
    //marginLeft: '60px',
    maxHeight: '44px'
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
    position: 'relative',
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
    margin: '0px auto',
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: '12px'
  },

  //Link decoration
  href: {
    textDecoration: 'none',
    cursor: 'pointer',
    userSelect: 'none'
  }
};

export default Card;
