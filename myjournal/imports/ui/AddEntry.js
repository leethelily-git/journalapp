
import React, { Component } from 'react';
import { Entries } from '../api/entries';

export default class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: ""
    }
  }

  handleChange = (entry) => {
    const field = entry.target.name;

    // we use square braces around the key `field` coz its a variable (we are setting state with a dynamic key name)
    this.setState({
      [field]: entry.target.value
    })
  }

  handleSubmit = (entry) => {
    entry.preventDefault();

    //Setting local variables from the state variables
    const {title, description, date} = this.state

    //Inserting the local variables into the mongodb entries collection
    Entries.insert({
      title,
      description,
      date
    });

    //Clear input fields on submit
    this.setState({
      title: "",
      description: "",
      date: ""
    });

    alert("Form has been submitted successfully")
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