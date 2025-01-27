const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/movieApp")
    .then(() => {
        console.log("CONNECTION OPEN")
    })
    .catch(err => {
        console.log("CONNECTION ERROR!!!")
        console.log(err)
    })


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: String,
    rating: String
});

const Movie = mongoose.model("Movie", movieSchema);

const amadeus = new Movie({title: "Amadeus", year: 1986, score: 9.2, rating: "R"});

