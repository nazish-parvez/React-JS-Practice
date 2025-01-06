import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.jpg";

const Form = () => {
  return (
    <>
      <div className="container px-5 py-5 font-Ubuntu md:flex ">
        <div className=" md:w-[40%] md:px-5">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-3xl">Create account</h1>
            <p className="text-[17px] font-thin text-gray-500">
              Start your 30-day free trial. Cancel anytime.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-center items-center gap-3 border border-gray-500 mt-5 py-3 rounded-md">
              <FcGoogle className="text-2xl" />
              <span className="font-bold">Sign up with Google</span>
            </div>

            <div className="flex justify-center items-center gap-3 border border-gray-500 py-3 rounded-md">
              <FaApple className="text-2xl" />
              <span className="font-bold">Sign up with Apple ID</span>
            </div>

            <div className="flex justify-center items-center gap-3 border border-gray-500 py-3 rounded-md">
              <FaSquareXTwitter className="text-2xl" />
              <span className="font-bold">Sign up with X / Twitter</span>
            </div>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form>
            <div className="flex flex-col mb-3">
              <label>Email*</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border border-gray-500 outline-none"
              />
            </div>

            <div className="flex flex-col mb-5">
              <label>Password*</label>
              <input
                type="password"
                placeholder="Create password"
                className="px-4 py-2 rounded-md border border-gray-500 outline-none"
              />
            </div>

            <button className="bg-black w-full text-white py-3 rounded-md mb-4">
              Create account
            </button>
          </form>

          <div>
            <p className="text-sm text-gray-500 text-center">
              Already have an account?
              <span className="text-black underline">Log in</span>
            </p>
          </div>
        </div>

        <img
          src={bg1}
          alt=""
          className="hidden md:block md:h-screen md:ml-3 md:w-[58%] md:object-cover md:absolute md:top-0 md:right-0 opacity-100"
        />
      </div>
    </>
  );
};

export default Form;
