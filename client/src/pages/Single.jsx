import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

export const Single = () => {
  const [post , setPost] = useState([])

  const location = useLocation()
  const navigate = useNavigate()

  const postId = location.pathname.split('/')[2]
  const {currentUser} = useContext(AuthContext)

  useEffect(()=>{
    const fetchData = async ()=> {
      try{
      const res = await axios.get(`/posts/${postId}`)
      setPost(res.data)}
      catch(err){
        console.log(err)
      }
    };
    fetchData();
  },[postId]);


  const handleDelete = async () => {

    try{
      await axios.delete(`/posts/${postId}`)
      navigate("/")
      setPost(res.data)}
      catch(err){
        console.log(err)
      }


  
      const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
      }

  return (
    <div className='single'>
    <div className="max-w-screen-xl mx-auto">
       
    
          <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{height: "24em"}}>
            <div className="absolute left-0 bottom-0 w-full h-full z-10">
              <img src={`../upload/${post.img}`} alt="" />
          </div>
           
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <a href="#"
                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Food</a>
              <h2 className="text-4xl font-semibold text-gray-200 leading-tight">
               {post.title}
              </h2>
              <div className="flex mt-3">
                {post.userImg && <img src={post.userImg}
                  className="h-10 w-10 rounded-full mr-2 object-cover" />}
                <div>
                  <p className="font-semibold text-gray-200 text-sm"> {post.username}</p>
                  <p className="font-semibold text-gray-400 text-xs">{moment(post.date).fromNow()}</p>
                </div>              
              </div>
              {currentUser.username === post.username && (
              <div className='edit'>
                <Link to={`/write?edit=2`} state={post}>
                <a href="#" className="px-4 py-1 bg-blue-500 text-gray-200 inline-flex items-center justify-center mb-2">Edit</a>
                </Link>
                <a onClick={handleDelete} className="px-4 py-1 bg-red-500 text-gray-200 inline-flex items-center justify-center mb-2">Delete</a> 
                  
                </div>
  )}
            </div>
          </div>
         
          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <p className="pb-6">{getText(post.desc)}</p>
    
    
          </div>
        
        
    
       
      </div></div>
  )
}}
