const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const {places,descriptors} = require("./seedHelpers")

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error"));
db.once("open", ()=>{
    console.log("Database connected")
})

    const sample = (array) => {
       return array[Math.floor(Math.random()* array.length)]
    }

const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++ ){
       const rand = Math.floor(Math.random()*1000);
       const price = Math.floor((Math.random()*20)+10);
       const camp = new Campground({
            location: `${cities[rand].city}, ${cities[rand].state}`,
            title:`${sample(descriptors)}, ${sample(places)}`,
            image:'https://source.unsplash.com/collection/483251',
            description: "Cool Image",
            price
        })
        await camp.save();
    }
}

seedDB().then(()=>{
    mongoose.connection.close();
})
