import React, { Component } from 'react';
import Card from './Card';
class App extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Card
          header="We are Humans"
          subheader="and we love humans"
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
