import React from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { MdApi } from "react-icons/md";

const NavBar = () => {
  return (
    <Navbar className="bg-blue-500 text-white h-16 shadow-md">
      <NavbarBrand>
        <MdApi className="w-8 h-8 mr-2" />
        <p className="font-bold text-lg">Weather API</p> {/* Adjusted font size */}
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 items-center">
        <a href="#" className="text-white hover:text-gray-200"> {/* Styled anchor tag */}
          Features
        </a>
        <a href="#" className="text-white hover:text-gray-200" aria-current="page"> {/* Styled anchor tag */}
          Customers
        </a>
        <a href="#" className="text-white hover:text-gray-200"> {/* Styled anchor tag */}
          Integrations
        </a>
      </NavbarContent>
      <NavbarContent className="flex justify-end items-center gap-4">
        <a href="#" className="text-white hover:text-gray-200"> {/* Styled anchor tag */}
          Login
        </a>
        <a href="#" className="text-white hover:text-gray-200"> {/* Styled anchor tag */}
          Sign Up
        </a>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
