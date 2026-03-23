//Creo un array de funciones
const reviewsController = {};
//importo la coleccion que voy a utilizar
import reviewsModel from "../models/reviews.js"

//Select
reviewsController.getreviews = async(req, res) =>{
    const branches = await reviewsModel.find();
    res.json(branches)
};

//INSERT 
reviewsController.insertreviews = async (req, res) =>{
    //1. Solicito los datos
    const {idEmployees, idProducts, rating, comment } = req.body;
    
    //2. Llenar el modelo con estos datos
    const newreviews = new reviewsModel({idEmployees, idProducts, rating, comment})
    
    //3. Guardar todo en la base de datos
    await newreviews.save();

    res.json({message:"reviews saved"})
};

//DELETE
reviewsController.deletereviews = async(req, res) =>{
    await reviewsModel.findByIdAndDelete(req.params.id)
    res.json({message: "reviews deleted"})
}

//UPDATE 
branchesController.Updatereviews = async (req, res) =>{
    //Solicito los nuevos datos
    const {idEmployees, idProducts, rating, comment} = req.body;

    //2. actualiza
    await reviewsModel.findByIdAndUpdate(
        req.params.id,
        {
            idEmployees,
             idProducts, 
             rating, 
             comment
        },
        {new: true},

        res.json({message:"reviews Update"})
    );
}

export default reviewsController;