const BlogPost = require("../models/blog.model.js");

exports.create = (req, res) => {
    if (!req.body){
        res.status(400).send({message: "put something in the damned request"})
    }

    const blogpost = new BlogPost({
        id: req.body.id,
        title: req.body.title,
        date: req.body.date,
        text: req.body.text
    });

    BlogPost.create(blogpost, (err, data) => {
        if (err){
            res.status(500).send({message: err.message});
            //res.addHeader("Access-Control-Allow-Origin", "*");
        }
        else{
            res.send(data);
            //res.addHeader("Access-Control-Allow-Origin", "*");
        }
    });
};

exports.getAll = (req, res) => {
    BlogPost.getAll((err, data) => {
        if (err){
            res.status(500).send({message: err.message});
            //res.addHeader("Access-Control-Allow-Origin", "*");
        }
        else{
            res.send(data);
            //res.addHeader("Access-Control-Allow-Origin", "*");
        }
    });
};