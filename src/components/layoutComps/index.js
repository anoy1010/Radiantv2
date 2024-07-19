"use client"

import React from "react";
import Header from "../header";
import Footer from "../footer";
import Transition from "../Transition";

function LayoutComps({ children }) {
  return (
    <div>
      <header className=" sticky top-0 z-50">
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
