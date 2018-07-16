import React, { Component } from 'react';
import Card from './Card';
import Scroll from './Scroll';
import './styles/app.css';
import Loading from './Loading';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      jsonData: [
        {
          errorstate: 1
        }
      ]
    };
  }

  componentDidMount() {
    //get entire JSON payload and save to class state
    //state always loads from JSON not local
    fetch('http://localhost:3001/cards')
      .then(response => response.json())
      .then(jsonresponse => {
        this.setState({
          loading: false,
          jsonData: jsonresponse
        });
      })
      .catch(error => {
        console.log('error: ' + error);
        this.setState({
          loading: false
        });
      });
  }

  //Default proptypes already in-use for non-api server running
  isUndefined = data => {
    let finalSubTitle = '';
    if (typeof data === 'undefined') {
      finalSubTitle = '\xa0'; //space in js
    } else {
      finalSubTitle = data;
    }

    return finalSubTitle;
  };

  recall = () => {};
  //function uses the id prop sent back from child as ref
  callBack = (id, liked) => {
    const { jsonData } = this.state;
    //invert like state when pressed
    let payload = !liked;

    // REACT STATE UPDATES
    //Keeps requests to a minimum by using state rather than JSON
    //set pointer to JSON db id of object, -1 for actual object key
    let ref = id - 1;
    //update state with object key as pointer
    jsonData[ref].is_liked = payload;
    //triggeres a re-render of the components,
    //updates state state rather than reading from JSON (FASTER)
    this.setState({
      jsonData
    });

    //Push new payload into the Json REST End API for sync of state
    this.updateDB(id, payload);
  };

  updateDB = (id, payload) => {
    fetch(`http://localhost:3001/cards/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        is_liked: payload
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => {
        console.log('error' + error);
      });
  };

  //Vanilla JS rather than the "react-way"
  //Research "refs" and connvert (Still to learn)
  leftClick = () => {
    let element = document.getElementById('cardID');

    //get current right style string
    let rightValue = this.getRight();
    //parse string to num for current right value
    let rightNum = parseInt(rightValue);

    //subtract the width of a node from the current right position
    if (rightNum <= -1334) {
      rightNum = rightNum;
    } else {
      rightNum -= 336;
    }

    //convert value back to string
    let finalValue = rightNum.toString() + 'px';
    //Execute string into document
    element.style.right = finalValue;
  };

  rightClick = () => {
    let element = document.getElementById('cardID');

    //get current right style string
    let rightValue = this.getRight();
    //parse string to num for current right value
    let rightNum = parseInt(rightValue);

    //add the width of a node from the current right position
    //
    if (rightNum >= 1344) {
      rightNum = rightNum;
    } else {
      rightNum += 336;
    }

    //convert value back to string
    let finalValue = rightNum.toString() + 'px';
    //Execute string into document
    element.style.right = finalValue;
  };

  getRight = () => {
    let element = document.getElementById('cardID');
    let styles = window.getComputedStyle(element);
    let right = styles.right;
    //console.log(right);
    //console.log(typeof right);

    return right;
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <main style={styles.main} className="scale">
        <div style={styles.cards} id="cardID" className="cardContainer">
          {this.state.jsonData.map((jdata, jindex) => (
            <Card
              key={jindex}
              id={jdata.id}
              header={jdata.title}
              subheader={this.isUndefined(jdata.subtitle)}
              image={`${jdata.image_url}=${jdata.id}`}
              liked={jdata.is_liked}
              href={jdata.href}
              text={jdata.text}
              // send like status back with id later as a *pointer to JSON
              callBack={this.callBack.bind(this)}
            />
          ))}
        </div>
        <Scroll
          leftClick={this.leftClick.bind(this)}
          rightClick={this.rightClick.bind(this)}
        />
      </main>
    );
  }
}
const styles = {
  cards: {
    display: 'flex',
    position: 'relative'
  },
  main: {
    margin: 'auto',
    overflow: 'hidden'
  }
};

export default App;
