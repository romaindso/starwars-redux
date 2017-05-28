import React, { Component } from 'react';
import { Link } from 'react-router';
import './Sidebar.css';

const ACTIVE = { color: '#ebd800' };

class Sidebar extends Component {

  render() {

    return (
      <aside className="Sidebar">
        <ul>
          <li><Link to="/starships" activeStyle={ACTIVE}>Starships</Link></li>
          <li><Link to="/characters">Characters</Link></li>
          <li><Link to="/">Species (!)</Link></li>
          <li><Link to="/">Planets (!)</Link></li>
          <li><Link to="/">Films (!)</Link></li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
