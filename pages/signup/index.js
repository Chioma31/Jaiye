
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import axios from "axios";
import { useState } from "react";
import { Error, Successful } from "../../components/notification";
import Loader from "../../components/loader";


const SignUp =()=> {

    const [errorCheck, setErrorCheck] = useState({});
    const [signUpSuccessful, setSignUpSuccessful] = useState(false);
    const [signUpError, setSignUpError] = useState(false);
    const [isSignUpSuccessful, setIsSignUpSuccessful] = useState("");
    const [hasSignUpError, setHasSignUpError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showpass, setShowPass] = useState(false);
    const [showCPass, setShowCPass] = useState(false);

    const [show, setShow] = useState(true);
    const [showCP, setShowCP] = useState(true);
    
    const [passRequirement , setPassRequirement] = useState(false);

    const passRequired =()=>{ 
        setPassRequirement(prevState => !prevState)
    }

    const passwordCheck = passRequirement? "inline-block": "hidden"

    const [ inputValue , setInputValue ] = useState(
    
        {

            firstname : "",
            lastname : "",
            phone_no : "",
            email : "",
            password : "",
            confirmpassword : ""
            
        }
    );

    const [isChecked , setIsChecked] = useState(false);

    const  checkBoxHandle =()=>{
        setIsChecked(!isChecked);
    };
   
    const handleChange = (e) =>{
        const { name, value} = e.target;
        setErrorCheck((prevState) => ({
            ...prevState,
            [name]: "",
        }));
        setInputValue({...inputValue, [name]: value})
    };


    const handleSignUp = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        setErrorCheck({
            firstname: "",
            lastname: "",
            phone_no: "",
            email: "",
            password: "",
            confirmpassword: ""
        });

        const minLength = 4;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


        for (const key in inputValue) {
            if (!inputValue[key]) {
              setErrorCheck((prevState) => ({
                ...prevState,
                [key]: `${key} is required`,
              }));
            }
          }
      
        if (!emailRegex.test(inputValue.email)) {
          console.error("Input a valid email address");
          setErrorCheck(prevState => ({ ...prevState, "email": "Input a valid email address" }));
          setIsLoading(false);
          return;
        }
      
        if (inputValue.password.length < minLength) {
          console.error("Minimum required length is 6");
          setErrorCheck(prevState => ({ ...prevState, "password": "Minimum required length is 6" }));
          setIsLoading(false);
          return;
        }
      
        if (!passwordRegex.test(inputValue.password)) {
          console.error("Password does not meet requirements");
          setErrorCheck(prevState => ({ ...prevState, "password": "Password does not meet requirements" }));
          setIsLoading(false);
          return;
        }
      
        if (inputValue.password !== inputValue.confirmpassword) {
          console.error("Password mismatch");
          setErrorCheck(prevState => ({ ...prevState, "confirmpassword": "Password mismatch" }));
          setIsLoading(false);
          return;
        }
      
        if (!isChecked) {
          console.error("Agree to our terms and conditions");
          setErrorCheck(prevState => ({ ...prevState, "terms": "Agree to our terms and conditions" }));
          setIsLoading(false);
          return;
        }
      
        try {
          const response = await axios.post(
            "https://tickeneft.onrender.com/api/user/signup",
            { ...inputValue }
          );
          
          console.log("Sign-up successful:", response.data);
          setIsSignUpSuccessful(response.data.msg);
          setSignUpSuccessful(true);
          setIsLoading(false);
          
        } catch (error) {
            console.log("Sign-up failed:", error.response.data);
            setHasSignUpError(error.response.data.msg);
            setSignUpError(true)
            setIsLoading(false);
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

                                    <p className="required">{errorCheck.firstname}</p>
                                    <input className=" mb-4 px-4 py-3 border border-[#AEAEAE]" 
                                        type="name" 
                                        name="firstname"
                                        placeholder="First Name"
                                        required
                                        value={inputValue.firstname}
                                        onChange={handleChange}
                                    />

                                    <p className="required">{errorCheck.lastname}</p>
                                    <input className="mb-4 px-4 py-3 border border-[#AEAEAE]" 
                                        type="name" 
                                        name="lastname"
                                        placeholder="Last Name"
                                        required
                                        value={inputValue.lastname}
                                        onChange={handleChange}
                                    />

                                    <p className="required">{errorCheck.phone_no}</p>
                                    <input className=" mb-4 px-4 py-3 border border-[#AEAEAE]" 
                                        type="number" 
                                        name="phone_no"
                                        required
                                        placeholder="Phone Number"
                                        value={inputValue.phone_no}
                                        onChange={handleChange}
                                    />

                                    <p className="required">{errorCheck.email}</p>
                                    <input className="mb-4 px-4 py-3 border border-[#AEAEAE]" 
                                        type="email" 
                                        name="email"
                                        required
                                        placeholder="Email address"
                                        value={inputValue.email}
                                        onChange={handleChange}
                                    />

                                    <p className="required">{errorCheck.password}</p>
                                    <div className="relative flex items-center justify-center mb-4 ">
                                        <input onClick={passRequired} 
                                        className="w-full px-4  py-3 border border-[#AEAEAE] "
                                            name="password"
                                            placeholder="password"
                                            type={showpass ? 'text' : 'password'}
                                            required
                                            value={inputValue.password}
                                            onChange={handleChange}
                                        />

                                        <div onClick={() => setShowPass(!showpass)} className="absolute right-0  mr-4 cursor-pointer">
                                            {
                                            show
                                                ? (
                                                    <div id="hide" className="" onClick={() => setShow(false)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#27272A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <line x1={3} y1={3} x2={21} y2={21} />
                                                        <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                                                        <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                                                        </svg>
                                                    </div>
                                                )
                                                : (
                                                    <div id="show" onClick={() => setShow(true)}>
                                                        <svg width={20} height={20} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                            fill="#71717A"
                                                        />
                                                        </svg>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>


                                    <p className="required">{errorCheck.confirmpassword}</p>
                                    <div className="relative flex items-center justify-center mb-4 ">
                                        <input className="w-full px-4  py-3 border border-[#AEAEAE] "
                                            type={showCPass ? 'text' : 'password'}
                                            required
                                            placeholder="Confirm Password"
                                            name="confirmpassword"
                                            value={inputValue.confirmpassword}
                                            onChange={handleChange}
                                        />
                                        <div onClick={() => setShowCPass(!showCPass)} className="absolute right-0  mr-4 cursor-pointer">
                                            {
                                            showCP
                                                ? (
                                                    <div id="hide" className="" onClick={() => setShowCP(false)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#27272A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <line x1={3} y1={3} x2={21} y2={21} />
                                                        <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                                                        <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                                                        </svg>
                                                    </div>
                                                )
                                                : (
                                                    <div id="show" onClick={() => setShowCP(true)}>
                                                        <svg width={20} height={20} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                            fill="#71717A"
                                                        />
                                                        </svg>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-row mx-4 justify-between">
                                    <div className="flex flex-row">
                                    <input
                                        className="mx-2"
                                        required
                                        onChange={checkBoxHandle}
                                        type="checkbox"
                                        checked={isChecked}
                                        />
                                    <p className="mx-0 text-[#D20606]">I agree to the terms and privacy policies.</p>
                                </div>
                            
                            </div>
                            <div className="px-4">
                            {isLoading ? 
                                <Loader />
                                :
                                <button 
                                    type="submit"
                                    onClick={handleSignUp}
                                    className=" bg-[#D20606] w-full self-center my-12 px-2 py-2"
                                    disabled={isLoading}
                                >    
                                    <p className="text-[#F8F7F7] text-sm ">Sign Up</p>
                                </button>
                            }
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
                <div className=" ">
                    {signUpSuccessful ? 
                        <Successful message={isSignUpSuccessful} />
                    :
                        null
                    }

                    {signUpError ? 
                        <Error message={hasSignUpError} />
                    :
                        null
                    }               
                    
                </div>

            <Footer/>
        </>
    )
};

export default SignUp;