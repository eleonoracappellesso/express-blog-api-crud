// importo express
const express = require("express");

const router = express.Router();

// mi importo l'array di oggetti dal file posts che si trova nella cartella data
const allPosts = require("../models/posts.js");

//Index - Read
// root che filtra i post in base ai tags
router.get("/", (req, res) => {
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
});

//Show - Read
router.get("/:id", (req, res) => {
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
});

//Create - Store
router.post("/", (req, res) => {
    res.send("Creazione nuovo post");
});

//Update totale - Update
router.put("/:id", (req, res) => {
    res.send("Modifica integrale del post");
});

//Update parziale - Modify
router.patch("/:id", (req, res) => {
    res.send("Modifica parziale del post");
});

//Delete (cancellazione) - Destroy
router.delete("/:id", (req, res) => {
    res.send("Cancellazione del post");
});


module.exports = router;