var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubmissionSchema = new Schema({
  name: String,
  text: String
});

var Submission = mongoose.model('Submission', SubmissionSchema);

module.exports = Submission;



