import { Axios } from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {
    const [inputs, setInputs] = useState({
        
       
        email:"",
        password:"",
        })
        
        const [err, setErrror] = useState(null);
        
        const navigate = useNavigate();

        const {login} = useContext(AuthContext);
       
                  
        const handleChange = e =>{
            setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
        };

        const handleSubmit = async e =>{
        e.preventDefault()
        try{
           await login(inputs)
        const res = await Axios.post("/auth/login" , inputs)
        navigate("/")
        
        }catch(err){
            setErrror(err.response.data)
        }}
        
          return (
            <div className='register'>
               
        <section className="bg-white dark:bg-gray-800">
            <div className="flex justify-center min-h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/5" >
                </div>
        
                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                            Please login to continue.
                        </h1>
        
                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            verify your personal account .
                        </p>
        
        
                        <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                           
        
                                      
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-black focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name= 'email' onChange={handleChange}/>
                            </div>
        
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <input type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-black focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name= 'password' onChange={handleChange} />
                            </div>
        
                           
        
                            <button onClick={handleSubmit}
                                className="flex items-center justify-between w-full px-5 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                <span>Login</span>
                            </button>
                            <span className="text-white">Dont have an account?<Link to ="/register" className='text-blue-300'> Register</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        </section>
            </div>
          )
        }

export default Login