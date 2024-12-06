function notFound(req, res, next) {
    res.status(404);
    res.json({
        error: "404 - Not Found",
        message: "Risorsa non trovata"
    });
}

module.exports = notFound;