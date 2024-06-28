import React, { useState } from "react";
import product from "../libs/product";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState({
    namaKoran: "",
    keterangan: "",
    eksemplar: 0,
    jumlahHalaman: 0,
    jumlahWarna: 0,
    harga: 0,
    grossamount: 0,
    tanggal: "",
    status: "",
    jumlahPlate: 0,
    isValid: false,
    email: "",
    phone: "",
  });

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT;
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
      const response = await fetch(
        "http://localhost:8080/penjualan/transaksi",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const requestData = await response.json();
      window.snap.pay(requestData.token);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Nama Koran"
          name="namaKoran"
          onChange={handleData}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Keterangan"
          name="keterangan"
          onChange={handleData}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Eksemplar"
          name="eksemplar"
          onChange={handleData}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Jumlah Halaman"
          name="jumlahHalaman"
          onChange={handleData}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Jumlah Warna"
          name="jumlahWarna"
          onChange={handleData}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Jumlah Plate"
          name="jumlahPlate"
          onChange={handleData}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Harga"
          name="harga"
          onChange={handleData}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Total Harga"
          name="grossamount"
          onChange={handleData}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="date"
          placeholder="Tanggal"
          name="tanggal"
          onChange={handleData}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Status"
          name="status"
          onChange={handleData}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleData}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Phone"
          name="phone"
          onChange={handleData}
        />
        <select
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          name="isValid"
          onChange={handleData}
        >
          <option value="">Valid</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <div className="my-2 w-1/2 lg:w-1/4">
        <button
          className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
          onClick={checkout}
        >
          Pesan
        </button>
      </div>
    </>
  );
};

export default Checkout;
