import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function DashUsers() {
  const { currentUser } = useSelector((state) => state.user);
  const [items, setItems] = useState([]);
  const [ItemDelete, setItemToDelete] = useState("");
  console.log("sameea", items);

  useEffect(() => {
    const fetchitems = async () => {
      try {
        const res = await fetch(`/api/Empl/employee`);
        const data = await res.json();
        console.log(data);
      

        if (res.ok) {
          setItems(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchitems();
  }, []);

  const handleDeleteUser = async () => {
    try {
      const res = await fetch(
        `/api/Empl/empl/${ItemDelete}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (res.ok) {
        setItems((prev) => prev.filter((item) => item._id !== ItemDelete));
        alert("deleted")
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="h-[600px] relative">
        
        <div className="flex justify-center items-center mt-4 mb-2">
            <h1 className="font-serif text-slate-700 text-3xl ml-10">
                Manage Employee
            </h1>
        </div>
        <div className="flex justify-center items-center mt-6 ">
              <Link to="/newemplye">
              
                    <button className="w-40 h-10 bg-blue-700 text-white rounded-lg hover:opacity-50 text-md font-serif mb-8">
                      New Employee
                    </button>
                    </Link>
                    </div>


      <div className="w-[1200px] h-[300px]  ml-48 rounded-lg border shadow-lg shadow-slate-300 border-white bg-slate-100">

<div className="max-h-96 overflow-y-auto">
  <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
    {currentUser.employemanager ? (
      <>
        <table className="w-full divide-y divide-green-500 shadow-md">
          <thead className="bg-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              UserName
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Password
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Gender
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Delete
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
            {items.map((item) => (
              <tr
                key={item._id}
                className="bg-black bg-opacity-50 text-white dark:border-black dark:bg-black"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                 {item.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap ">
                   <div className="w-16 truncate">    {item.password.replace(/./g, '*')} </div>
             
             </td>
                <td className="px-6 py-4 whitespace-nowrap">
                 {item.Name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                 {item.Adress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                 {item.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                 {item.Gender}
                </td>
               
                
                   
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    onClick={() => {
                      setItemToDelete(item._id);
                      handleDeleteUser();
                    }}
                    className="text-white hover:underline cursor-pointer"
                  >
                    <button className="bg-red-800  rounded-3xl w-20 h-10 hover:opacity-40">
                    Delete
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ) : (
      <p>You have no users yet!</p>
    )}
  </div>
</div>
</div>
        
       </div>
    </div>
  );
}

