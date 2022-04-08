import { Link } from "gatsby";
import React from "react";
import { useLocation } from "@reach/router";
import scrollTo from "gatsby-plugin-smoothscroll";

export default function Footer() {
  const location = useLocation();
  return (
    <footer className="childdiv w-full bg-gray-700 text-gray-400 mt-10 px-5 md:px-16 py-16">
      <div className="lg:w-3/4 xl:w-3/5 mx-auto flex flex-wrap justify-between ">
        <div className="w-full md:w-1/2">
          <p className="text-xl font-semibold text-white mb-3">SLUŽBY</p>
          <Link to="/cisteni-revize">
            <p className="hover:text-red-400  transition duration-200 mb-4">
              Čištění a revize spalinových cest
            </p>
          </Link>
          <Link to="/frezovani">
            <p className="hover:text-red-400  transition duration-200 mb-4">Frézování komínů</p>
          </Link>
          <Link to="/vlozkovani">
            <p className="hover:text-red-400  transition duration-200 mb-4">Vložkování komínů</p>
          </Link>
          <Link to="/oprava">
            <p className="hover:text-red-400  transition duration-200">
              Oprava nadstřešních částí komínů
            </p>
          </Link>
        </div>
        <div className="w-full md:w-1/2 text-left md:text-right mt-5 md:mt-0">
          <p className="text-xl font-semibold text-white mb-4">POZNEJTE NÁS</p>
          {location.pathname !== "/" ? (
            <Link to="/#kontakty">
              <p className="hover:text-red-400  transition duration-200">Kontakty</p>
            </Link>
          ) : (
            <button
              onClick={() => scrollTo("#kontakty")}
              className="hover:text-red-400  transition duration-200"
            >
              Kontakty
            </button>
          )}
          <br />
          <br />
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
