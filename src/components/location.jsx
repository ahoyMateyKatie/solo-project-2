import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div className="locationBox">
        <div>Location: {this.props.loc}</div>
        <div>Description: {this.props.des}</div>
        <div>Restaurants: {this.props.rest}</div>
        <div>Date: {this.props.date}</div>
      </div>
    );
  }
}

export default Location;

//<Location key={i} loc={this.state.location[i]} des={this.state.description[i]} rest={this.state.restaurant[i]} date={this.state.date[i]}/>
