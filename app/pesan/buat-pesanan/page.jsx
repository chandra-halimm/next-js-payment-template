"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/app/components/Sidebar";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const Page = () => {
  const [data, setData] = useState({
    namaKoran: "",
    eksemplar: 0,
    isValid: false,
    email: "",
    phone: "",
    id_koran: "",
    token: null,
  });
  const [orderID, setOrderID] = useState("");

  const { user } = useUser();

  useEffect(() => {
    if (user && user.primaryEmailAddress) {
      setData((prevState) => ({
        ...prevState,
        email: user.primaryEmailAddress.emailAddress,
      }));
    }
  }, [user]);

  useEffect(() => {
    setOrderID(localStorage.getItem("order_id") || "");
  }, []);

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY;
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (data.token) {
      window.snap.pay(data.token, {
        onSuccess: async () => {
          try {
            const response = await axios.post(
              `http://localhost:8080/penjualan/transaksi/success`,
              { order_id: orderID }
            );
            console.log("Update status response:", response.data);
            window.confirm("Payment successful and status updated");
          } catch (error) {
            console.error("Error updating payment status:", error);
            window.confirm("Payment successful but failed to update status");
          }
        },
        onPending: async () => {
          try {
            const response = await axios.get(
              `http://localhost:8080/penjualan/transaksi/success`,
              { order_id: orderID }
            );
            console.log("Update status response:", response.data);
            window.alert("Payment successful and status updated");
          } catch (error) {
            console.error("Error updating payment status:", error);
            window.alert("Payment successful but failed to update status");
          }
        },
        onError: () => {
          console.log("Error");
        },
        onClose: () => {
          console.log("Close");
        },
      });
    }
  }, [data.token, orderID]);

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const checkout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/penjualan/transaksi",
        data
      );
      const { token } = response.data.transaction;
      const { order_id } = response.data;
      localStorage.setItem("order_id", order_id);
      setOrderID(order_id);
      setData((prevState) => ({ ...prevState, token }));
      window.alert("Data submitted successfully");
    } catch (error) {
      console.error("Error:", error.message);
      if (error.response) {
        window.alert(`Error: ${error.response.data.message || error.message}`);
      } else if (error.request) {
        window.alert("Error: No response received from the server");
      } else {
        window.alert(`Error: ${error.message}`);
      }
    }
  };

  const renderInput = (placeholder, name, type = "text") => (
    <input
      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleData}
      value={data[name]}
    />
  );

  const renderSelect = () => (
    <form className="max-w-sm mx-auto">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </form>
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col justify-center items-center w-full p-5">
        <div className="w-full max-w-2xl bg-white p-8 shadow-lg rounded-lg">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {renderInput("Nama Koran", "namaKoran")}
            {renderInput("Eksemplar", "eksemplar", "number")}
            <input type="hidden" name="email" value={data.email} />{" "}
            {renderInput("Phone", "phone")}
            {renderInput("id_koran", "id_koran")}
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              name="isValid"
              onChange={handleData}
              defaultValue={false}
              hidden
            />
          </div>
          <div className="mt-5">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              onClick={checkout}
            >
              Pesan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
