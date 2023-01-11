import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

class UserController{




    async createUser(req, res) {
       
        const create = User.create({ name: req.body.name, email: req.body.email, password: bcrypt.hashSync(req.body.password, 10) }).then(val => {
            return res.status(201).send({ status: true, message: 'user created successfully'});
        }).catch(err => {
            return res.status(500).send({status:false,message:`jj${err}`})
        })
    }
}


export default new UserController();
