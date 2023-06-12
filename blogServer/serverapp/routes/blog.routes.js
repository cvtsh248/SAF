module.exports = app => {
    const blogs = require("../controllers/blog.controller.js");

    var router = require("express").Router();

    app.post("/", blogs.create);
    app.get("/", blogs.getAll);
};