//Crear un array de metodos
const productsController = {};

import productsModel from "../models/product.js";

//SELECT 
productsController.getProducts = async(req, res) =>{
    const products = await productsModel.find()
    res.json(products)
};

//INSERT
productsController.insertProducts = async(req, res) =>{
    //1. Solicito los pasos a guardar
    const {name, description, price, stock} = req.body;
    //2. Llena una instancia de datos
    const newProduct = new productsModel({name, description, price, stock})
    //guardar en la base de datos
    await newProduct.save()
    res.json({message: "Product saved"})
}; 

//Eliminar
productsController.deleteProducts = async(req, res) =>{
    await productsModel.findByAndDelete(req.params.id);
    res.json({message: "Product deleted"});
};

//Actualizar 
productsController.updateProduct = async (req,res) =>{
    const {name, description, price, stock} = req.body;
    //Actualizo los datos
    await productsModel.findByAndUpdate(req.params.id,{
        name,
        description,
        price,
        stock,
    },{new: true});

    res.json({message: "Product update"})
}; 

export default productsController;