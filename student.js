var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  courses: [{ type: String, ref: 'Course' }]
});

/* Returns the student's first name, which we will define
 * to be everything up to the first space in the student's name.
 * For instance, "William Bruce Bailey" -> "William" */
// schema.virtual('firstName').get(function(name) {
//   //return 'Not Implemented!';
//   var splitName = name.split(' '); 
//   firstName = splitName[0] || ''; 
// });
/* Returns the student's last name, which we will define
 * to be everything after the last space in the student's name.
 * For instance, "William Bruce Bailey" -> "Bailey" */
schema.virtual('lastName').get(function() {
 return this.name.split(' ')[2];
});

schema.set('toObject', { virtuals: true });
schema.set('toJSON', { virtuals: true });

schema.virtual('firstName').get(function(name) {
  //return this.firstName + ' ' + this.lastName;
// }).set(function(fullName) {
  //this.name.split(' '); 
   
  return this.name.split(' ')[0];;
  //this.lastName = splitName[1] || ''; 
});


// schema.set('toObject', { virtuals: true });
// schema.set('toJSON', { virtuals: true });

module.exports = schema;


