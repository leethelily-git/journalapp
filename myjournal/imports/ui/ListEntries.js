import React, { Component } from 'react';

export default class ListEntries extends Component {
  render() {
    return (
      <div>
        {/* {this.props.entries.map((entry) => (
            <div>
                <h3>{entry.title}</h3>
                <h3>{entry.description}</h3>
                <h3>{entry.date}</h3>
            </div>
        ))}
      </div>
    ); */}
        {this.props.entries.map((entry) => (
          <div className="list-group" key={entry._id} style={{ margin: "20px 100px" }}>
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{entry.title}</h5>
                {/* <small>{entry.date}</small> */}
              </div>
              <p className="mb-1">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

