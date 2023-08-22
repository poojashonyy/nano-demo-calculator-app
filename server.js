const express = require('express');
const app = express();

const PORT = process.env.PORT || 8081;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello node!');
});

baseRouter.post('/add', (req, res) => {
    const { first, second } = req.body;
    const result = first + second;
    res.json({ result });
});


baseRouter.post('/subtract', (req, res) => {
    const { first, second } = req.body;
    const result = first - second;
    res.json({ result });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at port", PORT);
});