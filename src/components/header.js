import React from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import { useLocation } from "@reach/router";

export default function Header() {
  const location = useLocation();
  return (
    <nav>
      <ul className="flex justify-between items-center md:text-lg mt-5 mb-10">
        <div>
          <li className="hover:text-red-400  transition duration-200">
            <Link to="/" className="font-bold text-xl">
              Kominictví
            </Link>
          </li>
        </div>
        <div className="flex justify-between gap-x-5 md:gap-x-10">
          <li className="hover:text-red-400  transition duration-200">
            <Link to="/">Úvod</Link>
          </li>
          <li className="hover:text-red-400  transition duration-200">
            {location.pathname !== "/" ? (
              <Link to="/#sluzby">Služby</Link>
            ) : (
              <button onClick={() => scrollTo("#sluzby")}>Služby</button>
            )}
          </li>
          <li className="hover:text-red-400  transition duration-200">
            {location.pathname !== "/" ? (
              <Link to="/#kontakty">Kontakty</Link>
            ) : (
              <button onClick={() => scrollTo("#kontakty")}>Kontakty</button>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
}
