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
        if(newData.length == 0) responseArray = "No Data Found";
        res.send(newData);
    }).catch((err) => {
        res.send(err);
    });
})

// API to get all of the events
app.get("/getAllEvents",(req, res) =>{
    axios.get("https://partners.betvictor.mobi/en-gb/in-play/1/events")
    .then((response) => {
        let responseArray = [];
        // retrieve all sports.
        const sportsData = response.data.result.sports;
        // loop through data to retrieve all of the events
        for (const i in sportsData) {
            responseArray.push(sportsData[i].comp);
        }
        if(responseArray.length == 0) responseArray = "No Data Found";
        res.send(responseArray);
    }).catch((err) => {
        res.send(err);
    });
})

// API to get a sport given an id
app.get("/getEventBySport/:id",(req, res) =>{
    axios.get("https://partners.betvictor.mobi/en-gb/in-play/1/events")
    .then((response) => {
        let responseArray = [];
        // retrieve all sports.
        const sportsData = response.data.result.sports;
        // loop through data to retrieve all of the sports
        for (const i in sportsData) {
            // check the id of the sport and return if it is the same as what has been requested.
            if(sportsData[i].id == req.params.id){
                responseArray.push(sportsData[i].comp);
            }
        }
        if(responseArray.length == 0) responseArray = "No Data Found";
        res.send(responseArray);
    }).catch((err) => {
        res.send(err);
    });
})

// API to get an events given an id
app.get("/getEventById/:id",(req, res) =>{
    axios.get("https://partners.betvictor.mobi/en-gb/in-play/1/events")
    .then((response) => {
        let responseArray = [];
        // retrieve all sports.
        const sportsData = response.data.result.sports;
        // loop through data to retrieve all of the sports
        for (const i in sportsData) {
            // loop through data to retrieve all of the competitions
            for (const j in sportsData[i].comp){
                // loop through data to retrieve all of the events
                for (const y in sportsData[i].comp[j].events){
                    // check the id of the event and return if it is the same as what has been requested.
                    if(sportsData[i].comp[j].events[y].id == req.params.id){
                        responseArray.push(sportsData[i].comp[j].events[y]);
                    }
                }
            }
        }
        if(responseArray.length == 0) responseArray = "No Data Found";
        res.send(responseArray);
    }).catch((err) => {
        res.send(err);
    });
})

// connect the server
app.listen(PORT,() => {
    console.log(`Running Server on Port ${PORT}`);
})