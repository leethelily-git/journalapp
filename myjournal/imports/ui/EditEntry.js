import React, { Component } from 'react';
import { Entries } from '../api/entries';

export default class EditEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          description: "",
          date: ""
        };
    }
  
    handleChange = (entry) => {
      const field = entry.target.name;

      this.setState({
        [field]: entry.target.value
      })
    }

    handleSubmit = (entry) => {
      const {title, description, date} = this.state

      // Entries.update({
      //   title,
      //   description,
      //   date
      // });
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input 
              type="text"
              placeholder={this.state.title}
              name="title"
              value={this.state.title}
              onChange={this.handleChange}  
            />
            <label>Description</label>
            <input 
              type="description"
              placeholder={this.state.description}
              name="description"
              value={this.state.description}
              onChange={this.handleChange}  
            />
            <label>Date</label>
            <input 
              type="date"
              placeholder={this.state.date}
              name="date"
              value={this.state.date}
              onChange={this.handleChange}  
            />
          </form>
        </div>
      );
    }
}