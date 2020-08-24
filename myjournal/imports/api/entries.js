import { Mongo } from 'meteor/mongo';

// Creates a new Mongo collections and exports it
export const Entries = new Mongo.Collection('entries');