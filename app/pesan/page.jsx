"use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import TablePesan from "../components/table/TablePesan";

const Checkout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col p-5">
        <TablePesan />
      </div>
    </div>
  );
};

export default Checkout;
