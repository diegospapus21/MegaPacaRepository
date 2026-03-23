import express from "express";
import reviwesController from "../controllers/reviwes.js";

//Utilizar Router()
const router = express.Router();

router 
    .route("/")
    .get(reviwesController.getreviwes)
    .post(reviwesController.insertreviwes);

router
    .route("/:id")
    .put(reviwesController.updatereviwes)
    .delete(reviwesController.deletereviwes);
