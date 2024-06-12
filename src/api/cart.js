const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require("path");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
const filePath = path.join(__dirname, 'db.json');
const readBd = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Erro ao ler o arquivo JSON:', error);
        return [];
    }
};
const writeBd = (data) =>{
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('erro ao escrever no arquivo json', error);
    }
}

let cart = readBd();

// Rota para obtenção de itens no carrinho
app.get('/api/cart/get', (req, res) => {
    res.json(cart);
});

app.get('/api/cart/get/:id', (req, res) => {
    const id = req.params.id; // Corrigido aqui
    const item = cart.find(product => product.id == id);

    if (item){
        res.json(item);
    } else{
        res.status(404).json({message: "item not found"});
    }
});

app.post('/api/cart/set', (req, res) => {
    const newItem = req.body;
    const existingItem =  cart.find(item => item.id == newItem.id);
    if (existingItem){
        res.status(400).json({message: "item already exists in cart"});
    } else{
        cart.push(newItem);
        writeBd(cart);
        res.status(201).json({newItem});
    }
});

app.put('/api/cart/update/:id', (req, res) => {
    const {id} = req.params;
    const updatedItem = req.body;

    const index = cart.findIndex(item => item.id == id);
    if (index !== -1) {
        cart[index] = updatedItem;
        writeBd(cart);
        res.json(updatedItem);
    } else{
        res.status(404).json({message: "item not found"});
    }
});

app.delete('/api/cart/delete/:id', (req, res) => {
    const {id} = req.params;
    const index = cart.findIndex(item => item.id == id);
    if (index !== -1) {
        const  removedItem = cart.splice(index, 1);
        writeBd(cart);
        res.json(removedItem);
    } else{
        res.status(404).json({message: "item not found"});
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
