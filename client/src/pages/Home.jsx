import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts , setPosts] = useState([])

  const cat = useLocation().search

  useEffect(()=>{
    const fetchData = async ()=> {
      try{
      const res = await axios.get(`/posts${cat}`)
      setPosts(res.data)}
      catch(err){
        console.log(err)
      }
    };
    fetchData();
  },[cat]);


  // return (
  //   <div className='home'>
  //     <div className="posts">
  //       { posts.map((post) => (
  //         <div><h2 className='font-bold text-3xl px-4 pt-3 ml-3'> Nature</h2>  
  //         <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
       
  //   <div className="rounded overflow-hidden shadow-lg">
  //     <img className="w-[420px] h-[186px]" src="https://images.pexels.com/photos/1179225/pexels-photo-1179225.jpeg?auto=compress&cs=tinysrgb&w=600" alt="River"/>
  //     <div className="px-6 py-4">
  //       <div className="font-bold text-xl mb-2">River</div>
  //       <p className="text-gray-700 text-base">
  //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
  //       </p>
  //     </div>
  //     <div className="px-6 pt-4 pb-2">
  //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">#summer</span>
  //       <span className="px-8 py-1 ml-28  text-base rounded text-white bg-blue-500 font-medium">read more</span> 
  //     </div>
  //       </div>
  //     </div>
  //     </div>

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

return (

  <div className="rounded overflow-hidden shadow-lg">
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
           <div><h2 className='font-bold text-3xl px-4 pt-3 ml-3'> Nature</h2></div>
          <div className="w-[420px] h-[186px]">
            <img src={`../upload/${post.img}`} alt="" />
          </div>
          <div className="content">
            
            <Link className="link" to={`/post/${post.id}`}>
              <h1  className="font-bold text-xl mb-2">{post.title}</h1>
            </Link>
            <p className="text-gray-700 text-base">{getText(post.desc)}</p>
            <button className="px-8 py-1 ml-28  text-base rounded text-white bg-blue-500 font-medium">Read More</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};
  
    

    // <div className="rounded overflow-hidden shadow-lg">
    //   <img className="w-[420px] h-[186px]" src="https://images.pexels.com/photos/2189700/pexels-photo-2189700.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Forest"/>
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">Forest</div>
    //     <p className="text-gray-700 text-base">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //     </p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
    //     <span className="px-8 py-1 ml-32  text-base rounded text-white bg-blue-500 font-medium">read more</span> 
    //   </div>
    // </div> 
   
  

export default Home