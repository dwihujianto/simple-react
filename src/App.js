import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap'
import ListItem from './ListItem'

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader> Simple animals list </PageHeader>
        <ListItem/>
      </div>
    );
  }
}

export default App;
