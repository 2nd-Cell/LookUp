import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";

import {Input} from "@heroui/input";
import { ProfileIcon, SearchIcon, HamburgerIcon } from "./icons";
import {Button, ButtonGroup} from "@heroui/button";
import { useState } from "react";

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar className="fixed bg-transparent " maxWidth="full">

      <div className="flex md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="z-50">

          <HamburgerIcon />
        </button>

  {/* Changed: Added transform and transition classes */}
        <div className={`
          absolute left-0 flex-col justify-end pt-12 pl-3 h-screen w-[40vw] bg-white
          transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out
          z-20`}>

          <div className="p-3 hover:bg-gray-100">Discover</div>
          <div className="p-3 hover:bg-gray-100">Community</div>
          <div className="p-3 hover:bg-gray-100">About</div>
        </div>
      </div>

      <NavbarContent>
        <NavbarBrand className="text-blue-500 text-3xl font-bold">LookUp</NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem className="text-xl text-gray-500">Discover</NavbarItem>
        <NavbarItem className="text-xl text-gray-500">Community</NavbarItem>
        <NavbarItem className="text-xl text-gray-500">About</NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Button>LogIn</Button>
      </NavbarContent>
{/* 
      <NavbarBrand className="text-blue-500 text-3xl font-bold"><button>LookUp</button></NavbarBrand>

      <NavbarContent className="hidden md:flex" justify="start">
        <NavbarItem className="text-xl"><button>Home</button></NavbarItem>
        <NavbarItem className="text-xl"><button>Categories</button></NavbarItem>
      </NavbarContent>

      <NavbarContent>
        <Input type="search" classNames={{inputWrapper: ["bg-white" , "w-[30vw]"]}} startContent={<SearchIcon/>} placeholder="Search"></Input>
      </NavbarContent> */}

      {/* <NavbarContent justify="end"><button><ProfileIcon/></button></NavbarContent> */}
  
    </HeroUINavbar>
  );
};
