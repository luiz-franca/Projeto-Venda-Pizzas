require('./aliases');
require('dotenv').config({ path: './.env' });
const express = require('express');
const cors = require('cors');
const AdminRoute = require('./Routes/AdminRoute')

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    res.send({"API OK":200});
});
app.use('/v1',AdminRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta => ${PORT}`);
});