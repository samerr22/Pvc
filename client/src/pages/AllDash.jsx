import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function AllDash() {
    const {currentUser} = useSelector((state) => state.user);
  return (
    <div className='mb-72'>
        <div className='flex justify-center items-center mt-6  '>
        <h1 className='font-serif text-4xl text-slate-800'>Dashbord</h1>

        </div>

       
        
        
        <div className='flex justify-center items-center mt-6 gap-4'>


{currentUser && currentUser.salesmanger && (


            <>

          <div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
            <div className='flex justify-center items-center mt-14'>
                <Link to="/create-post">
               
            <h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
                Add Products
            </h1>
            </Link>

            </div>
          

          </div>

          <Link to="/manage">
          <div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
            <div className='flex justify-center items-center mt-14'>
            <h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
                Mange Product
            </h1>
          
            </div>
            </div>
            </Link>

            <div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
            <div className='flex justify-center items-center mt-14'>
            <h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
                All Item count
            </h1>

            </div>
          

          </div>
         

           
           
           
         </>
        )}

{currentUser && currentUser.inventrmanager && (


<>

<div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
<div className='flex justify-center items-center mt-14'>
    <Link to="/order">
   
<h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
    ManageOrder
</h1>
</Link>

</div>


</div>

<Link to="/outOfstockview">
<div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
<div className='flex justify-center items-center mt-14'>
<h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
    OutOfstock requst
</h1>

</div>
</div>
</Link>

<div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
<div className='flex justify-center items-center mt-14'>
<h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
    All Orders
</h1>

</div>


</div>





</>
)}


{currentUser && currentUser.deliverymanager && (


<>

<div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
<div className='flex justify-center items-center mt-14'>
    <Link to="/mangeDriver">
   
<h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
    ManageDriver
</h1>
</Link>

</div>


</div>

<Link to="/orderDriver">
<div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
<div className='flex justify-center items-center mt-14'>
<h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
   Add Driver 
</h1>

</div>
</div>
</Link>

<div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
<div className='flex justify-center items-center mt-14'>
<h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
    All Drivers
</h1>

</div>


</div>





</>
)}


{currentUser && currentUser.suppliermanager && (


<>

<div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
<div className='flex justify-center items-center mt-14'>
    <Link to="/out">
   
<h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
    Low Product
</h1>
</Link>

</div>


</div>

<Link to="/manageSupplier">
<div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
<div className='flex justify-center items-center mt-14'>
<h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
Suppliers
</h1>

</div>
</div>
</Link>

<div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
<div className='flex justify-center items-center mt-14'>
<h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
   All Supplier
</h1>

</div>


</div>





</>
)}



{currentUser && currentUser.employemanager && (


<>

<div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
<div className='flex justify-center items-center mt-14'>
    <Link to="/employeManage">
   
<h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
    Manage Employee
</h1>
</Link>

</div>


</div>

<Link to="/managesalry">
<div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
<div className='flex justify-center items-center mt-14'>
<h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
Salary  Form
</h1>

</div>
</div>
</Link>

<div className='w-[300px] h-40 bg-slate-200 rounded-lg border whitespace-nowrap shadow-lg'>
<div className='flex justify-center items-center mt-14'>
<h1 className='text-4xl font-serif text-slate-700 hover:text-white hover:cursor-pointer '>
   All Employe
</h1>

</div>


</div>





</>
)}


        
        </div>
        <div className='flex justify-center items-center gap-4'>

        </div>
        
        </div>
  )
}
