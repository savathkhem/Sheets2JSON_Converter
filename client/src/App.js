import React, { Component, Fragment } from 'react';
import { NavBar, Body } from './components/Layout/'
import Card from './components/Card'
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <NavBar />
        <Body>
          <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
          <Card />
          </div>
        </Body>
      </Fragment>
    );
  }
}

export default App;
