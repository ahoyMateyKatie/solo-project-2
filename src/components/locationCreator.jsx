import forbidPropTypes from "eslint-plugin-react/lib/rules/forbid-prop-types";
import { isTSParenthesizedType } from "eslint-plugin-react/lib/util/ast";
import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";

class LocationCreator extends Component {
  // const useInput = (initialValue) => {
  //   const [value, setValue] = useState(initalValue);

  //   const handleChange = (event) => {
  //     setValue.
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
      location: "",
      description: "",
      restaurant: "",
      date: "",
    };
    //binding?
    this.createLocation = this.createLocation.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  createLocation = () => {
    fetch("/api/itinerary", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({...this.state}),
    })
      .then((resp) => resp.json())
      .then((data) => {
        return this.setState({...data });
      })
      .catch((err) =>
        console.log("LocationCreator fetch /api/itinerary: ERROR: ", err)
      );
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <section className="main">
        <h2>Hello World New Travel Itinerary</h2>
        <div className="addItinerary">
          <label htmlFor="location">Location</label>
          <input
            name="location"
            value={this.state.location}
            onChange={this.handleInput}
          />
        </div>
        <div className="addItinerary">
          <label htmlFor="description">Description</label>
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleInput}
          />
        </div>
        <div className="addItinerary">
          <label htmlFor="restaurant">Restaurant</label>
          <input
            name="restaurant"
            value={this.state.restaurant}
            onChange={this.handleInput}
          />
        </div>
        <div className="addItinerary">
          <label htmlFor="date">Date</label>
          <input
            name="date"
            value={this.state.date}
            onChange={this.handleInput}
          />
        </div>
        <button
          type="submit"
          className="createLocation"
          onClick={this.createLocation}
        >
          Save Your Next Destination
        </button>
      </section>
    );
  }
}

export default LocationCreator;

// const saveLocation = () => {

// const body = { location, description, restaurant, date };

// fetch('/api/itinerary', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'Application/JSON'
//   },
//   body: JSON.stringify(body)
// })
//   .then(resp => resp.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log('LocationCreator fetch /api/itinerary: ERROR: ', err));
// }

//need to export
