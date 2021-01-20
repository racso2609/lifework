const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const rolesModel = new Schema(
  {
    Name:{
      type: String,
      required: true
    } ,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Role", rolesModel);