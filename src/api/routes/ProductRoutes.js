const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

router.get('/get',async (req, res) => {
    try{
        const product = await Product.find();
        res.json(product);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else{
            res.status(404).json({message: "Product not Found"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/post', async (req, res) => {
    const { name, description, price, images } = req.body;
    const product = new Product({ name, description, price, images });
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/update/:id', async (req, res) => {
    const {id} = req.params;
    const {name, description, price, images} = req.body;
    try {
        const updateProduct = await Product.findByIdAndUpdate(id, {name, description, price, images}, {new: true});
        if (updateProduct) {
            res.json(updateProduct);
        } else {
            res.status(404).json("Product not found");
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

router.delete('/delete/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const deleteProduct = await Product.findByIdAndDelete(id);
        if (deleteProduct) {
            res.json({message: "Product deleted successfully"});
        } else {
            res.status(404).json({message: 'Product not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
module.exports = router;
