
import React from 'react';
import {Link} from 'react-router';

const Filter = ({action, filter, children}) => {
  const style = {
    margin: '0 10px',
    padding: '6px 10px',
    display: 'inline-block',
    color: '#ebd800',
    backgroundColor: '#32383e',
    textDecoration: 'none',
    opacity: 0.6
  };
  let url = `characters?activeFilter=${filter}`;

  return (
    <Link 
      to={url} 
      style={style}
      activeStyle={{
        opacity: 1
      }} 
    >
      {children}
    </Link>
  )
}

export default Filter;