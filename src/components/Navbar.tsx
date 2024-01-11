import { Alert, Navbar } from "flowbite-react";
import { useEffect } from "react";

import { pages, registerLink, socials } from "../utils/Contants";

export const NavbarComponent = () => {
  useEffect(() => {
    const header = document.getElementById("navbar") as HTMLElement;
    if (header)
      document
        .getElementById("layer")
        ?.style.setProperty("height", `${header.offsetHeight}px`);

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
      <header id="header" className="fixed top-0 left-0 w-full z-10">
        <Navbar id="navbar" className="py-5 px-10">
          <Navbar.Brand
            href="/"
            className="transition-all hover:-rotate-6 hover:scale-125"
          >
            <img src="/logo.webp" alt="logo" width={180} />
          </Navbar.Brand>

          <div className="flex md:order-2 gap-1 ms-1">
            <Navbar.Toggle />
          </div>

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
            <div className="border"></div>
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

        <Alert
          id="alert"
          className="font-semibold backdrop-blur bg-opacity-50 rounded-0 bg-cyan-500"
          onDismiss={() => document.getElementById("alert")?.remove()}
        >
          <a
            href={registerLink}
            target="_blank"
            rel="noreferrer"
            className="block text-center"
          >
            Oriflame'e ücretsiz kayıt olmak için buraya tıklayın!
          </a>
        </Alert>
      </header>

      <div id="layer"></div>
    </>
  );
};
