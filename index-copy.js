 import { EventEmitter } from 'node:events';

// const EventEmitter = require("event");

import express from 'express'

const app = express()
const PORT=8000
const eventEmmiter = new EventEmitter();

eventEmmiter.on("heyEvent", ()=> {
    console.log("hi there, hoe se you doin")
})


app.get("/", (req, res)=>{
    console.log("you hit the server")
    res.send("<h1> hello world</h1>")

    eventEmmiter.emit("heyEvent");
})

app.listen(PORT, (error) => {
    error ? console.log(error)
    :console.log(`your servert running st http://localhost:${PORT}`)
})



