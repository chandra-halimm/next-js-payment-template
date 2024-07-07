import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const TablePesan = () => {
  const [dataTransaksi, setDataTransaksi] = useState([]);
  const { user } = useUser();

  const fetchDataTransaksiEmail = async () => {
    try {
      const email = user.primaryEmailAddress.emailAddress;
      const response = await axios.get(
        "http://localhost:8080/penjualan/datatransaksi/email",
        {
          params: { email: email },
        }
      );
      setDataTransaksi(response.data.data);
    } catch (error) {
      console.error("Fail to get data transaksi:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchDataTransaksiEmail();
    }
  }, [user]);

  const handlePrint = (dataId) => {
    const printUrl = `http://localhost:3000/pesan/${dataId}`;
    const printWindow = window.open(printUrl, "_blank");

    if (printWindow) {
      const printCheckInterval = setInterval(() => {
        if (printWindow.document.readyState === "complete") {
          clearInterval(printCheckInterval);
          printWindow.print();
        }
      }, 5000);
    } else {
      console.error("Failed to open the print window.");
    }
  };

  return (
    <div className="flex my-4 w-full items-center justify-center">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">No</th>
              <th className="py-3 px-4 text-left">Nomor Transaksi</th>
              <th className="py-3 px-4 text-left">Nama Koran</th>
              <th className="py-3 px-4 text-left">Keterangan</th>
              <th className="py-3 px-4 text-left">Eksemplar</th>
              <th className="py-3 px-4 text-left">Jumlah Halaman</th>
              <th className="py-3 px-4 text-left">Jumlah Warna</th>
              <th className="py-3 px-4 text-left">Total Harga</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Print</th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            {dataTransaksi.map((data, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{data.order_id}</td>
                <td className="py-3 px-4">{data.namaKoran}</td>
                <td className="py-3 px-4">{data.koran?.keterangan}</td>
                <td className="py-3 px-4">{data.eksemplar}</td>
                <td className="py-3 px-4">{data.koran?.halaman}</td>
                <td className="py-3 px-4">{data.koran?.warna}</td>
                <td className="py-3 px-4">{data.gross_amount}</td>
                <td
                  className={`py-3 px-4 ${
                    data.statusCetak === "belum-dicetak"
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {data.statusCetak}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handlePrint(data.id)}
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    Print
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePesan;
