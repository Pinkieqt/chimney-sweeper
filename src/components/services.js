import React from "react";
import { Link } from "gatsby";
export default function Services() {
  return (
    <>
      {/* offered services */}
      <div id="sluzby" className="w-full py-4 bg-white ">
        <div className="p-3 mx-auto w-full md:w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-3/6">
          <h1 className="font-bold text-3xl mb-4 md:px-5">Nabízené služby</h1>

          {/* First row */}
          <div className="flex flex-wrap justify-between  md:p-5">
            <div className="w-full md:w-3/5 md:pr-4">
              <div className="bg-zinc-600 shadow-lg h-fit md:h-80 lg:h-72 xl:h-64 flex flex-col justify-center  rounded-xl p-5 mb-5 md:mb-0">
                <h1 className="font-bold text-xl text-rose-200">
                  Čištění a revize spalinových cest
                </h1>
                <p className="text-zinc-300 my-5">
                  Čištění spalinové cesty se provádí mechanickým odstraněním pevných látek, usazenin
                  a nečistot ze spalinové cesty.
                </p>
                <Link to="/cisteni-revize" className="w-fit">
                  <button className="text-zinc-100 text-sm bg-neutral-800  rounded-xl px-4 py-2 hover:bg-rose-400  transition duration-300">
                    Více informací
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-2/5 md:pl-4">
              <div className="bg-zinc-600 shadow-lg h-fit md:h-80 lg:h-72 xl:h-64 flex flex-col justify-center  rounded-xl p-5 mb-5 md:mb-0">
                <h1 className="font-bold text-xl text-rose-200">Frézování komínů</h1>
                <p className="text-zinc-300 my-5">
                  Frézování komínů je proces při kterém se rozšiřuje komínový průduch. Obvykle se
                  provádí jako příprava pro následné vložkování komína.
                </p>
                <Link to="/frezovani" className="w-fit">
                  <button className="text-zinc-100 text-sm bg-neutral-800  rounded-xl px-4 py-2 hover:bg-rose-400  transition duration-300">
                    Více informací
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="flex flex-wrap justify-between md:mb-8  md:p-5">
            <div className="w-full md:w-2/5 md:pr-4">
              <div className="bg-zinc-600 shadow-lg h-fit md:h-80 lg:h-72 xl:h-64 flex flex-col justify-center rounded-xl p-5 mb-5 md:mb-0">
                <h1 className="font-bold text-xl text-rose-200">Vložkování komínů</h1>
                <p className="text-zinc-300 my-5">
                  Při vložkování se do průduchů komína zavádí pevná nebo ohebná komínová vložka.
                  Vložkování komínů zajišťuje bezpečný odvod spalin.
                </p>
                <Link to="/vlozkovani" className="w-fit">
                  <button className="text-zinc-100 text-sm bg-neutral-800  rounded-xl px-4 py-2 hover:bg-rose-400  transition duration-300">
                    Více informací
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-3/5 md:pl-4">
              <div className="bg-zinc-600 shadow-lg h-fit md:h-80 lg:h-72 xl:h-64 flex flex-col justify-center rounded-xl p-5">
                <h1 className="font-bold text-xl text-rose-200">
                  Oprava nadstřešních částí komínů
                </h1>
                <p className="text-zinc-300 my-5">
                  Nadstřešní část komínů patří k nejvíce namáhané časti ze všech úseků komínového
                  tělesa, protože musí odolávat extrémním rozdílům teplot.
                </p>
                <Link to="/oprava" className="w-fit">
                  <button className="text-zinc-100 text-sm bg-neutral-800  rounded-xl px-4 py-2 hover:bg-rose-400  transition duration-300">
                    Více informací
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
