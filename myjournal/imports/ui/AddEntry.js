
import React, { Component } from 'react';

export default class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: ""
    }
  }

  handleChange = (event) => {
    const field = event.target.name;

    // we use square braces around the key `field` coz its a variable (we are setting state with a dynamic key name)
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Create backend Meteor methods to save created events
    alert("Will be Saved in a little bit :)")
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <h4>My Journal</h4>
        </div>
        <hr />

        <div className="jumbotron" style={{ margin: "0 500px" }}>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter journal title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter journal description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Entry Date:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter date in the format mm.dd.yyyy"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">Add Entry</button>
          </form>
        </div>
      </div>
    );
  }
}