import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Order() {
  const { currentUser } = useSelector((state) => state.user);
  const CurrentuserId = currentUser ? currentUser._id : null;
  const [orderDetailsList, setOrderDetailsList] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch order details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/Inventry/getallorderdetials`);
        const data = await response.json();
        console.log(data);

        if (data.Items.length > 0) {
          setOrderDetailsList(data.Items);
        } else {
          setOrderDetailsList([]);
        }
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (orderId) => {
    try {
      const selectedOrder = orderDetailsList.find((order) => order._id === orderId);
      if (!selectedOrder) {
        throw new Error("Order not found");
      }

      const response = await fetch(`/api/Inventry/delivery`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedOrder),
      });

      if (!response.ok) {
        console.log("error");
      } else {
        alert("Successful");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <div className="h-[600px] relative">
        <div className="absolute top-0 left-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-14 mt-5">
          <div>
            <div className="ml-8 mt-7 mb-10 flex justify-center items-center">
              <form>
                <input
                  type="text"
                  placeholder="Search... "
                  className=" w-[200px=] h-8 rounded-lg  shadow-lg"
                />
              </form>
            </div>
            <div className=" flex justify-center items-center mt-2 mb-4 ">
              <h1 className="font-serif text-4xl text-slate-700">Order History</h1>
            </div>
            <div className="flex justify-center items-center mt-6 ">
              <Link to="/outofstock">
              
                    <button className="w-40 h-10 bg-blue-700 text-white rounded-lg hover:opacity-50 text-md font-serif mb-8">
                       OutofStock
                    </button>
                    </Link>
                    </div>

            <div className="max-h-[300px] overflow-y-auto">
                <div></div>
              {orderDetailsList.length > 0 ? (
                orderDetailsList.map((order, index) => (
                  <div
                    key={index}
                    className="  bg-opacity-20  h-[450px] w-[1400px] rounded-lg border shadow-lg bg-slate-500 mb-14"
                  >
                    <h2 className="text-xl ml-4 font-serif">
                      Order {index + 1} Details
                    </h2>

                    <div className="flex justify-center items-center ">
                      <p className="font-serif text-lg">Phone Number:</p>
                      <p className="ml-5 font-serif text-black">
                        {order.phoneN}
                      </p>
                    </div>

                    <div className="flex justify-center items-center ">
                      <p className="font-serif text-lg">Total Price: </p>
                      <p className="ml-5"> Rs. {order.totalPrice}</p>
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="font-serif text-lg">Number of Items: </p>
                      <p className="ml-5"> {order.Length}</p>
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="font-serif text-lg">User ID: </p>
                      <p className="ml-5"> {order.customerId}</p>
                    </div>

                    <div className="flex justify-center items-center ">
                      <p className="font-serif text-lg">Date: </p>
                      <p className="ml-5">
                        {moment(order.updatedAt).format("YYYY-MM-DD hh:mm:ss a")}
                      </p>
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="font-serif text-lg">Address: </p>
                      <p className="ml-5"> {order.address}</p>
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="font-serif text-lg">Name: </p>
                      <p className="ml-5"> {order.name}</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-serif ml-8">Items</h2>
                      {order.Items.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <div className="flex  ml-10 gap-4">
                            <div className="font-serif text-sm mb-2 text-black truncate w-32">
                              {item.name}
                            </div>
                            <p className="font-serif text-black text-sm">
                              Rs.{item.price}
                            </p>
                            <p className="text-black font-serif text-sm">
                              Order Items-{item.quantity}
                            </p>
                          </div>
                          <hr className="h-1 bg-slate-700 w-full" />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center items-center mt-6 ">
                    <button   onClick={() => handleSubmit(order._id)} className="w-96 h-10 bg-blue-700 text-white rounded-lg hover:opacity-50 text-md font-serif">
                       Inform Detials 
                    </button>

                    </div>
                  
                  </div>
                ))
              ) : (
                <p className="flex justify-center items-center">
                  No orders found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
