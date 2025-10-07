
const blogs = {results : []}

module.exports.getHandler = (req,res, items)=>{
      res.status(200).json({items : items});
}

module.exports.postHandler = (req,res,items)=>{
      const item = req.body;
      if (item) {
            items.push(item);
            res.status(201).json({message: 'Item added', item: item});
      }else{
            res.status(400).json({message: 'Item is required'});
      }
 }

 module.exports.getByIdHandler = (req,res,items)=>{
      listResult = items.filter(item => item.id === parseInt(req.params.id));
      if(listResult.length === 0){
            return res.status(404).json({message : 'Item not found'});
      }
      res.status(200).json(listResult[0]);
 }

 module.exports.putHandler = (req,res,items)=>{
      const id = parseInt(req.params.id);
      const index = items.findIndex(item => item.id === id);
      if (index !== -1) {
            items[index] = { ...items[index], ...req.body };
            res.status(200).send(items[index]);
      } else {
            res.status(404).send({ message: 'Item not found' });
      }
 }

module.exports.deleteHandler = (req,res,items)=>{
    listResult = items.filter(item => item.id !== parseInt(req.params.id));

    res.status(200).send(listResult);
}

module.exports.errorHandler = (req,res)=>{
      res.status(404).send({ error: 'Not Found' });
}

module.exports.mainHandler = (req,res)=>{
      return res.send('hello world')
}
