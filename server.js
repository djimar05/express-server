const express = require('express')
const handler = require('./handler')

const app = express()
const port = 3000

let items = []

app.use(express.json())



app.get('/', handler.mainHandler)

app.get('/items', (req, res) => {
  res.status(200).json({items : items});
});

app.get('/items/:id', (req, res) => {
  listResult = items.filter(item => item.id === parseInt(req.params.id));
  if(listResult.length === 0){
    return res.status(404).json({message : 'Item not found'});
  }

  res.status(200).json(listResult[0]);
});

app.delete('/items/:id', (req, res) => {
    listResult = items.filter(item => item.id !== parseInt(req.params.id));

    res.status(200).send(listResult);
});


app.post('/items', (req, res) => {
  const item = req.body;
  if (item) {
    items.push(item);
    res.status(201).json({message: 'Item added', item: item});
  }else{
    res.status(400).json({message: 'Item is required'});
  }
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

//app.get('*', handler.errorHandler); 
//error handler
app.use(handler.errorHandler); // Global error handler
app.listen(port, () => {
  console.log(`Express app listening on port http://localhost:${port}`)
})
