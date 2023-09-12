import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import axios from "axios";
import { useState } from "react";




const Login= ()=>{

    const [ userEmail , setuserEmail ] = useState();
    const [ password , setPassword ] = useState();

    const handleLogin =()=> {

            axios.post('https://tickeneft.onrender.com/api/users/login',{
                
                    "email":"johndoe@email.com",
                    "password":"strongpassword123",
                
            })
            .then(response =>{ console.log(response.data)})
            .catch(err => {console.log(err)});
    };

    return (
        <>
            <NavBar/>
                <div className="h-[45px] w-full"></div>
                <div className="lg:flex flex-row w-full">
                    <div className="flex flex-col w-full flex-1 justify-center lg:px-[120px]">
                        <h1 className="self-center my-12 text-center font-[poppins] font-semibold text-6xl p-4 lg:self-start">Log in</h1>

                        <div className="flex flex-col h-fit w-full px-4">
                            <input className="mx-4 mb-4 py-4 px-4 border border-[#AEAEAE]" 
                                type="email" 
                                placeholder="Email address"
                                value={userEmail}
                                onChange={(e)=> setuserEmail(e.target.value)}
                            ></input>

                            <input className="mx-4 px-4 py-4 mb-4 border border-[#AEAEAE] "
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e)=> (setPassword(e.target.value))}
                            ></input>
                        </div>

                        <div className="flex flex-row w-full px-8 justify-between">
                            <div className="flex flex-row">
                                <input className="mr-2 "
                                type="checkbox"></input>
                                <p className="mx-0 text-[#353434]">Remember me</p>
                            </div>

                            <p className="text-[#D20606]">
                                <a href="">Forgot password?</a>
                            </p>
                        
                        </div>

                        <button onClick={handleLogin}
                                className="bg-[#D20606] w-[90%] self-center my-12">
                                <p className="text-[#F8F7F7] text-sm px-2 py-2">Log in</p>
                        </button>

                        <div className="flex flex-row justify-between w-full px-14 ">
                            <div className="flex flex-row self-center w-[45%] h-[1px] border border-[#AEAEAE]"></div>
                            <p className="txt-[#353434] txt-sm ">OR</p>
                            <div className="flex flex-row self-center w-[45%] h-[1px] border border-[#AEAEAE]"></div>
                        </div>
                        
                        <button className=" bg-[#F8F7F7] border border-[#AEAEAE] w-[90%] self-center justify-center mt-14">
                            <a href=""
                            className="flex justify-center">
                                <img className=""
                                    src="google-icon.svg"
                                />
                                <p className="text-[#353434] text-sm px-2 py-2">Continue with Google</p>
                            </a>                        
                        </button>

                        <button className="bg-[#F8F7F7] border border-[#AEAEAE] w-[90%] self-center justify-center mt-4">
                            <a href=""
                            className="flex justify-center">
                                <img className=" mt-1.5 w-6 h-6"
                                    src="facebook-icon.svg"
                                />
                                <p className="text-[#353434] text-sm px-2 py-2">Continue with Facebook</p>
                            </a>
                        </button>
                        
                        <div className="self-center flex flex-row my-16">
                            <p className="self-center px-1 text-[#868585]">Don't have an account?</p>
                            <a href="/signup" className="text-[#D20606]">Sign up</a>
                        </div>

                    </div>

                    <div className="hidden md:hidden lg:flex flex-col flex-1 bg-[url('/Jaiyelogin.png')] bg-cover w-full"></div>
                
                </div>
            <Footer/>
        </>
            
        
    )
            
    
};

 export default Login;