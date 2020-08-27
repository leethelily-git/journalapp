import React, { Component } from 'react';
import { Entries } from '../api/entries';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

export const ListEntries = (isSubReady) => {
  let myEntries = [];

  console.log(isSubReady);

  // Entries.insert({
  //   title: "ABC",
  //   description: "THIS IS NEW",
  //   date: "123"
  // })

  // Entries.insert({
  //   title: "DEF",
  //   description: "THIS IS NEW",
  //   date: "123"
  // })

  if (isSubReady) {
    // Entries.insert({
    //   title: "JEOD",
    //   description: "IUDW",
    //   date: "uwehdiwe"
    // })
    // Entries.insert({
    //   title: "ABC",
    //   description: "DEF",
    //   date: "ewidj"
    // })

    myEntries = Entries.find().fetch();
    console.log('Collecting entries from publication')
    console.log(myEntries)
  }

  handleEdit = (entryId) => {
    this.props.handleEdit(entryId);
  }

  handleDelete = (entryId) => {
    Entries.remove({_id: entryId});
  }

  renderEntries = () => {
    let elements = [];
    console.log('Rendering entries')
    myEntries.forEach((entry, i) => {
      console.log('Pushing elements')
      elements.push(
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
      );
    });
    return elements;
  }

  return (
    {isSubReady} ?
    <div>
      { this.renderEntries() }
    </div>
    :
    <div>
      Loading...
    </div>
  )
};

// export default ListEntries;

//////////////////////////////////////////


// class ListEntries extends Component {

//   handleEdit = (entryId) => {

//     this.props.handleEdit(entryId);
//   }

//   handleDelete = (entryId) => {

//     Entries.remove({_id: entryId})
//   }

//   render() {

//     return (
//       <div>
//         {this.props.entries.map((entry) => (
//           <div className="list-group" key={entry._id} style={{ margin: "20px 100px" }}>
//             <div className="list-group-item list-group-item-action flex-column align-items-start">
//               <div className="d-flex w-100 justify-content-between">
//                 <h5 className="mb-1">{entry.title}</h5>
//                 <p>{entry.date}</p>
//               </div>
//               <p className="mb-1">{entry.description}</p>
//               <div className="float-right">
//                   <button onClick={() => this.handleEdit(entry._id)} className="btn btn-outline-warning" style={{margin: "10px"}}>Edit</button>
//                   <button onClick={() => this.handleDelete(entry._id)} className="btn btn-outline-danger">Delete</button>
//                 </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

export default withTracker(() => {
  const entriesSub = Meteor.subscribe('entries.list');
  const isSubReady = entriesSub.ready();
  console.log("IM THE TRACKER")
  return {
    isSubReady
  }
})(ListEntries);