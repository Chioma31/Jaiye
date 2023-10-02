import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import axios from "axios";
import { useState } from "react";



const Login =()=>{

    const [ inputValue , setInputValue ] = useState({

        "email" : "",
        "password" : "",
        }

    );

    const [isChecked , setIsChecked] = useState(false);
    const  checkBoxHandle =()=>{
        setIsChecked(!isChecked);
    };


    const handleChange = (e) =>{
        const { name, value } = e.target;
        setInputValue({...inputValue,[name]: value})
    };
    

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleLogin = async (e)=> {

        e.preventDefault();

       /* if (!emailRegex.test(inputValue.email)) 
           {
                console.error("input a valid email address"); return;
            }
        //if (!inputValue.password) {console.error("enter password"); return;}*/

        try {
            const response = await axios.post('https://tickeneft.onrender.com/api/user/login', {...setInputValue})
            console.log("Login successful:" , response.data);
        
        } catch (error) 
            {console.log ("Login failed:", error);
        }
        

    };

    return (
        <>
            <NavBar/>
                <div className="h-[45px] w-full"></div>
                <div className="lg:flex flex-row w-full">
                    <div className="flex flex-col w-full flex-1 justify-center lg:px-[120px]">
                        <h1 className="self-center my-12 text-center font-[poppins] font-semibold text-6xl p-4 lg:self-start">Log in</h1>

                        <form id="Login" onSubmit={handleLogin}>
                            <div className="flex flex-col h-fit w-full px-4">
                                <input className=" mb-4 py-4 px-4 border border-[#AEAEAE]" 
                                    type="email" 
                                    placeholder="Email address"
                                    name="email"
                                    value={inputValue.email}
                                    onChange={handleChange}
                                />

                                <input className="px-4 py-4 mb-4 border border-[#AEAEAE] "
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    value={inputValue.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-row w-full px-8 justify-between">
                                <div className="flex flex-row">
                                    <input className="mr-2 "
                                    onChange={checkBoxHandle}
                                        type="checkbox" />
                                    <p className="mx-0 text-[#353434]">Remember me</p>
                                </div>

                                <p className="text-[#D20606]">
                                    <a href="">Forgot password?</a>
                                </p>
                            
                            </div>
                            <div className="px-4">
                                <button type="submit"
                                    className="bg-[#D20606] w-full self-center my-12">
                                    <p className="text-[#F8F7F7] text-sm px-2 py-2">Log in</p>
                                </button>
                            </div>
                        </form>

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