import Post from '../models/post.model.js';
import { validationResult } from 'express-validator';
import Sequelize  from 'sequelize';

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
    async getPostByPage(req, res) {
        console.log(`hhh${req.params.page}`);
        const fetchPost = Post.findAll({ offset:(parseInt(req.params.page) - 1 ) * 2, // set the offset according your use case
        limit: 2 , attributes: {
    //         include: [
    //   // correct a table name and fields if needed
    //   [Sequelize.literal("(SELECT COUNT(*) FROM Related where Related.elementId=Elements.id)"), "related_total"]
    //       ]
          }, }).then(val=>{
              return res.status(200).json({ status: true, message: val });
          }).catch(err=>{
            return res.status(500).json({status:false,message:`${err}`})
          })
    }
}

export default new PostControllers();