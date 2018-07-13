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

  render() {
    const { jsonData } = this.state;
    if (this.state.loading) {
      return <div>Loading</div>;
    }
    return (
      <div style={styles.root}>
        {console.log(jsonData)};
        <Card
          header={jsonData[0].title}
          subheader="Header test"
          image="https://picsum.photos/300/150/?random"
          liked="true"
          text="We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite."
        />
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
