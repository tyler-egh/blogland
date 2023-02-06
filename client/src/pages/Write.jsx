import axios from 'axios';
import moment from 'moment';
import React, { useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {  useLocation, useNavigate } from 'react-router-dom';

const Write = () => {

  const state = useLocation().state
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };


  const handleClick = async e => {
    e.preventDefault();
   const imgUrl = await upload()

   try{
    state ? await axios.put(`/posts/${state.id}`,{
      title,
      desc: value,
      cat,
      img: file ? imgUrl : "",
    } ):
    await axios.post(`/posts/`,{
      title,
      desc: value,
      cat,
      img: file ? imgUrl : "",
      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
    } );
navigate("/")

  }catch(err){
    console.log(err)
   }
  };

  return (
    <div>
        <div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <label for="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 font-bold text-2xl mt-3"
      >Title</label >
    <input
      type="text"
      className=" form-control  block w-full  px-3 py-1.5 text-base font-normal
        text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="exampleFormControlInput1"
      placeholder="Title"
    onChange={e=>setTitle(e.target.value)}/>
    <input
      type="file"
      className=" form-control  block w-full  px-3 py-3 mt-3 text-base font-normal
        text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="file"
      placeholder="upload image"
      onChange={e=>setFile(e.target.files[0])} />
    <div classNameName='pt-8 '>
  <ReactQuill theme="snow" value={value} onChange={setValue} />;
  </div>
<div>
<div className="flex justify-center pb-2">
  <div className=''>
    <h1 className='font-semibold text-black'>Choose a category</h1>
    <div className="form-check">
      <input  checked ={cat === "food"} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="cat" id="Food"  onChange={e=>setCat(e.target.value)}/>
      <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
        Food
      </label>
    </div>
    <div className="form-check">
      <input  checked ={cat === "health"}  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="cat" id="Health" onChange={e=>setCat(e.target.value)}/>
      <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
       Health
      </label>   
    </div>
    <div className="form-check">
      <input  checked ={cat === "books"} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="cat" id="Books"onChange={e=>setCat(e.target.value)}/>
      <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
       Books
      </label>   
    </div>
    <div className="form-check">
      <input  checked ={cat === "computers"}  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="cat" id="computers" onChange={e=>setCat(e.target.value)}/>
      <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
       Computers
      </label>   
    </div>
    <div className="form-check">
      <input  checked ={cat === "fashion"}  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="cat" id="Fashion" onChange={e=>setCat(e.target.value)}/>
      <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
       Fashion
      </label>   
    </div>
    <div className="form-check">
      <input  checked ={cat === "pharmacy"}  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="cat" id="Pharmacy" onChange={e=>setCat(e.target.value)}/>
      <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
       Pharmacy
      </label>   
    </div>
    <div className="form-check">
      <input  checked ={cat === "photos"} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="cat" id="Photos" onChange={e=>setCat(e.target.value)}/>
      <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
       Photos
      </label>   
    </div>
    <div className="form-check">
      <input  checked ={cat === "music"}  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="cat" id="Music" onChange={e=>setCat(e.target.value)}/>
      <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
       Music
      </label>   
    </div>

  </div>
</div>
</div>
  <div className="flex space-x-2 justify-center">
  <button onClick= {handleClick} type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Publish</button>
</div>


  </div>
  
</div>
    </div>
  )
}

export default Write