const allComments = require("../models/comment.js");

function index(req, res) {
    // dalla query string prendo il tag da filtrare
    const text = req.query.text;
    // inizializzo postList con tutti i post
    let commentList = [...allComments];

    // se è stato specificato un tag, filtro i post in base a quel tag
    if (text) {
        commentList = allComments.filter((comment) => {
            // filtro i post in base ai tag specificati
            return comment.text.includes(text.toLowerCase());
        });
        // se non ci sono post con il tag specificato restituisce un errore
        if (commentList.length === 0) {
            commentList = { Errore: `Nessun commento contiene le parole cercate` };
        }
    }
    // restituisco un oggetto json con i post filtrati e il conteggio dei post
    res.json({
        comments: commentList,
        count: commentList.length
    }
    );
}

function show(req, res) {
    console.log(req.params);
    const commentId = parseInt(req.params.id);
    const item = allComments.find((item) => item.id === commentId);
    if (item) {
        res.json({
            success: true,
            item,
        });
    } else {
        res.status(404);
        res.json({
            success: false,
            message: `Il commento con l'id ${commentId} è inesistente`,
        });
    }
}

function store(req, res) {
    res.send("Creazione nuovo commento");
}

function update(req, res) {
    res.send("Modifica integrale del commento");
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = allComments.findIndex((item) => item.id === id);
    if (index !== -1) {
        allComments.splice(index, 1);
        console.log(allComments);
        res.sendStatus(204);
    } else {
        res.status(404);
        res.json({
            error: "404",
            message: "Commento non trovato",
        });
    }
}

module.exports = { index, show, store, update, destroy };