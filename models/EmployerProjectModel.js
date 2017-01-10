var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var projectSchema = new Schema ({
  name: String,
  description:  String,
  image: String,
  submissions: [], 
})

var Project = mongoose.model("Project", projectSchema);
module.exports = Project;
  
