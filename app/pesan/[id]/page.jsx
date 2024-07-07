"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { toWords } from "number-to-words";

const Page = () => {
  const [data, setData] = useState({
    order_id: "",
    namaKoran: "",
    keterangan: "",
    eksemplar: 0,
    jumlahHalaman: 0,
    jumlahWarna: 0,
    jumlahPlate: 0,
    harga: 0,
    gross_amount: 0,
    tanggal: new Date(),
    status: "belum-dicetak",
    isValid: false,
    email: "",
    phone: "",
  });

  const convertToIndonesianWords = (num) => {
    const words = toWords(num);
    const translatedWords = words
      .replace(/\bzero\b/g, "nol")
      .replace(/\bone\b/g, "satu")
      .replace(/\btwo\b/g, "dua")
      .replace(/\bthree\b/g, "tiga")
      .replace(/\bfour\b/g, "empat")
      .replace(/\bfive\b/g, "lima")
      .replace(/\bsix\b/g, "enam")
      .replace(/\bseven\b/g, "tujuh")
      .replace(/\beight\b/g, "delapan")
      .replace(/\bnine\b/g, "sembilan")
      .replace(/\bten\b/g, "sepuluh")
      .replace(/\beleven\b/g, "sebelas")
      .replace(/\btwelve\b/g, "dua belas")
      .replace(/\bthirteen\b/g, "tiga belas")
      .replace(/\bfourteen\b/g, "empat belas")
      .replace(/\bfifteen\b/g, "lima belas")
      .replace(/\bsixteen\b/g, "enam belas")
      .replace(/\bseventeen\b/g, "tujuh belas")
      .replace(/\beighteen\b/g, "delapan belas")
      .replace(/\bnineteen\b/g, "sembilan belas")
      .replace(/\btwenty\b/g, "dua puluh")
      .replace(/\bthirty\b/g, "tiga puluh")
      .replace(/\bforty\b/g, "empat puluh")
      .replace(/\bfifty\b/g, "lima puluh")
      .replace(/\bsixty\b/g, "enam puluh")
      .replace(/\bseventy\b/g, "tujuh puluh")
      .replace(/\beighty\b/g, "delapan puluh")
      .replace(/\bninety\b/g, "sembilan puluh")
      .replace(/\bhundred\b/g, "ratus")
      .replace(/\bthousand\b/g, "ribu")
      .replace(/\bmillion\b/g, "juta")
      .replace(/\bbillion\b/g, "miliar")
      .replace(/\btrillion\b/g, "triliun");
    return translatedWords;
  };

  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/penjualan/transaksi/${id}`
      );
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let i = 0;

  const words = convertToIndonesianWords(data.gross_amount);
  const formattedDate = new Date(data.tanggal).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="container mx-auto p-5">
      <div className="flex justify-between my-5 items-center">
        <div>
          <p className="font-bold text-xl">Monica Intermedia</p>
          <p>
            Pergundangan Kastara No. 6 <br /> Jl. Lingkar Selatan 1 Paal Merah
            Jambi
          </p>
          <p>TELP: {data.phone}</p>
        </div>
        <div>
          <p className="text-3xl font-bold">Laporan Pembayaran</p>
        </div>
        <div className="text-right">
          <p>Tgl Pembayaran : {formattedDate}</p>
          <p>No Faktur : {data.order_id}</p>
          <p>Email: {data.email}</p>
        </div>
      </div>

      <hr className="my-5" />

      <div className="flex justify-between my-3 items-center">
        <div className="w-1/6">
          <p>Telah terima oleh : {data.email}</p>
          <p>Sejumlah uang: Rp. {data.gross_amount}</p>
        </div>
        <div className="w-4/6">
          <input
            className="text-xl shadow appearance-none border py-2 px-3 rounded w-full"
            type="text"
            value={isNaN(data.gross_amount) ? "" : words + " rupiah"}
            readOnly
          />
        </div>
      </div>

      <hr className="my-5" />

      <div className="my-5">
        <h2 className="text-2xl font-bold mb-4">Detail Transaksi</h2>
        <content className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">No</th>
                <th className="py-2 px-4 border-b">Nama Koran</th>
                <th className="py-2 px-4 border-b">Eksemplar</th>
                <th className="py-2 px-4 border-b">Jumlah Halaman</th>
                <th className="py-2 px-4 border-b">Halaman Warna</th>
                <th className="py-2 px-4 border-b">Harga Satuan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="py-2 px-4 border-b">{i + 1}</td>
                <td className="py-2 px-4 border-b">{data.namaKoran}</td>
                <td className="py-2 px-4 border-b">{data.eksemplar}</td>
                <td className="py-2 px-4 border-b">{data.koran?.halaman}</td>
                <td className="py-2 px-4 border-b">{data.koran?.warna}</td>
                <td className="py-2 px-4 border-b">{data.koran?.harga}</td>
              </tr>
            </tbody>
          </table>
        </content>
      </div>

      <hr className="my-4" />

      <div className="flex justify-end">
        <div>
          <h1 className="font-bold text-xl">TOTAL : Rp. {data.gross_amount}</h1>
          <p className="my-3">17 Februari 2024</p>
          <br />
          <br />
          <p>Monica Intermedia</p>
        </div>
      </div>
    </section>
  );
};

export default Page;
