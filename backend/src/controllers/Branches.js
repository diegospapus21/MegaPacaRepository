//Creo un array de funciones
const branchesController = {};
//importo la coleccion que voy a utilizar
import branchesModel from "../models/branches.js"

//Select
branchesController.getbranches = async(req, res) =>{
    const branches = await branchesModel.find();
    res.json(branches)
};

//INSERT 
branchesController.insertBranches = async (req, res) =>{
    //1. Solicito los datos
    const {name, addres, schedule, isActive } = req.body;
    
    //2. Llenar el modelo con estos datos
    const newBranch = new branchesModel({name, addres, schedule, isActive})
    
    //3. Guardar todo en la base de datos
    await newBranch.save();

    res.json({message:"Branch saved"})
};

//DELETE
branchesController.deleteBranches = async(req, res) =>{
    await branchesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Branch deleted"})
}

//UPDATE 
branchesController.UpdateBranches = async (req, res) =>{
    //Solicito los nuevos datos
    const {name, address, schedule, isActive} = req.body;

    //2. actualiza
    await branchesModel.findByIdAndUpdate(
        req.params.id,
        {
            name,
            addres,
            schedule,
            isActive,
        },
        {new: true},

        res.json({message:"Branchs Update"})
    );
}

export default branchesController;