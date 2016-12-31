import React, { Component } from 'react';
import { Navbar, Jumbotron } from 'react-bootstrap';
import Footer from '../Footer.js';
import Sidebar from '../Sidebar.js';
import './App.css';


class App extends Component {

  render() {

    return (
      <div className="App">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Star Wars PWA</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Jumbotron>
          <h1>Explore data from<span>STAR WARS</span></h1>
        </Jumbotron>
        <div className="App-wrapper">
          <Sidebar />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
