import Post from '../models/post.model.js'
class PostControllers{
    async createNewPost(req, res) {
        console.log(req.body);
        const newPost = Post.create({ title: req.body.title, content: req.body.content, category: req.body.category });
        newPost.then(result => {
            return res.status(201).send({status:true, messge:'post created'})
        }).catch((err)=>{
            return res.status(500).send({status:false, messge:err})
        })
        
    }
}

export default new PostControllers();