import { Link } from "gatsby";
import React from "react";
import { useLocation } from "@reach/router";
import scrollTo from "gatsby-plugin-smoothscroll";

export default function Footer() {
  const location = useLocation();
  return (
    <footer className="w-full bg-zinc-800 text-gray-400 mt-10 py-16">
      <div className="p-3 mx-auto w-full md:w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-3/6">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full md:w-1/2  md:p-5">
            <p className="text-xl font-semibold text-gray-200 mb-3">SLUŽBY</p>
            <Link to="/cisteni-revize">
              <p className="hover:text-rose-400  transition duration-200 mb-4">
                Čištění a revize spalinových cest
              </p>
            </Link>
            <Link to="/frezovani">
              <p className="hover:text-rose-400  transition duration-200 mb-4">Frézování komínů</p>
            </Link>
            <Link to="/vlozkovani">
              <p className="hover:text-rose-400  transition duration-200 mb-4">Vložkování komínů</p>
            </Link>
            <Link to="/oprava">
              <p className="hover:text-rose-400  transition duration-200">
                Oprava nadstřešních částí komínů
              </p>
            </Link>
          </div>
          <div className="w-full md:w-1/2 text-left md:text-right mt-5 md:mt-0 md:p-5">
            <p className="text-xl font-semibold text-gray-200 mb-4">POZNEJTE NÁS</p>
            {location.pathname !== "/" ? (
              <Link to="/#kontakty">
                <p className="hover:text-rose-400  transition duration-200">Kontakty</p>
              </Link>
            ) : (
              <button
                onClick={() => scrollTo("#kontakty")}
                className="hover:text-rose-400  transition duration-200"
              >
                Kontakt
              </button>
            )}
            <br />
            <br />
            <p>&copy; {new Date().getFullYear()}, <a href="https://github.com/Pinkieqt">design and code</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
