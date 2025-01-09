// importo express 
const express = require('express');
// specifico la porta
const port = process.env.PORT || 3000;
// creo una istanza del server
const app = express();

// imports
const postsRouter = require("./routers/posts");
// const commentsRouter = require("./routers/comments");
const tagsRouter = require("./routers/tags");
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");
const corsPolicy = require("./middlewares/corsPolicy");

app.use(express.json());

// // deifinisco il percorso per gli asset statici
app.use(express.static("public"));

app.use(corsPolicy);

// // ROOTS
app.get('/', (req, res) => {
    res.send("Server del mio blog");
});

// // Api root con middlewares
app.use("/posts", postsRouter);
// app.use("/comments", commentsRouter);
app.use("/tags", tagsRouter)


app.use(errorsHandler);
app.use(notFound);

//metto il server in ascolto su localhost alla porta 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

