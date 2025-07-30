// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let shoppingList = [{ id: 1, item: "Milk" }];
let users = [{ username: 'admin', password: 'admin' }];

// POST /login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) return res.json({ success: true });
  res.status(401).json({ success: false });
});

// GET /items
app.get('/items', (req, res) => res.json(shoppingList));

// POST /items
app.post('/items', (req, res) => {
  const newItem = { id: Date.now(), item: req.body.item };
  shoppingList.push(newItem);
  res.status(201).json(newItem);
});

// PUT /items/:id
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = shoppingList.find(i => i.id === id);
  if (item) {
    item.item = req.body.item;
    return res.json(item);
  }
  res.status(404).json({ error: "Item not found" });
});

// DELETE /items/:id
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = shoppingList.findIndex(i => i.id === id);
  if (index > -1) {
    shoppingList.splice(index, 1);
    return res.status(204).end();
  }
  res.status(404).json({ error: "Item not found" });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));

module.exports = app;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));

module.exports = app;
