import React, { Component} from 'react';
import Starship from '../Starship.js';
import './Starships.css';

class Starships extends Component {

  componentWillMount(){
    this.props.starshipsActions.fetchStarship();
  }

  render(){
    const {starships} = this.props;

    return (
      <div className="Starships">
        <h1>Starships</h1>
        {starships && starships.items ? starships.items.map((starship, i) => {
          return <Starship key={i} starship={starship} />
        }) : null}
      </div>
    )
  }
}

export default Starships;
