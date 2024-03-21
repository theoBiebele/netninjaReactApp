import React from 'react'

const BlogList = ({blogs,title,handleDelete}) => {
   
  return (
      <div className="blogList">
        <h2>{title}</h2>
        {
blogs.map((blog)=>(
        <div className="blogprev" key={blog.id}>
          <div>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <button onClick={(id)=>handleDelete(blog.id)}>Delete Blog</button>
          </div>
        </div>
      ))}
      </div>
  )
}

export default BlogList



   