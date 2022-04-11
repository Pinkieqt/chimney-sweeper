import React from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import { useLocation } from "@reach/router";

export default function Header() {
  const location = useLocation();
  return (
    <nav className="p-3 mx-auto w-full md:w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-3/6 ">
      <ul className="flex justify-between items-center md:text-lg mt-5 mb-10 px-3 py-3 md:px-5 md:py-3  shadow-lg rounded-xl">
        <div>
          <li className="hover:text-rose-400  transition duration-200">
            <Link to="/" className="font-bold text-xl">
              Kominictví
            </Link>
          </li>
        </div>
        <div className="flex justify-between gap-x-5 md:gap-x-10">
          <li className="hover:text-rose-400  transition duration-200">
            <Link to="/">Úvod</Link>
          </li>
          <li className="hover:text-rose-400  transition duration-200">
            {location.pathname !== "/" ? (
              <Link to="/#sluzby">Služby</Link>
            ) : (
              <button onClick={() => scrollTo("#sluzby")}>Služby</button>
            )}
          </li>
          <li className="hover:text-rose-400  transition duration-200">
            {location.pathname !== "/" ? (
              <Link to="/#kontakty">Kontakt</Link>
            ) : (
              <button onClick={() => scrollTo("#kontakty")}>Kontakt</button>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
}
