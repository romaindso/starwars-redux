import React, { Component } from 'react';
// import './Starship.css';

class StarshipDetails extends Component {

  componentWillMount(){
    const { params } = this.props
    if(params.id){
      this.props.starshipsActions.fetchStarshipDetails(params.id);
    }
  }

  render() {
    return (
      <div className="StarshipDetails">
        yolo
      </div>
    );
  }
}

export default StarshipDetails;
