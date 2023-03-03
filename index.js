const axios = require("axios"); // require axios which enables Node.js to perform HTTP requests
const express = require("express"); // require the express framework    
const PORT = 8080;
const app = express();

app.get("/",(req, res) =>{
        res.send("Hello");
  
})

app.listen(PORT,() => {
    console.log(`Running Server on Port ${PORT}`);
})