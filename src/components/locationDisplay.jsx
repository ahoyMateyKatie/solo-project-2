import React, { Component } from "react";
import Location from './Location';

// declare const locationDisplay that will pass in props and all the entries from

class LocationDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      description: "",
      restaurant: "",
      date: "",
    };
  }

  componentDidMount() {
    fetch("/api")
      .then((resp) => resp.json())
      .then((locations) => {
        console.log("this is inside componDM in LocDis", locations);
        const location = [];
        const description = [];
        const restaurant = [];
        const date = [];

        for(let i = 0; i < locations.length; i++){
          location.push(locations[i].location);
          description.push(locations[i].description);
          restaurant.push(locations[i].restaurant);
          date.push(locations[i].date);
        }

        return this.setState({
          location: location,
          description: description,
          restaurant: restaurant,
          date: date,
        });
      })
      .catch((err) => console.log("LocationCreator fetch /api: ERROR: ", err));
  }

  render() {
    // const { location, description, restaurant, date } = this.state;
    // console.log('this is inside render', this.state)
    // console.log("this is in location display", this.state);
    console.log("this is in locDis", this.state.location);

    const allLocs = [];
    for(let i = 0; i < this.state.location.length; i++){
      allLocs.push(<Location key={i} loc={this.state.location[i]} des={this.state.description[i]} rest={this.state.restaurant[i]} date={this.state.date[i]}/>)
    }
    console.log('this is allLocs', allLocs);
    // console.log('object keys', (Object.keys(this.state).length))
    // console.log('location', (this.state[0]))
    // for(let i= 0; i < Object.keys(this.state).length; i++){
    //   return <Location key={i}/>
    // }

    // const allLocs = location.map((loc, i) => {
    //   return <Location key={i} info={loc} />;
    // });

    return (
      <section className="loc">
        <h1>Previous Itinerary</h1>
        {allLocs}
      </section>
    );
  }
}

export default LocationDisplay;
