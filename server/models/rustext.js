var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rustext = new Schema({
    LANDINGTITLE1: {type: String, default: "Осуществленные нами проекты"},
    LANDINGMESSAGE: {type: String, default: "в сфере електричества"},
    LANDINGTITLE2: {type: String, default: "превышают высоты"},
    INTROTEXT: {type: String, default: "Наш богаж умения и знаний  на фоне долголетнего опыта, развит и отшлифован до мелочей"},
    INTROSUBHEADING1: {type: String, default: "Электрические работы"},
    INTROSUBHEADING2: {type: String, default: "Собирание электпических щитов."},
    INTROSUBHEADING3: {type: String, default: "Seadmete paigaldus"},
    INTROSUBHEADING4: {type: String, default: "Projekteerimine"},
    INTROSUBTEXT1: {type: String, default: "See on meie peamine tööpõld"},
    INTROSUBTEXT2: {type: String, default: "Omame pikaajalist kogemust elektrikilpide ehitusel ja remontimisel"},
    INTROSUBTEXT3: {type: String, default: "Meil on oskuslik tööjõud erinevate elektriseadmete installeerimiseks"},
    INTROSUBTEXT4: {type: String, default: "Oleme koostanud elektriprojekte juba ligi 25 aastat"},
    CREWTEXT: {type: String, default: "Ettevõtte võtmetegijad annavad asjalikku ja profesionaalset nõu ning meie tehtud tööd räägivad enda eest"},
    CREWPOS1: {type: String, default: "Juhataja"},
    CREWNAME1: {type: String, default: "Priit Laur"},
    CREWMAIL1: {type: String, default: "priit.laur@elektrosystem.ee"},
    CREWPOS2: {type: String, default: "Projektijuhataja"},
    CREWNAME2: {type: String, default: "Marco Kruustük"},
    CREWMAIL2: {type: String, default: "marco.kruustuk@elektrosystem.ee"},
    CREWPOS3: {type: String, default: "Projektijuhataja"},
    CREWNAME3: {type: String, default: "Sander Seene"},
    CREWMAIL3: {type: String, default: "sander.seene@elektrosystem.ee"},
    MAIL: {type: String, default: "Tähe 127c, Tartu"},
    ADDRESS: {type: String, default: "info@elektrosystem.ee"},
    PHONE: {type: String, default: "+372 7366019"}

});
module.exports = mongoose.model('rustext', rustext);