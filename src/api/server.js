const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/ProductRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/product').then(() => {
    console.log('Connected to database');
}).catch(err => {
    console.error('Erro ao conectar no banco de dados', err);
});

app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
