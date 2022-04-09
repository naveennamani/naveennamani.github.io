import React from "react";

import defaultNavLinks from "@default/NavLinks";

export function NavLink({ text, href, currentURL }) {
  return (
    <a
      href={href}
      className={
        "link-hover px-4 py-2" + (href == currentURL ? " font-extrabold" : "")
      }
    >
      {text}
    </a>
  );
}

export function NavBar({
  navLinks,
  currentURL
}: {
  navLinks: typeof defaultNavLinks;
  currentURL: string;
}) {
  if (navLinks === undefined) {
    navLinks = defaultNavLinks;
  }
  return (
    <>
      <header className="mb-5 w-full bg-primary p-5 text-primary-content shadow-md shadow-primary">
        <a
          href="#content"
          className="fixed top-2 -left-full bg-base-100 p-2 font-bold text-primary outline-2 outline-primary focus:left-2"
        >
          Skip to content
        </a>
        <div className="mx-auto flex max-w-screen-md flex-col md:flex-row md:justify-between">
          <div className="flex-shrink-0 text-center text-2xl font-bold">
            <a
              title="Homepage"
              href="/"
              className="inline-block align-middle uppercase outline-primary-content"
            >
              Naveen Namani
            </a>
          </div>
          <nav className="mt-4 flex flex-wrap justify-center space-x-1 self-center border-y-2 border-primary-content md:mt-0">
            {navLinks.map((navlink, index) => {
              return (
                <NavLink {...navlink} currentURL={currentURL} key={index} />
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
