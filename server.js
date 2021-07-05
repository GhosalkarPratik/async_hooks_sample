const express = require("express");
const { file1 } = require("./file1");
const { localStorage } = require("./hooks_service");

const app = express();

const requestIdMiddleware = (req, res, next) => {
    localStorage.initialize(() => next())
};

app.use(requestIdMiddleware);

app.get("/", (req, res) => {
    const result = file1()
    res.send(result);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express server listening on port ${port}`));
