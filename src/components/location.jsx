import React, { Component } from 'react';

class Location extends Component {
  render() {
    return (
      <div className="locationBox">
        <div>Location: {this.props.location}</div>
        <div>Description: {this.props.description}</div>
        <div>Restaurants: {this.props.restuarant}</div>
        <div>Date: {this.props.date}</div>
      </div>
    );
    }
  };

export default Location;