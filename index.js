const axios = require("axios"); // require axios which enables Node.js to perform HTTP requests
const express = require("express"); // require the express framework    
const PORT = 8080;
const app = express();

// API to get all of the sports
app.get("/getAllSports",(req, res) =>{
    axios.get("https://partners.betvictor.mobi/en-gb/in-play/1/events")
    .then((response) => {
        // retrieve all sports and return.
        const newData = response.data.result.sports;
        res.send(newData);
    }).catch((err) => {
        res.send(err);
    });
})

app.listen(PORT,() => {
    console.log(`Running Server on Port ${PORT}`);
})