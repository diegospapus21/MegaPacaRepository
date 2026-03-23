import express from "express";
import branchesController from "../controllers/Branches.js";

const router = express.Router();

router
    .route("/")
    .get(branchesController.getbranches)
    .post(branchesController.insertBranches);

router
    .route("/:id")
    .put(branchesController.UpdateBranches)
    .delete(branchesController.deleteBranches);

export default router;

