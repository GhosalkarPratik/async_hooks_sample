const express = require("express");
const { file1 } = require("./file1");
const { localStorage } = require("./hooks_service");

const app = express();

app.get("/", (req, res) => {
    localStorage.initialize(() => {
        const result = file1()
        res.send(result);
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express server listening on port ${port}`));
