const errorHandler = (error, req, res, next) => 
    res.status(500).send({status:false,message:`${err}`})



export default errorHandler;