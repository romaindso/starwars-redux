import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import './App.css';


class App extends Component {

  render() {

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Star Wars PWA</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div className="App-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
