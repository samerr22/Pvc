import React from "react";
import { Link, useAsyncError } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function () {
  const {currentUser} = useSelector((state) => state.user);

  return (
    <div className="bg-blue-700">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold ">AMBRO PVC</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>



      {currentUser && currentUser.supplier && (<>
        <Link to="/addverView">
               <h1 className="font-thin text-black"> Advertisement</h1>
               </Link>
      
      
      </>)}  
      {currentUser && currentUser.employee && (<>
        <Link to="/salary">
               <h1 className="font-thin text-black"> Salary</h1>
               </Link>
      
      
      </>)}   
         

            {currentUser ? (
              <>
               <Link to="/dashbord">
               <h1>Dashbord</h1>
               </Link>
               <Link to="/cart">
               <h1 className="font-serif text-black">MyCart</h1>
               </Link>
               <Link to="/Uorder">
               <h1 className="font-thin text-black">MyOrder</h1>
               </Link>

               

               <Link to={'/profile'}>
               <img src={currentUser.profilePicture} alt="profile" className="h-7 w-7 rounded-full object-cover" />
               </Link>
              
            </>
               )
           
            :(
              <Link to="/sign-in" >
              <li>Sing In</li>
              </Link>
            )}
            
        
        </ul>
      </div>
    </div>
  );
}