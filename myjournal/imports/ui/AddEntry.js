
import React, { Component } from 'react';
import { Entries } from '../api/entries';
// import { entryValidation } from '../api/entryValidation';

export default class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {
        title: "",
        description: "",
        date: new Date()
      },
      isUpdating: false
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.entry !== this.props.entry) {
      this.setState({
        entry: this.props.entry
      });
    }
    if (prevProps.isUpdating !== this.props.isUpdating) {
      this.setState({
        isUpdating: this.props.isUpdating
      });
    }
  }

  handleChange = (entry) => {
    const field = entry.target.name;

    const newEntry = Object.assign({}, this.state.entry, {[field]: entry.target.value});

    // we use square braces around the key `field` coz its a variable (we are setting state with a dynamic key name)
    this.setState({
      entry: newEntry
    })
  }

  handleSubmit = (entry) => {
    entry.preventDefault();

    //Setting local variables from the state variables
    const { title, description, date } = this.state.entry;

    //Inserting the local variables into the mongodb entries collection
    if (!this.state.isUpdating) {
      Entries.insert({
        title,
        description,
        date
      });
      console.log('Successful insert')
    } else {
      Entries.update(this.state.entry._id, {
        $set: {
          title,
          description,
          date
        }
      });
      console.log('Successful update')
      
      this.setState({
        isUpdating: false
      })
    }

    const newEntry = {
      title: "",
      description: "",
      date: new Date()
    }

    //Clear input fields on submit
    this.setState({
      entry: newEntry
    });
  }

  renderSubmitButton() {
    if(this.state.isUpdating) {
      return ( <button type="submit" className="btn btn-primary">Update This Entry</button>)
    } else {
      return ( <button type="submit" className="btn btn-primary">Add Entry</button>)
    }
  }

  render() {
    const { entry } = this.state;
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
                value={entry.title ? entry.title : ""}
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
                value={entry.description ? entry.description : ""}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Entry Date:</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter date in the format mm.dd.yyyy"
                name="date"
                value={entry.date ? entry.date: ""}
                onChange={this.handleChange}
              />
            </div>

            {this.renderSubmitButton()}
          </form>
        </div>
      </div>
    );
  }
}

// entryValidation.call({entryObj}, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });