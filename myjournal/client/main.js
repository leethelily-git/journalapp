import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import App from '../imports/ui/App.js';
import AddEntry from '../imports/ui/AddEntry.js'

Meteor.startup(() => {
  ReactDOM.render(<AddEntry />, document.getElementById('app'));
});