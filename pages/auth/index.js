/* eslint-disable react/function-component-definition */
import Image from 'next/image';
import Link from 'next/link';

const AuthPage = () => (

  <div className=" w-full ">
    <div className="flex h-full flex-col justify-center text-center items-center  ">
        <Image
          className=" mt-40  mb-5 lg:mb-10 flex justify-center"
          height={70}
          width={70}
          src="/jaiye.png"
          alt="logo"
        />
        <p className="text-primary font-semibold text-xl lg:text-6xl mb-6">Email Verification</p>
        <p className=" font-normal text-sm px-4 lg:text-lg lg:mb-0 mb-4">You are almost done, Please click the link sent to your email for verification.</p>
        <div className="flex justify-center gap-8 lg:mt-12 mr-5">
          <Link href="/" className="rounded-sm border-2 border-primary bg-white py-3 px-8 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              Return home
          </Link>

        </div>          
    </div>
  </div>

);

export default AuthPage;


