import React, { Component } from 'react';
import { Link } from 'react-router';
import './Sidebar.css';

class Sidebar extends Component {

  render() {

    return (
      <aside className="Sidebar">
        <ul>
          <li><Link to="/starships">Starships</Link></li>
          <li><Link to="/">Species (todo)</Link></li>
          <li><Link to="/">Planets (todo)</Link></li>
          <li><Link to="/">People (todo)</Link></li>
          <li><Link to="/">Films (todo)</Link></li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
