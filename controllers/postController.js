const allPosts = require("../models/posts.js");

function index(req, res) {
    // dalla query string prendo il tag da filtrare
    const tagName = req.query.tags;
    // inizializzo postList con tutti i post
    let postList = [...allPosts];

    // se è stato specificato un tag, filtro i post in base a quel tag
    if (tagName) {
        postList = allPosts.filter((post) => {
            // filtro i post in base ai tag specificati
            return post.tags.includes(tagName.toLowerCase());
        });
        // se non ci sono post con il tag specificato restituisce un errore
        if (postList.length === 0) {
            postList = { Errore: `Nessun post contiene il tag ${(req.query.tags).toUpperCase()}` };
        }
    }
    // restituisco un oggetto json con i post filtrati e il conteggio dei post
    res.json({
        posts: postList,
        count: postList.length
    }
    );
}

function show(req, res) {
    console.log(req.params);
    const postId = parseInt(req.params.id);
    const item = allPosts.find((item) => item.id === postId);
    if (item) {
        res.json({
            success: true,
            item,
        });
    } else {
        res.status(404);
        res.json({
            success: false,
            message: `Il post con l'id ${postId} è inesistente`,
        });
    }
}

function store(req, res) {
    res.send("Creazione nuovo post");
}

function update(req, res) {
    res.send("Modifica integrale del post");
}

function destroy(req, res) {
    res.send("Cancellazione del post");
}

module.exports = { index, show, store, update, destroy };