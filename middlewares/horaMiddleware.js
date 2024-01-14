const horaMiddleware = (req, res, next) => {
   const now = new Date();
   const hours = now.getHours();
   const minutes = now.getMinutes();
   const horaActual = `${hours}:${minutes}`
    
    req.horaActual = horaActual;
    next();
};

module.exports = horaMiddleware;