import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jsonData: [],
      loading: true
    };
  }

  componentDidMount() {
    //get entire JSON payload and save to class state
    fetch('http://localhost:3001/cards')
      .then(response => response.json())
      .then(jsonresponse => {
        this.setState({
          loading: false,
          jsonData: jsonresponse
        });
      })
      .catch(error => {
        console.log('error' + error);
      });
  }

  isUndefined = data => {
    let finalSubTitle = '';
    if (typeof data === 'undefined') {
      finalSubTitle = '\xa0'; //space in js
    } else {
      finalSubTitle = data;
    }

    return finalSubTitle;
  };

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
    //requests read from state rather than JSON (FASTER)
    this.setState({
      jsonData
    });

    //Push new payload into the Json REST End API
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

  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }
    return (
      <div style={styles.root}>
        {console.log('render')}
        {this.state.jsonData.map((jdata, jindex) => (
          <Card
            key={jindex}
            id={jdata.id}
            header={jdata.title}
            subheader={this.isUndefined(jdata.subtitle)}
            image={jdata.image_url}
            liked={jdata.is_liked}
            href={jdata.href}
            text={jdata.text}
            // send like status back with id later as a *pointer to JSON
            callBack={this.callBack.bind(this)}
          />
        ))}
      </div>
    );
  }
}
const styles = {
  root: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex'
  }
};

export default App;
