import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import Starship from './Starship.js';
import './App.css';


class App extends Component {

  componentWillMount(){
    this.props.starshipsActions.fetchStarship();
  }

  render() {
    const {
      starships
    } = this.props;

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Star Wars PWA</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div className="App-items-list">
          {starships && starships.items ? starships.items.map((starship, i) => {
            return <Starship key={i} starship={starship} />
          }) : null}
        </div>
      </div>
    );
  }
}

export default App;
