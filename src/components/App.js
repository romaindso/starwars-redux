import React, { Component } from 'react';
//import logo from '../assets/images/logo.svg';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Item from './Item.js';
import './App.css';

class App extends Component {

  componentWillMount(){
    this.props.itemsActions.fetchAll();
  }

  render() {
    const {
      items
    } = this.props;

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">PWA</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
        </Navbar>
        {items && items.items ? items.items.map((item, i) => {
          return <p key={i}>{item}</p>
        }) : null}
      </div>
    );
  }
}

export default App;
