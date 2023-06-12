const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/*app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log("gggg")
})*/

require("./routes/blog.routes.js")(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})