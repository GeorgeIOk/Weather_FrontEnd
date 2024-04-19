import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { MdApi } from "react-icons/md";
import { TbActivity } from "react-icons/tb";
const NavBar = () => {
  return (
    <Navbar className="bg-slate-100 h-16">
      <NavbarBrand>
        <TbActivity className="w-8 h-8 text-primary" />
        <p className="font-bold text-inherit">Currency Exchange API</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
      </NavbarContent>
      
    </Navbar>
  );
};

export default NavBar;
