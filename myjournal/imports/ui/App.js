import React, { Component } from 'react';
import AddEntry from './AddEntry';
import ListEntries from './ListEntries';
// we import withTracker and Events into our app file
import { withTracker } from 'meteor/react-meteor-data';
import { Entries } from "../api/entries";

// Create a new React Component `EventApp`
class JournalApp extends Component {
  render() {
    return (
      <div>
        <AddEntry />
        <pre>DB Stuff: {JSON.stringify(this.props, null, ' ')} </pre>
        <ListEntries {...this.props}/>  
      </div>
    );
  }
}

// Wrap `JournalApp` with the HOC withTracker and call the new component we get `App`
const App = withTracker(() => {
  return {
    entries: Entries.find({}). fetch()
  }
})(JournalApp);

// export the component `App`
export default App;