import React from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

export default function Header() {
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
            <Link to="/#sluzby">Služby</Link>
            <button onClick={() => scrollTo("#sluzby")}>Služby</button>
            <button onClick={() => console.log(window.location.href)}>xxxxxx</button>
          </li>
          <li className="hover:text-red-400  transition duration-200">
            {/* <Link to="/about">Kontakty</Link> */}
            <button onClick={() => scrollTo("#kontakty")}>Kontakty</button>
          </li>
        </div>
      </ul>
    </nav>
  );
}
