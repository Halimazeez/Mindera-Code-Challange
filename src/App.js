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
      .then(response => {
        return response.json();
      })
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

  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }
    return (
      <div style={styles.root}>
        {this.state.jsonData.map((data, jindex) => (
          <Card
            {...console.log(data.is_liked)}
            key={jindex}
            id={data.id}
            header={data.title}
            subheader={this.isUndefined(data.subtitle)}
            image={data.image_url}
            liked={data.is_liked}
            href={data.href}
            text={data.text}
          />
        ))}
      </div>
    );
  }
}
const styles = {
  root: {
    marginTop: 10,
    marginBottom: 10
  }
};

export default App;
