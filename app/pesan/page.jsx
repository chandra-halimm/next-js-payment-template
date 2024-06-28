"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState({
    namaKoran: "",
    keterangan: "",
    eksemplar: 0,
    jumlahHalaman: 0,
    jumlahWarna: 0,
    jumlahPlate: 0,
    harga: 0,
    grossamount: 0,
    tanggal: "",
    status: "",
    isValid: false,
    email: "",
    phone: "",
    token: null,
  });

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
      window.snap.pay(data.token);
    }
  }, [data.token]);

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prevState) => (prevState > 1 ? prevState - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const checkout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/penjualan/transaksi",
        data
      );
      const { token } = response.data;
      setData((prevState) => ({ ...prevState, token }));
      console.log(data.token);
      window.alert("Data submitted successfully");
    } catch (error) {
      console.error("Error:", error.message);
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        console.error("Error Response Status:", error.response.status);
        window.alert(`Error: ${error.response.data.message || error.message}`);
      } else if (error.request) {
        console.error("Error Request:", error.request);
        window.alert("Error: No response received from the server");
      } else {
        console.error("Error Message:", error.message);
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
    />
  );

  return (
    <section className="mx-5">
      <Sidebar />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        {renderInput("Nama Koran", "namaKoran")}
        {renderInput("Keterangan", "keterangan")}
        {renderInput("Eksemplar", "eksemplar", "number")}
        {renderInput("Jumlah Halaman", "jumlahHalaman", "number")}
        {renderInput("Jumlah Warna", "jumlahWarna", "number")}
        {renderInput("Jumlah Plate", "jumlahPlate", "number")}
        {renderInput("Harga", "harga", "number")}
        {renderInput("Total Harga", "grossamount", "number")}
        {renderInput("Tanggal", "tanggal", "date")}
        {renderInput("Status", "status")}
        {renderInput("Email", "email")}
        {renderInput("Phone", "phone")}
        <select
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          name="isValid"
          onChange={handleData}
          defaultValue={false}
        >
          <option value="">Valid</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <div className="my-2 w-1/2 lg:w-1/4">
        <button
          className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
          onClick={checkout}
        >
          Pesan
        </button>
      </div>
    </section>
  );
};

export default Checkout;
