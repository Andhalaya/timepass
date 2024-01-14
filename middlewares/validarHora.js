module.exports = (req, res, next) => {
    const horaActual = req.horaActual;
  
    if (horaActual >= '12:00' && horaActual < '24:00') {
      next();
    } else {
      res.locals.mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`;
      return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
  };