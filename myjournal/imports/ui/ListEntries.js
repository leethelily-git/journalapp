import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Entries } from '../api/entries';

class ListEntries extends Component {
  // constructor(props) {
    // super(props);
    // this.handleEdit = this.handleEdit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.state = {
    //   isEdit: false,
      // title: "",
      // description: "",
      // date: ""
  //   }
  // }

  handleEdit = (entryId) => {
    // this.setState({
    //   isEdit: true
    // });

    this.props.handleEdit(entryId);

    // const {entryId, title, description, date} = editObj;
    // Entries.remove({_id: entryId})
    // const editAttributes = {title, description, date}

    // return  <AddEntry {...editAttributes} />
  }

  handleDelete = (entryId) => {
    // this.setState({
    //   isEdit: false
    // });

    Entries.remove({_id: entryId})
  }

  render() {
    // const isEdit = this.state.isEdit;
    // const editField;

    // if (isEdit) {
    //   editField = (
    //     <form>
    //       <label>Title: </label>
    //     </form>
    //   )
    // }

    return (
      <div>
        {this.props.entries.map((entry) => (
          <div className="list-group" key={entry._id} style={{ margin: "20px 100px" }}>
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{entry.title}</h5>
                <p>{entry.date}</p>
              </div>
              <p className="mb-1">{entry.description}</p>
              <div className="float-right">
                  <button onClick={() => this.handleEdit(entry._id)} className="btn btn-outline-warning" style={{margin: "10px"}}>Edit</button>
                  <button onClick={() => this.handleDelete(entry._id)} className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    entries: Entries.find({}). fetch()
  }
})(ListEntries);