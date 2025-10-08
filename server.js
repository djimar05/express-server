const express = require('express')
const handler = require('./handler')
const middleware = require('./middleware')

const app = express()
const port = 3000


app.use(express.json())

app.use(middleware.errorHandler)

app.get('/', handler.mainHandler)

app.get('/items', (req, res) => {
  handler.getHandler(req, res);
});

app.get('/items/:id', (req, res) => {
  handler.getByIdHandler(req, res);
});

app.delete('/items/:id', (req, res) => {
    handler.deleteHandler(req, res, items);
});


/*
app.post('/items', (req, res) => {
  handler.postHandler(req, res);
});
*/
app.post('/items', middleware.dataValidation, handler.postHandler);


app.put('/items/:id', (req, res) => {
    handler.putHandler(req, res);
});

//error handler
app.use(handler.errorHandler); // Global error handler

app.listen(port, () => {
  console.log(`Express app listening on port http://localhost:${port}`)
})
