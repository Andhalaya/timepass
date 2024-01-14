const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    const mensajeError = req.query.mensaje;
    res.send(`
    <h1>Bienvenido</h1>
    <p>La hora actual es:${req.horaActual}</p>
    <a href="/endroute"><button>Entrar</button></a>
    <p>${mensajeError}</p>`);
    
})

module.exports = router;