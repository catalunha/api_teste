exports.list = (req,res,next)=>{
  res.status(200).send({
    msg:'GET /test/ #Ok...'
  });
};

exports.create = (req,res,next)=>{
  res.status(200).send({
    msg:'POST /test/ #Ok...',
    data:req.body
  });
};