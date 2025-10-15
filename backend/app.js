require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

require("./db/conn");

const PORT = 8000;

app.use(cors({
    origin: "http://localhost:5174/",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}));

app.use(express.json());

app.get('/', (req, res)=>{
    res.status(200).json("server start");
});

app.listen(PORT,()=>{
    console.log(`server start at PORT ${PORT}`);
})


const fs = require("fs");
fs.writeFileSync('./text.txt','Hey There');