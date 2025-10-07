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


app.post('/items', (req, res) => {
  const item = req.body;
  if (item) {
    items.push(item);
    res.status(201).json({message: 'Item added', item: item});
  }else{
    res.status(400).json({message: 'Item is required'});
  }
});

//app.get('*', handler.errorHandler); 
//error handler
app.use(handler.errorHandler); // Global error handler
app.listen(port, () => {
  console.log(`Express app listening on port http://localhost:${port}`)
})
