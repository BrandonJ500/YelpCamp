const mongoose = require("mongoose");
const Campground = require("../models/campground");
const city = require("./cities")

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error"));
db.once("open", ()=>{
    console.log("Database connected")
})

const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++ ){
        const rand = Math.floor((Math.random()*6000)+1);
        new Campground({
            location: `city`
        })
    }
}

seedDB();