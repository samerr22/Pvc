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
        const res = await fetch(`/api/delivery/get`);
        const data = await res.json();
      

        if (res.ok) {
          setItems(data.Items);
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
        `/api/delivery/dirver/${ItemDelete}`,
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
                Manage Product 
            </h1>
        </div>
        <div className="flex justify-center items-center mt-6 ">
              <Link to="/addDriver">
              
                    <button className="w-40 h-10 bg-blue-700 text-white rounded-lg hover:opacity-50 text-md font-serif mb-8">
                       Add Driver
                    </button>
                    </Link>
                    </div>


      <div className="w-[1200px] h-[300px]  ml-48 rounded-lg border shadow-lg shadow-slate-300 border-white bg-slate-100">

<div className="max-h-96 overflow-y-auto">
  <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
    {currentUser.deliverymanager ? (
      <>
        <table className="w-full divide-y divide-green-500 shadow-md">
          <thead className="bg-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Driver Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Exprince
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Contact
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
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                 Rs.{item.address}
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.age}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {item.Exprince}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {item.contact}
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

