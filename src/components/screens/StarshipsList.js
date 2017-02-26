import React, { Component} from 'react';
import Starship from '../Starship.js';
import './StarshipsList.css';

class StarshipsList extends Component {

  componentWillMount(){
    this.props.starshipsActions.fetchStarship();
  }

  render(){
    const {starships} = this.props;

    return (
      <div className="StarshipsList">
        <h1>Starships</h1>
        {starships && starships.items ? starships.items.map((starship, i) => {
          return <Starship key={i} starship={starship} />
        }) : null}
      </div>
    )
  }
}

export default StarshipsList;
