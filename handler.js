
const blogs = {results : []}

module.exports.getHandler = (req,res)=>{

}
module.exports.postHandler = (req,res)=>{

}
module.exports.errorHandler = (req,res)=>{
      res.status(404).send({ error: 'Not Found Arnaud Ribar' });
}

module.exports.mainHandler = (req,res)=>{
      return res.send('hello world')
}
