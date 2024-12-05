const express = require("express");

const router = express.Router();

const { index, show, store, update, destroy } = require("../controllers/commentController");

//Index - Read
router.get("/", index);

//Show - Read
router.get("/:id", show);

//Create - Store
router.post("/", store);

//Update totale - Update
router.put("/:id", update);

//Delete (cancellazione) - Destroy
router.delete("/:id", destroy);

module.exports = router;