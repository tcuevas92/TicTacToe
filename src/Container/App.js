import React, { Component } from 'react';
import GridItem from '../Component/GridItem';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <GridItem />
          <GridItem />
          <GridItem />
        </div>
        <div>
          <GridItem />
          <GridItem />
          <GridItem />
        </div>
        <div>
          <GridItem />
          <GridItem />
          <GridItem />
        </div>
      </div>
    );
  }
}

export default App;