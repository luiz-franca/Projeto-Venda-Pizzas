require('./aliases');
require('dotenv').config({ path: './.env' });
const express = require('express');
const cors = require('cors');
const AdminRoute = require('./Routes/AdminRoute');
const ClienteRoute = require('./Routes/ClienteRoute');
const EstoqueRoute = require('./Routes/EstoqueRoute');
const ItemEstoqueRoute = require('./Routes/ItemEstoqueRoute');
const ItemRoute = require('./Routes/ItemRoute');
const LogEstoqueRoute = require('./Routes/LogEstoqueRoute');

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    res.send({"API OK":200});
});
app.use('/v1', AdminRoute);
app.use('/v1', ClienteRoute);
app.use('/v1', EstoqueRoute);
app.use('/v1', ItemEstoqueRoute);
app.use('/v1', ItemRoute);
app.use('/v1', LogEstoqueRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta => ${PORT}`);
});