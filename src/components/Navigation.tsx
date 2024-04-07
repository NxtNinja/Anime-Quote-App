import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import FetchingButton from "./FetchingButton";
import SwitchTheme from "./SwitchTheme";
import SearchByName from "./SearchByName";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-xl">Anime Quotes</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <SwitchTheme />
        </NavbarItem>
        <NavbarItem>
          <FetchingButton />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="md:flex hidden">
      <NavbarItem>
          <SearchByName/>
        </NavbarItem>
      </NavbarContent>
      </Navbar>
      <div className="w-full md:hidden block">
        <SearchByName/>
      </div>
    </>
   
  );
}
