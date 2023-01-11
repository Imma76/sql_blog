import User from '../models/post.model.js';
import bcrypt from 'bcrypt';

class UserController{




    async(req, res) {
        
        const createUser = User.create({ name: req.body.name, email: req.body.email });
    }
}


export default new UserController();
