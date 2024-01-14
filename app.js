const express = require('express');
const app = express();
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

app.use('/', horaMiddleware);

app.use('/', indexRouter);

app.use('/endroute', validarHora, endrouteRouter);

app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1>');
});

app.listen(3000, () => {
    console.log('El servidor está escuchando en http://localhost:3000');
});