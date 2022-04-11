import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="text-neutral-600">
      {/* Default */}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
