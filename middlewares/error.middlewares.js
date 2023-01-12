const errorHandler = (error, req, res, next) => 
    res.status(500).send({status:false,message:`${error}`})



export default errorHandler;