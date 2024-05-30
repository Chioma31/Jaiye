/* eslint-disable react/function-component-definition */
import Image from 'next/image';
import Link from 'next/link';

const AuthErrorPage = () => (

  <>

    <div className="">

      <div className=" w-full h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col justify-center text-center  items-center">
            <Image
              className="mb-10 flex justify-center"
              height={100}
              width={100}
              src="/jaiye.png"
              alt="logo"
            />
            <p className="text-primary font-semibold text-6xl mb-6">Email Verification</p>
            <p className=" font-normal text-lg">You are almost done, Please click the link sent to your email for verification.</p>
            <div className="flex justify-center gap-8 lg:mt-12 mr-5">
              <Link href="/" className="rounded-sm border-2 border-primary bg-white py-3 px-8 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                Return home
              </Link>

            </div>          
        </div>
      </div>
    </div>

    
  </>

);

export default AuthErrorPage;
