import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="p-3 min-h-screen mx-auto lg:w-3/4 xl:w-3/5">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
