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
  Button,
  Image,
} from "@nextui-org/react";
import Tea from '../images/tea.png';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("");

  const menuItems = ["Apply Loan", "Loan Status", "About Us", "Contact Us"]; // Updated menu items

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={Tea} alt="Tea Icon" height={40} width={40} />
          <p className="font-bold ml-2 text-inherit">Agriculture Loans</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} isActive={activeItem === item}>
            <Link
              color="foreground"
              href={
                item === "Apply Loan"
                  ? "/apply"
                  : item === "Loan Status"
                  ? "/status"
                  : item === "About Us"
                  ? "/about"
                  : item === "Contact Us"
                  ? "/contact"
                  : item.toLowerCase().replace(/\s/g, "-")
              }
              size="lg"
              onClick={() => handleItemClick(item)}
              className={`${
                activeItem === item ? "text-blue-600 font-bold" : ""
              }`} // Maintain classes for active link
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/auth" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
