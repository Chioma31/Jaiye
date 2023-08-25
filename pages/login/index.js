import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import { BeakerIcon } from "@heroicons/react/24/outline";
import Image from "../../public/Jaiyelogin.png";




const Login= ()=>{

    return (
        <>
            <NavBar/>
                <div className="h-[50px] w-[100vw]"></div>
                <div className="lg:flex flex-row w-[100vw]">
                    <div className="flex flex-col w-[100vw]   lg:flex-col flex-1 justify-center lg:w-[50%] lg:px-[120px]">
                        <h1 className="self-center my-12 text-center font-[poppins] font-semibold text-6xl p-4 lg:self-start">Log in</h1>

                        <input className="mx-4 mb-4 px-4 py-4 border border-[#AEAEAE]" 
                        type="email" 
                        placeholder="Email address"
                        ></input>

                        <input className="mx-4 px-4 mb-4 py-4 border border-[#AEAEAE] "
                        type="password"
                        placeholder="password"
                        ></input>

                        <div className="flex flex-row mx-4 justify-between">
                            <div className="flex flex-row">
                            <input className="mx-2 "
                            type="checkbox"></input>
                            <p className="mx-0 text-[#353434]">Remember me</p>
                        </div>

                        <p className="text-[#D20606]">
                            <a href="">Forgot password?</a>
                        </p>
                        
                        </div>

                        <button className="bg-[#D20606] w-[90%] self-center my-12">
                            <a href="">
                                <p className="text-[#F8F7F7] text-sm px-2 py-2">Log in</p>
                            </a>
                        </button>

                        <div className="flex flex-row justify-between w-[90%] ml-6">
                            <div className="flex flex-row self-center w-[40%] h-[1px] border border-[#AEAEAE]"></div>
                            <p className="txt-[#353434] txt-sm ">OR</p>
                            <div className="flex flex-row self-center w-[40%] h-[1px] border border-[#AEAEAE]"></div>
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

                    <div className="hidden md:hidden lg:flex flex-col flex-1 w-[50%]">
                        <img className="w-[100%] h-[100%]" 
                        src="Jaiyelogin.png"
                        />
                    </div>
                
                </div>
            <Footer/>
        </>
            
        
    )
            
    
};

 export default Login;