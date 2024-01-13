
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import axios from "axios";
import { useState } from "react";


const SignUp =()=> {

    const [ inputValue , setInputValue ] = useState(
    
        {

            "firstname" : "",
            "lastname" : "",
            "phone_no" : "",
            "email" : "",
            "password" : "",
            "confirmpassword" : ""
            
        }
    );

    const [errorCheck, setErrorCheck] = useState(
        {

            "firstname" : "",
            "lastname" : "",
            "phone_no" : "",
            "email" : "",
            "password" : "",
            "confirmpassword" : ""
            
        }
    );


    
    const [passRequirement , setPassRequirement] = useState(false);

    const passRequired =()=>{ 
        setPassRequirement(prevState => !prevState)
    }

    const passwordCheck = passRequirement? "inline-block": "hidden"

    const [isChecked , setIsChecked] = useState(false);

    const  checkBoxHandle =()=>{
        setIsChecked(!isChecked);
    };
   
    const handleChange = (e) =>{
        const { name, value} = e.target;
        setInputValue({...inputValue, [name]: value})
    };


    const handleSignUp = async (e) => {

        e.preventDefault();

        let minLength = 6;
            
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


        if (!emailRegex.test(inputValue.email))
            {console.error("Input a valid email address"); return;
        }

        if (inputValue.password < minLength)
            {console.error("Minumum required length is 6"); return;
        }
        if (!passwordRegex.test(inputValue.password))
            {console.error("password does not meet requirements")}
        
        if (inputValue.password !== inputValue.confirmpassword)
            {console.error("Password mismatch"); return;
        }

        if (!checkBoxHandle) 
            {console.error("Agree to our terms and conditions"); return;
        }
    
        for (const key in inputValue) {
            if (!inputValue[key]) 
            setErrorCheck(prevState => ({...prevState, 
                [key] :`${key} is required`
            }))
        }



       try {
            const response = await axios.post('https://tickeneft.onrender.com/api/user/signup', {...inputValue})
            console.log("Sign-up successful:" , response.data);
        
        } catch (error) 
            {console.log ("Sign-up failed:", error);
        }
    


    };
            
        


    return (
        <>
            <NavBar/>

                <div className="h-[45px] w-full"></div>

                <div className="lg:flex flex-row w-full">
                    <div className="flex flex-col w-full flex-1 justify-center lg:px-28">
                        <h1 className="self-center my-12 text-center font-[poppins] font-semibold text-6xl p-4 lg:self-start">Sign Up</h1>
                        
                        <form id="signup" onSubmit={handleSignUp}>
                            
                                <div className="flex flex-col justify-center px-4">

                                    <input className=" mb-4 px-4 py-4 border border-[#AEAEAE]" 
                                        type="name" 
                                        name="firstname"
                                        placeholder="First Name"
                                        value={inputValue.firstname}
                                        onChange={handleChange}
                                    />

                                    <input className="mb-4 px-4 py-4 border border-[#AEAEAE]" 
                                        type="name" 
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={inputValue.lastname}
                                        onChange={handleChange}
                                    />

                                    <input className=" mb-4 px-4 py-4 border border-[#AEAEAE]" 
                                        type="number" 
                                        name="phone_no"
                                        placeholder="Phone Number"
                                        value={inputValue.phone_no}
                                        onChange={handleChange}
                                    />

                                    <input className="mb-4 px-4 py-4 border border-[#AEAEAE]" 
                                        type="email" 
                                        name="email"
                                        placeholder="Email address"
                                        value={inputValue.email}
                                        onChange={handleChange}
                                    />

                                    {/*<div className={`${passwordCheck} w-fit text-left`}>
                                        <p className="text-xs font-normal text-[#D20606]">*Minimum character of 6</p>
                                        <p className="text-xs font-normal text-[#D20606]">*Atleast one uppercase character</p>
                                        <p className="text-xs font-normal text-[#D20606]">*Atleast one lowercase character</p>
                                        <p className="text-xs font-normal text-[#D20606]">*Atleast one number</p>
                                        <p className="text-xs font-normal text-[#D20606]">*Atleast one symbol</p>
                                    </div>*/}

                                    <input onClick={passRequired} className=" px-4 mb-4 py-4 border border-[#AEAEAE] "
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={inputValue.password}
                                        onChange={handleChange}
                                    />

                                    <input className="px-4 mb-4 py-4 border border-[#AEAEAE] "
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirmpassword"
                                        value={inputValue.confirmpassword}
                                        onChange={handleChange}
                                    />
                                </div>


                                <div className="flex flex-row mx-4 justify-between">
                                    <div className="flex flex-row">
                                    <input className="mx-2 " 
                                        onChange={checkBoxHandle}
                                        type="checkbox"/>
                                    <p className="mx-0 text-[#D20606]">I agree to the terms and privacy policies.</p>
                                </div>
                            
                            </div>
                            <div className="px-4">
                                <button type="submit"
                                    className=" bg-[#D20606] w-full self-center my-12 px-2 py-2">
                                    <p className="text-[#F8F7F7] text-sm ">Sign Up</p>
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-row justify-between w-full px-14 ">
                            <div className="flex flex-row self-center w-[45%] h-[1px] border border-[#AEAEAE]"></div>
                            <p className="text-[#353434] text-sm font-poppins">OR</p>
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