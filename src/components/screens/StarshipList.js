import React, { Component} from 'react';
import StarshipItem from '../ui/StarshipItem.js';
import './StarshipList.css';

class StarshipList extends Component {

  componentWillMount(){
    this.props.starshipsActions.fetchStarships();
  }

  render(){
    const {starships} = this.props;

    return (
      <div className="StarshipList">
        <h1>Starships</h1>
        {starships.length ? starships.map((starship, i) => {
          return <StarshipItem key={i} starship={starship} />
        }) : null}
      </div>
    )
  }
}

export default StarshipList;
