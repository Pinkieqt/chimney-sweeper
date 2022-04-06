import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between w-full bg-gray-700 text-gray-400 mt-10 px-5 md:px-16 py-16">
      <div className="w-full md:w-1/2 space-y-3">
        <p className="text-xl font-semibold text-white">SLUŽBY</p>
        <p className="hover:text-red-400  transition duration-200">
          Čištění a revize spalinových cest
        </p>
        <p>Frézování komínů</p>
        <p>Vložkování komínů</p>
        <p>Oprava nadstřešních částí komínů</p>
      </div>
      <div className="w-full md:w-1/2 text-left md:text-right mt-5 md:mt-0  space-y-4">
        <p className="text-xl font-semibold text-white">POZNEJTE NÁS</p>
        <p>Kontakty</p>
        <br />
        <br />
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
