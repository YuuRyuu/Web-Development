const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"))
app.use((req, res, next) => {
    console.log("First middleware");
    next();
});

app.get("/", (req, res) => {
    res.send("Home page")
});

app.get("/dogs", (req, res) => {
    res.send("WOOF WOOF")
});


app.listen(3000, () => {
    console.log("Running in 3000")
})