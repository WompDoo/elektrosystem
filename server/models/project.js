var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var project = new Schema({
    ee: {
      name: {type:String, default:"projekti nimi"},
      category: {type:String, default:"projekti kategooria"},
      description: {type:String, default:"projekti info"},
    },
    en: {
        name: {type:String, default:"projekti nimi"},
        category: {type:String, default:"projekti kategooria"},
        description: {type:String, default:"projekti info"},
    },
    ru: {
        name: {type:String, default:"projekti nimi"},
        category: {type:String, default:"projekti kategooria"},
        description: {type:String, default:"projekti info"},
    },
    picture: {type: Array, default: []},
    years: {type:String, default:"aastad"}

});
module.exports = mongoose.model('project', project);
