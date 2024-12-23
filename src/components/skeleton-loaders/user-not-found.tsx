import React from "react";


const UserNotFound = ({title,desc}:{title:string,desc?:string}) => {


  return (
    <div className=" my-10 max-w-7xl mx-auto  flex w-full flex-col items-center justify-center min-h-[500px] bg-gray-50 px-4">
      <div className="text-center">
        {/* <img
          src="/images/user-not-found.svg" // Replace with your custom illustration
          alt="User Not Found"
          className="w-64 h-64 mx-auto mb-6"
        /> */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h1>
        <p className="text-gray-600 mb-6">
          {desc ?? "We couldn't find the user you're looking for. The profile might be unavailable or removed."}
        </p>
       
      </div>
    </div>
  );
};

export default UserNotFound;

