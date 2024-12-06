// importo express 
const express = require('express');
// specifico la porta
const PORT = 3000;
// creo una istanza del server
const app = express();

const postsRouter = require("./routers/posts");
const commentsRouter = require("./routers/comments");
const notFound = require("./middlewares/notFound");

app.use(express.json());

// deifinisco il percorso per gli asset statici
app.use(express.static("public"));

// ROOTS
app.get('/', (req, res) => {
    res.send("Server del mio blog");
});

// Api root
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

// Fallback root
app.all('*', (req, res) => {
    res.status(404).send('<h1>Error 404 - Not Found</h1>');
});

// global middlewares
app.use(notFound);

//metto il server in ascolto su localhost alla porta 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});