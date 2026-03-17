import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/megapacaDB")

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