import Comment from "../models/comment.model.js";

class CommentController{
    
    
    async postComment(req, res) {
        const create = Comment.create({ comment: req.body.comment, postId: req.body.postId }).then(val => { return res.status(201).json({ status: true, message: 'comemnt posted successfully' }) }).catch((err)=>{
            return res.status(500).json({status:false, message:`${err}`})
        });
        
    }


    async deleteCommentById(req, res) {
        const deleteComment = Comment.findOne({ where: { id: req.params.id } }).then(val => {
            val.destroy().then(val => {
                 return res.status(200).json({status:true, message:'comment deleted sucessfully'})
            }).catch((err)=>{
                return res.status(500).json({status:false, message:`${err}`})
            });
            
           
        }).catch((err)=>{
            return res.status(500).json({status:false, message:`${err}`})
        });
        
    }

    async getCommentbyId(req, res) {
        const comment = Comment.findOne({ where: { postId: req.params.id } }).then(val => {
            return res.status(200).json({status:true,data:val})
        }).catch((err)=>{
            return res.status(500).json({statuss:false, message:`${err}`})
        });

        
    }

    async getComments(req, res) {
        const comment = Comment.findAll().then(val => {
            return res.status(200).json({status:true,data:val})
        }).catch((err)=>{
            return res.status(500).json({statuss:false, message:`${err}`})
        });
    }


}


export default new CommentController();