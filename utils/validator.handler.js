import { validationResult } from "express-validator";


const errorHandler = (req,res) => {
    const error = validationResult(req);
  if(!error.isEmpty()){
      return res.status(500).json({ status: false, message: error.array()[0].nestedErrors });
  }
}

export default errorHandler;