import { useState,useEffect } from "react"
import BlogList from "./blogList"

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title:'The Incorruptible Judge',body:'lorem ipsum...',author:' by T.Y Bello',id:'1'},
    {title:'The Rise of Nigeria',body:'lorem ipsum...',author:'by Markurdi boys',id:'2'},
    {title:'why the Niger Delta is underdeveloped',body:'lorem ipsum...',author:'Dr.Murktar',id:'3'},
    {title:'Maimi in the body of Port Harcourt',body:'lorem ipsum...',author:' by Jewish Priest',id:'4'},
    {title:'The pain in the ass',body:'lorem ipsum...',author:' by Jewish Priest',id:'5'}
  ])

  const handleDelete=(id)=>{
    const updatedblogs=blogs.filter(blog=>blog.id !==id)
    setBlogs(updatedblogs);
    useEffect(()=>{
      console.log('use effect ran');
    });
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter((blog) => blog.author === ' by Jewish Priest')} title='Posts by Jewish Priest'/>
    </div>
  )
}

export default Home
