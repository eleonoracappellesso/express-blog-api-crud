//import { tags } from "../models/post.js";
const allPosts = require("../models/post.js");

function index(req, res) {
    let data = [...allPosts.tags];

    const response = {
        totalCount: data.length,
        data,
    };
    res.json(response);
}

module.exports = { index };