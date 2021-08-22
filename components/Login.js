import Image from "next/dist/client/image";
import { signIn } from "next-auth/client";

const Login = () => {
  return (
    <div
      className="flex flex-col items-center sm:flex-row 
       justify-start bg-gray-100 h-screen"
    >
      <Image
        alt=""
        height={250}
        width={250}
        objectFit="contain"
        src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/facebook-1024.png"
      />
      <div
        className="flex flex-col text-center space-y-3 p-3 
          shadow-xl bg-white rounded-md w-[300px]
          "
      >
        <input
          className="p-2 h-12 rounded-md flex-grow border"
          type="text"
          placeholder="Email or Phone"
        />
        <input
          className="p-2 h-12 rounded-md flex-grow border"
          type="text"
          placeholder="Password"
        />
        <div
          onClick={signIn}
          className="cursor-pointer p-1 text-white bg-blue-500 rounded-md"
        >
          Login
        </div>
        <p className="cursor-pointer text-xs text-blue-500">
          Forgot Password ?
        </p>
      </div>
    </div>
  );
};

export default Login;
