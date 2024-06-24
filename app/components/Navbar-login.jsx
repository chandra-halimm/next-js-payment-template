import React from "react";
import Link from "next/link";
import { ImFont } from "react-icons/im";

const Navbar = () => {
  return (
    <section className="container mx-auto py-5">
      <nav className="flex justify-between">
        <div>
          <Link href="/">
            <ImFont className="text-2xl text-blue-600" />
          </Link>
        </div>
        <div>
          <ul className="flex flex-row gap-x-10 items-center">
            <Link href="">
              <li className=" font-medium hover:font-light">Home</li>
            </Link>
            <Link href="about">
              <li className=" font-medium hover:font-light">About</li>
            </Link>
            <Link href="">
              <li className=" font-medium hover:font-light">Profile</li>
            </Link>
            <Link href="">
              <li className=" font-medium hover:font-light">Profile</li>
            </Link>
            <Link href="sign-in">
              <li className="text-blue-600 font-bold hover:text-blue-400">
                Login
              </li>
            </Link>
            <Link href="">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <li>Sign Up</li>
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
