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
    async logInUser(req, res) {
        const getUser = User.findOne({ where: { email: req.body.email } }).then(val => {
            if (val === null) {
                return res.status(200).send({ message: 'user does not exist' });
            }
            const confirmPassword = bcrypt.compareSync(req.body.password,val.password);

            if (!confirmPassword) {
                return res.status(403).send({ status: false, message: 'email or password is incorrecct' });
            }
            return res.status(200).send({status:true, message:'logged in successfully', data:val})
        }).catch(err=>{
            return res.status(500).send({status:false,message:`${err}`})
        })
        
    }
}


export default new UserController();
