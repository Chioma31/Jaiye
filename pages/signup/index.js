import NavBar from "../../components/navBar";
import Footer from "../../components/footer";


const SignUp= ()=> {

    return (

        <>
            <NavBar/>

                <div className="h-[45px] w-full"></div>

                <div className="lg:flex flex-row w-full ">
                    <div className="flex flex-col w-full flex-1 justify-center lg:px-[120px]">
                        <h1 className="self-center my-12 text-center font-[poppins] font-semibold text-6xl p-4 lg:self-start">Sign Up</h1>
                        <div className="flex flex-col">
                            <input className="mx-4 mb-4 px-4 py-4 border border-[#AEAEAE]" 
                            type="name" 
                            placeholder="First Name"
                            ></input>

                            <input className="mx-4 mb-4 px-4 py-4 border border-[#AEAEAE]" 
                            type="name" 
                            placeholder="Last Name"
                            ></input>

                            <input className="mx-4 mb-4 px-4 py-4 border border-[#AEAEAE]" 
                            type="number" 
                            placeholder="Phone Number"
                            ></input>

                            <input className="mx-4 mb-4 px-4 py-4 border border-[#AEAEAE]" 
                            type="email" 
                            placeholder="Email address"
                            ></input>

                            <input className="mx-4 px-4 mb-4 py-4 border border-[#AEAEAE] "
                            type="password"
                            placeholder="password"
                            ></input>

                            <input className="mx-4 px-4 mb-4 py-4 border border-[#AEAEAE] "
                            type="password"
                            placeholder="Confirm Password"
                            ></input>
                        </div>


                        <div className="flex flex-row mx-4 justify-between">
                            <div className="flex flex-row">
                            <input className="mx-2 "
                            type="checkbox"></input>
                            <p className="mx-0 text-[#D20606]">I agree to the terms and privacy policies.</p>
                        </div>
                        
                        </div>

                        <button className="bg-[#D20606] w-[90%] self-center my-12">
                            <a href="">
                                <p className="text-[#F8F7F7] text-sm px-2 py-2">Sign Up</p>
                            </a>
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
                            <p className="self-center px-1 text-[#868585]">Already have an account?</p>
                            <a href="/login" className="text-[#D20606]">Log in</a>
                        </div>

                    </div>

                    <div className="hidden md:hidden lg:flex flex-col flex-1 bg-[url('/Jaiyelogin.png')] bg-cover"></div>
                
                </div>

            <Footer/>
        </>
    )
};

export default SignUp;