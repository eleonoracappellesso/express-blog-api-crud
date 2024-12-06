function errorsHandler(req, res, next) {
    res.status(500);
    res.json({
        error: "500 - Internal Server Error"
    });
}

module.exports = errorsHandler;