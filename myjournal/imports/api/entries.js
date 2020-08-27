import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

// Creates a new Mongo collections and exports it
export const Entries = new Mongo.Collection('entries');

Entries.allow({
  insert() {
    return true;
  },
  update(){
    return true;
  },
  remove() {
    return true;
  }
});

// export const entries = new SimpleSchema({
//   title: {
//     type: String,
//     label: "title",
//     max: 5
//   },
//   description: {
//     type: String,
//     label: "description",
//     optional: true
//   },
//   date: {
//     type: Date,
//     label: "date"
//   }
// }, {
//   clean: true,
// });

if (Meteor.isServer) {
  Meteor.publish('entries.list', function() {
    this.ready();
    return Entries.find({
      title: "ABC"
    });
  });
}
