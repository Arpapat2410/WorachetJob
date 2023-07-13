const express = require("express");
const cors = require("cors");
const sql = require("./modals/db.js");
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req,res)=>{
    res.send("<h1>This is a retaurant API</h1>")
})

app.listen(PORT, ()=>{
    console.log("Server is runing  on http://localhost:" + PORT);
})