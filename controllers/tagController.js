import { tags } from "../models/post.js";
function index(req, res) {
    let data = [...tags];

    const response = {
        totalCount: data.length,
        data,
    };
    res.json(response);
}

export { index };