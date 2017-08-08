var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bannerText = new Schema({
    bannerText1: String,
    bannerText2: String,
    bannerText3: String,
    introText: String,
    intro1: String,
    intro2: String,
    intro3: String,
    intro4: String,
    teamText: String,
    personName1: String,
    personRole1: String,
    personEmail1: String,
    personName2: String,
    personRole2: String,
    personEmail2: String,
    personName3: String,
    personRole3: String,
    personEmail3: String,
    telephone: String,
    email: String,
    address: String
});
module.exports = mongoose.model('bannertext', bannerText);