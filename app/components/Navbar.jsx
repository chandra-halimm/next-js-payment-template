"use client";
import React from "react";
import { ImFont } from "react-icons/im";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import NavbarLogin from "./Navbar-login";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return isSignedIn ? (
    <section className="container mx-auto py-5 no-print">
      <nav className="flex justify-between">
        <div>
          <Link href="/">
            <ImFont className="text-2xl text-blue-600" />
          </Link>
        </div>
        <div>
          <ul className="flex flex-row gap-x-10 items-center">
            <li className="font-medium hover:font-light">
              <Link href="/">Home</Link>
            </li>
            <li className="font-medium hover:font-light">
              <a href="#about">About</a>
            </li>
            <li className="font-medium hover:font-light">
              <Link href="blog">Blog</Link>
            </li>
            <li className="font-medium hover:font-light">
              <Link href="pesan">Pesan</Link>
            </li>
            <li>
              <UserButton afterSiggnOutUrl="/" />
            </li>
          </ul>
        </div>
      </nav>
    </section>
  ) : (
    <NavbarLogin />
  );
};

export default Navbar;
