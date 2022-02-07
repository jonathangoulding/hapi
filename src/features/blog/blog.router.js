
const Joi = require('joi')

const { blogPost } = require('./blog.controller')


module.exports = {
    blogPost: {
        method: 'POST',
        path: '/blog',
        handler: blogPost,
        options: {
            validate: {
                payload: Joi.object({
                    post: Joi.string().max(140).required(),
                    author: Joi.string().required()
                })
            }
        }
    }
}
