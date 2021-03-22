const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/blogs', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})

blogsRouter.post('/blogs', async (request, response, next) => {

    const body = request.body;

    const blog = new Blog({
        title: body.title,
        author: body.autor,
        url: body.url,
        likes: body.likes
    })

    try { 
        const savedBlog = await blog.save()
        response.json(savedBlog)
      } catch(exception) {
        next(exception)
      }

   
        
})

module.exports = blogsRouter