const express = require('express');
const cors = require('cors');
const port = 8081;
const app = express();
app.use(express.json());
app.use(cors());

let ID = 1;
let TABS = [
    {
        id: ID++,
        text: "first note",
        color: "pink"
    }
];

app.get('/tabs',(req, res) => {
    res.json(TABS);
});

app.get('/tabs/:id', (req, res) => {
    let id = req.params.id;
    let tab = TABS.find(tab => tab.id == id);
    if (foundBook) 
        res.json(book);
    else
        res.send('Tab not exists');
});

app.post('/tabs', (req, res) => {
    let tab = {
        id: ID++,
        text: req.body.text,
        color: req.body.color
    };
    TABS.push(tab);
    res.json(tab);
});

app.delete('/tabs/:id', (req, res) => {
    let id = req.params.id;
    let index = TABS.findIndex(tab => tab.id == id);
    if (index != -1) {
        TABS.splice(index, 1);
        res.status(204).send();
    }
    else
        res.status(404).send();
});

app.patch('/tabs/:id', (req, res) => {
    let id = req.params.id;
    let tab = TABS.find(tab => tab.id == id);
    let newTab = {
        ...tab,
        ...req.body
    }
    let index = TABS.findIndex(tab => tab.id == id);
    TABS[index] = newTab;
    res.json(newTab);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
