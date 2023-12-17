import { Alert, Navbar } from "flowbite-react";
import { useEffect } from "react";

import { AvatarBox } from "./Avatar";
import { pages, socials } from "../utils/Contants";

export const NavbarComponent = () => {
  useEffect(() => {
    const navbar = document.getElementById("header");
    if (navbar) document.body.style.paddingTop = navbar.clientHeight + 1 + "px";
  }, []);

  return (
    <>
      <header id="header" className="fixed border-b z-10 w-full top-0 left-0">
        <Navbar id="navbar" className="py-5 px-10">
          <Navbar.Brand
            href="/"
            className="transition-all hover:-rotate-6 hover:scale-125"
          >
            <img src="/logo.png" alt="logo" width={60} />
            <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
              Oriflame
            </span>
          </Navbar.Brand>

          <div className="flex md:order-2 gap-1 ms-1">
            <div className="hidden">
              <AvatarBox />
            </div>
            <Navbar.Toggle />
          </div>

          <Navbar.Collapse>
            {pages.map((p) => {
              return (
                <Navbar.Link
                  key={p.name}
                  href={p.href}
                  className="flex items-center gap-2"
                >
                  <p.icon />
                  {p.name}
                </Navbar.Link>
              );
            })}
            <div className="border"></div>
            {socials.map((p) => {
              return (
                <Navbar.Link
                  key={p.name}
                  href={p.href}
                  className="flex items-center gap-2"
                >
                  <p.icon />
                  {p.name}
                </Navbar.Link>
              );
            })}
          </Navbar.Collapse>
        </Navbar>

        <Alert
          id="alert"
          className="font-semibold backdrop-blur bg-opacity-50 rounded-0"
          onDismiss={() => document.getElementById("alert")?.remove()}
        >
          <a href="#" className="block text-center">
            Oriflame'e ücretsiz kayıt olmak için buraya tıklayın!
          </a>
        </Alert>
      </header>
    </>
  );
};
