const sql = require("./db.js");

const BlogPost = function(blogpost) {
    this.id = blogpost.id;
    this.title = blogpost.title;
    this.date = blogpost.date;
    this.text = blogpost.text;
}

BlogPost.create = (newBlogPost, result) => {
    sql.query("INSERT INTO blog_entry VALUES (?,?,?,?)", [newBlogPost.id, newBlogPost.title, newBlogPost.date, newBlogPost.text], (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        console.log("Created blog post", {id: res.insertId, ...newBlogPost});
        result(null, { id: res.insertId, ...newBlogPost });
    });
}

BlogPost.getAll = (result) => {
    sql.query("SELECT * FROM blog_entry", (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        console.log("Blog posts: ", res)
        result(null, res);
        return res;
    });
}

module.exports = BlogPost;
