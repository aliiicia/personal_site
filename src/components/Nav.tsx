import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const Nav = () => {
  return (
    <Navbar className="border-solid border-black border-b-2 bg-white drop-shadow-semi-black" maxWidth="xl">
      <NavbarBrand>
        <Link className="text-black font-extrabold text-2xl" href="/portfolio/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-9 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-code">
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          AT
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="9 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-code">
            <polyline points="16 18 22 12 16 6"></polyline>
          </svg>
        </Link>
      </NavbarBrand>
      <NavbarContent className="flex gap-24" justify="center">
        <NavbarItem>
          <Link className="text-black font-extrabold text-lg" href="/portfolio/#/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black font-extrabold text-lg" href="/portfolio/#/experience">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black font-extrabold text-lg" href="/portfolio/#/projects">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="border-solid border-black border-2 bg-white font-semibold text-lg shadow-solid-black" href="#" variant="flat">
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Nav
