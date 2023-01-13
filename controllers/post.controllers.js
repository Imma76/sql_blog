import Post from '../models/post.model.js';
import { validationResult } from 'express-validator';


class PostControllers{
    async createNewPost(req, res) {
        console.log(req.body);
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(500).send({status:false,message:`${error.array()[0].msg}`})
        }
        const newPost = Post.create({ title: req.body.title, content: req.body.content, category: req.body.category ,authorId:req.body.authorId});
        newPost.then(result => {
            return res.status(201).send({status:true, messge:'post created'})
        }).catch((err)=>{
            return res.status(500).send({status:false, messge:`${err}`})
        })
        
    }
    async findPostById(req, res) {
        const findPost = Post.findOne({ where: { id: req.params.id } });
        findPost.then(val => {
            return res.status(200).send({ status: true, data: val });
        }).catch(err=>{
            return res.status(500).send({ status: false, message: err });
        })
    }

    async getAllPosts(req, res) {
        const allPost = Post.findAll().then(val=>{
            return res.status(200).send({ status: true, data: val });
        })
    }
    async deletePost(req, res) {
        const deletePost = Post.findOne({ where: { id: req.params.id } }).then(val => {
            if (val === null) {
                return res.status(200).json({status:true,message:'post does not exist'})
            }
            val.destroy().then(value=>{
                return res.status(200).send({status:true, message:'post deleted'})
            })
        })
    }
}

export default new PostControllers();