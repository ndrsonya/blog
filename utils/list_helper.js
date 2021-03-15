const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {

   return blogs.reduce((s, o) => s + o.likes, 0)
    
}
  
  module.exports = {
    dummy,
    totalLikes
  }