import express from "express";

//crea una constante que guarde Express 
const app = express();

app.use("/api/products")

export default app;