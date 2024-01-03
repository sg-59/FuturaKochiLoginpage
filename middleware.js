const middleware=(req,res,next)=>{
    console.log("middleware 88888",req.params.id);
    console.log('Middle ware working ***********************');
     next()
}
const middleware1=(req,res,next)=>{
    console.log('Middle ware 1 working');
next()
}

module.exports={middleware,middleware1}

