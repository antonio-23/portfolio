import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import ThemeSwitch from "./ThemeSwitch.tsx";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About me", "Projects", "Resume"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden gap-5"
        />
        <NavbarBrand>
          <img src="/images/logo.png" alt="Logo" width={100} height={50} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          boxShadow:
            "inset 5px 5px 10px rgba(174, 174, 192, 0.5), 5px 5px 10px rgba(174, 174, 192, 0.5)",
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 40,
          paddingRight: 40,
          borderRadius: 25,
          gap: 25,
        }}
      >
        <NavbarItem>
          <Link color="foreground" href="#">
            About me
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" className="text-sky-600">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Resume
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          boxShadow:
            "inset 5px 5px 10px rgba(174, 174, 192, 0.5), 5px 5px 10px rgba(174, 174, 192, 0.5)",
          marginTop: 40,
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={"foreground"} className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
