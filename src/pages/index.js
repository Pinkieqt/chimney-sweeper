import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>Kominictví Radomír Ďuriš</title>

      {/* land */}
      <div className="flex flex-wrap justify-between items-center md:my-16">
        <div className="w-full md:w-1/2 h-72 md:h-96 md:p-10">
          <div className="h-full w-full flex justify-center items-center">
            <StaticImage
              placeholder="blurred"
              className="rounded-lg"
              src="../images/4.jpg"
              alt="komín"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:p-10">
          <h1 className="font-bold text-4xl text-red-400">Kominictví</h1>
          <h2 className="font-semibold text-2xl mb-4">Radomír Ďuriš</h2>
          <p className="text-gray-500">
            Naše kominictví poskytuje celou škálu kominických prací na celém uzemí Moravskoslezkého,
            Olomouckého a Zlínského kraje. Ostatní kraje a okresy po domluvě.
          </p>
        </div>
      </div>

      {/* pricing + services */}
      <div className="flex flex-wrap justify-between mb-16">
        <div className="w-full md:w-1/2 md:p-10 my-16 md:my-0">
          <h1 className="font-bold text-3xl mb-4">Ceník</h1>
          <p className="text-gray-500 mb-4">
            Ceny jednotlivých služeb nelze paušalizovat, jelikož je každý komín svým způsobem
            unikátní a je potřeba zhodnit aspekty jako možnosti přístupu, stav objektu, délka
            spalinové cesty aj.
          </p>
          <p className="text-gray-500">
            Dohodněte si termín konzultace a přijedeme k Vám domů, kde s Vámi probere detaily, a
            zpracujeme cenovou nabídku.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:p-10">
          <h1 className="font-bold text-3xl mb-4">Služby</h1>
          <p className="text-gray-500 mb-4">
            Provádíme vše od pravidelného čistění a revizí spalinových cest, až po frézování a
            vložkování komínů a oprav nadstřešních částí komínů.
          </p>
          <p className="text-gray-500">
            Celý seznam námi nabízených služeb naleznete{" "}
            <span className="text-red-400 underline">zde</span>.
          </p>
        </div>
      </div>

      {/* contact us */}
      <div className="w-full flex justify-center mb-16 md:mb-32 font-bold text-xl text-center">
        <p>
          Neváhejte nás <span className="text-red-400 underline">kontaktovat</span>, konzultace je
          nezávázná a je zcela zdarma.
        </p>
      </div>

      {/* offered services */}
      <div id="sluzby" className="left-0 w-full md:px-10 py-16 bg-gray-100 mb-16">
        <h1 className="font-bold text-3xl mb-16">Nabízené služby</h1>

        {/* First row */}
        <div className="flex flex-wrap justify-between md:mb-16 ">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="bg-white h-64 flex flex-col justify-center items-center text-center rounded-lg p-5 m-4 md:m-0">
              <h1 className="font-bold text-xl">Čištění a revize spalinových cest</h1>
              <p className="text-gray-500 my-5">
                Čištění spalinové cesty se provádí mechanickým odstraněním pevných látek, usazenin a
                nečistot ze spalinové cesty.
              </p>
              <button className="w-32 text-white bg-gray-400 rounded-lg px-3 py-1 hover:bg-red-300  transition duration-300">
                Více informací
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="bg-white h-64 flex flex-col justify-center items-center text-center rounded-lg p-5 m-4 md:m-0">
              <h1 className="font-bold text-xl">Frézování komínů</h1>
              <p className="text-gray-500 my-5">
                Frézování komínů je proces při kterém se rozšiřuje komínový průduch. Obvykle se
                provádí jako příprava pro následné vložkování komína.
              </p>
              <button className="w-32 text-white bg-gray-400 rounded-lg px-3 py-1 hover:bg-red-300  transition duration-300">
                Více informací
              </button>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-wrap justify-between md:mb-16 ">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="bg-white h-64 flex flex-col justify-center items-center text-center rounded-lg p-5 m-4 md:m-0">
              <h1 className="font-bold text-xl">Vložkování komínů</h1>
              <p className="text-gray-500 my-5">
                Při vložkování se do průduchů komína zavádí pevná nebo ohebná komínová vložka.
                Vložkování komínů zajišťuje bezpečný odvod spalin.
              </p>
              <button className="w-32 text-white bg-gray-400 rounded-lg px-3 py-1 hover:bg-red-300  transition duration-300">
                Více informací
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="bg-white h-64 flex flex-col justify-center items-center text-center rounded-lg p-5 m-4 md:m-0">
              <h1 className="font-bold text-xl">Oprava nadstřešních částí komínů</h1>
              <p className="text-gray-500 my-5">
                Nadstřešní část komínů patří k nejvíce namáhané časti ze všech úseků komínového
                tělesa, protože musí odolávat extrémním rozdílům teplot.
              </p>
              <button className="w-32 text-white bg-gray-400 rounded-lg px-3 py-1 hover:bg-red-300  transition duration-300">
                Více informací
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* contacts */}
      <div id="kontakty" className="flex flex-wrap justify-between md:mb-16">
        <div className="w-full md:w-1/2 md:p-10  my-16 md:my-0">
          <h1 className="font-bold text-3xl">Kontakty</h1>
          <div>
            <h1 className="font-semibold text-xl mt-4 ">Radomír Ďuriš</h1>
            <p className="text-gray-500 mt-4">Adresa</p>
            <p className="">Kujavy 222, PSČ: 742 44</p>

            <p className="text-gray-500 mt-4">IČO</p>
            <p className="">76098281</p>

            <p className="text-gray-500 mt-4">Telefon</p>
            <p className="">731 808 040</p>

            <p className="text-gray-500 mt-4">E-mail</p>
            <p className="">radomir.duris@seznam.cz</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:p-10 my-16 md:my-0">
          <h1 className="font-bold text-3xl mb-4">Mapa</h1>
          <div className="bg-red-300 h-full w-full flex justify-center items-center">
            <p className="text-gray-500">kontakní mapa??</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
