import { Navbar } from "flowbite-react";
import { useEffect } from "react";

import { pages, socials } from "../utils/Contants";

export const NavbarComponent = () => {
  useEffect(() => {
    const header = document.getElementById("navbar");
    const layer = document.getElementById("layer");
    if (header && layer) {
      layer.style.height = header.clientHeight + "px";
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const element = e.currentTarget as HTMLAnchorElement;

        document
          .querySelector(element?.getAttribute("href") as string)
          ?.scrollIntoView({
            behavior: "smooth",
          });
      });
    });
  }, []);

  return (
    <>
      <div id="layer"></div>
      <Navbar id="navbar" className="fixed top-0 left-0 w-full z-50">
        <Navbar.Brand
          href="/"
          className="transition-all hover:-rotate-6 hover:scale-125"
        >
          <img src="/logo.webp" alt="logo" width={160} />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          {pages.map((p) => {
            return (
              <Navbar.Link
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <p.icon />
                {p.name}
              </Navbar.Link>
            );
          })}
          {socials.map((p) => {
            return (
              <Navbar.Link
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <p.icon />
                {p.name}
              </Navbar.Link>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
