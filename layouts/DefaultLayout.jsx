import React from "react";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

import usePageContext from "@hooks/usePageContext";

export function DefaultLayout({ children }) {
  const { url } = usePageContext();
  return (
    <>
      <NavBar currentURL={url} />
      <main className="wrapper mb-32 min-h-screen w-full bg-base-100">
        <div id="content" className="prose mx-auto max-w-screen-md p-4 md:px-0">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

export { DefaultLayout as Layout };
export default DefaultLayout;
