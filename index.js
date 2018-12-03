const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.listen(PORT, () => {
    console.log(`Server up and listening ${PORT}`);
});