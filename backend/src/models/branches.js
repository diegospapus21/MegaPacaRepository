import { Schema, model } from "mongoose";


const branchesSchema = new Schema({
    name:{
        type: String,
    },
    addres:{
        type: String,
    },
    schedule:{
        type: String,
    },
    isActive: {
        type: Boolean,
    },
}, {
    timestamps: true,
    strict: false,
},
);

export default model("Branches", branchesSchema);