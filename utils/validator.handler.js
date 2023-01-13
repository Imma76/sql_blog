const errorHandler= (req)=> {
    const error = validationResult(req);
  if(!error.array().isEmpty){
      return res.status(500).json({ status: false, message: error.array()[0].nestedErrors });
  }
}

export default errorHandler;