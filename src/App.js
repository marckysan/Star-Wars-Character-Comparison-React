import React, { Component } from 'react';

import Comparator from './containers/Comparator/Comparator';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className= {classes.App}>
        <section className = {classes.Appheader}>
          <h2 className = {classes.headin}g>Star Wars Character Comparison</h2>
          <Comparator />
        </section>
        
      </div>
    );
  }
}

export default App;
