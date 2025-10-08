
const blogs = {results : []}

module.exports.getHandler = (req,res)=>{
      res.status(200).send(blogs);
}

module.exports.postHandler = (req,res,items)=>{
      const blog = req.body;
      if (blog) {
            blogs.results.push(blog);
            res.status(201).send({message: 'blog added', blog: blog});
      }else{
            res.status(400).send({message: 'blog is required'});
      }
 }

 module.exports.getByIdHandler = (req,res)=>{
      listResult = blogs.results.filter(blog => blog.id === parseInt(req.params.id));
      if(listResult.length === 0){
            return res.status(404).json({message : 'Item not found'});
      }
      res.status(200).json(listResult[0]);
 }

 module.exports.putHandler = (req,res)=>{
      const id = parseInt(req.params.id);
      const index = blogs.results.findIndex(blog => blog.id === id);
      if (index !== -1) {
            blogs.results[index] = { ...blogs.results[index], ...req.body };
            res.status(200).send(blogs.results[index]);
      } else {
            res.status(404).send({ message: 'Item not found' });
      }
 }

module.exports.deleteHandler = (req,res)=>{
    listResult = blogs.results.filter(blog => blog.id !== parseInt(req.params.id));

    res.status(203).send(listResult);
}

module.exports.errorHandler = (req,res)=>{
      res.status(404).send({ error: 'Not Found' });
}

module.exports.mainHandler = (req,res)=>{
      return res.send('hello world')
}
