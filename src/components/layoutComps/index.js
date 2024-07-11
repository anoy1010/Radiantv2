import React from "react";
import Header from "../header";
import Footer from "../footer";


function LayoutComps({ children }) {
  return (
    <div>
      <header className="">
        <Header />
      </header>
      <main className="z-0">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default LayoutComps;
