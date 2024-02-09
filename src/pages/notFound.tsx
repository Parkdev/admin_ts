import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  let [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <div className="flex items-center justify-center bg-blue-100 w-full h-screen overflow-hidden text-blue-500 font-roboto">
      <div className="p-10 flex flex-col">
        <h1 className="text-6xl font-thin">Hmm</h1>
        <p className="mt-10 w-11/12 text-xl leading-7">
          It seems that you're lost in a perpetual black hole. Let us help guide
          you out and get you back home.
        </p>
        <div className="flex space-x-5 my-5 items-center ">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => navigate("/dashboard")}
          >
            Home
          </button>
          <span className="block uppercase text-blue-300 tracking-wider text-center">
            Help me out
          </span>
        </div>
      </div>
      <div>
        <div className="p-9 border-l-4 border-blue-500 rounded-l-full overflow-hidden relative">
          <ArrowLeftIcon className="absolute right-0 bottom-0 animate-slide" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
