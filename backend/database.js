import mongoose from "mongoose";
import { config } from "./config.js";

mongoose.connect(config.db.URI);

//COMPROBAR QUE TODO FUNCIONA
const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("DB is connected")
})

connection.on("disconected", (error)=>{
    console.log("DB is disconnected" + error)
})

connection.on("error", (error)=>{
    console.log("error found" + error)
})