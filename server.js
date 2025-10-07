const express = require('express')
const handler = require('./handler')

const app = express()
const port = 3000

let items = []

app.use(express.json())



app.get('/', handler.mainHandler)

app.get('/items', (req, res) => {
  handler.getHandler(req, res, items);
});

app.get('/items/:id', (req, res) => {
  handler.getByIdHandler(req, res, items);
});

app.delete('/items/:id', (req, res) => {
    handler.deleteHandler(req, res, items);
});


app.post('/items', (req, res) => {
  handler.postHandler(req, res, items);
});

app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items[index] = { ...items[index], ...req.body };
        res.status(200).send(items[index]);
    } else {
        res.status(404).send({ message: 'Item not found' });
    }
});

//error handler
app.use(handler.errorHandler); // Global error handler

app.listen(port, () => {
  console.log(`Express app listening on port http://localhost:${port}`)
})
