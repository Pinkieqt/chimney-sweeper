import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import * as React from "react";
import Layout from "../components/layout";
import Services from "../components/services";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>Kominictví Radomír Ďuriš </title>

      {/* land */}
      <div className="p-3 mx-auto w-full md:w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-3/6">
        <div className="flex flex-wrap justify-between items-center md:my-16 md:bg-neutral-100 rounded-xl text-center md:text-left">
          <div className="w-full md:w-1/2 h-72 md:h-96 mb-4 md:mb-0 md:p-5">
            <div className="h-full w-full flex justify-center items-center shadow-lg rounded-xl">
              <StaticImage
                placeholder="blurred"
                className="rounded-xl"
                src="../images/4.jpg"
                alt="Komín 1"
                style={{ height: "100%", width: "100%" }}
                imgStyle={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:p-5">
            <h1 className="font-bold text-5xl mt-10 md:mt-0 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-indigo-400">
              Kominictví
            </h1>
            <h2 className="font-semibold text-2xl mb-4">Radomír Ďuriš</h2>
            <p className="text-gray-500">
              Naše kominictví poskytuje celou škálu kominických prací na celém uzemí
              Moravskoslezkého, Olomouckého a Zlínského kraje. Ostatní kraje a okresy po domluvě.
            </p>
            <button
              className="mt-4 text-white bg-neutral-600 rounded-xl px-4 py-2 hover:bg-rose-400  transition duration-300"
              onClick={() => scrollTo("#sluzby")}
            >
              Nabídka služeb
            </button>
          </div>
        </div>

        {/* pricing + services */}
        <div className="flex flex-wrap justify-between mb-16">
          <div className="w-full md:w-1/2  my-16 md:my-0 md:p-5">
            <h1 className="font-bold text-3xl mb-4">Služby</h1>
            <p className="text-gray-500 mb-4">
              Provádíme vše od pravidelného čistění a revizí spalinových cest, až po frézování a
              vložkování komínů a oprav nadstřešních částí komínů.
            </p>
            <p className="text-gray-500">
              Celý seznam námi nabízených služeb naleznete{" "}
              <span
                role="button"
                className="text-rose-400 underline hover:text-rose-600  transition duration-200 cursor-pointer"
                onClick={() => scrollTo("#sluzby")}
              >
                zde
              </span>
              .
            </p>
          </div>
          <div className="w-full md:w-1/2 md:my-0 md:p-5">
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
        </div>

        {/* contact us */}
        <div className="w-full flex justify-center mb-8 md:mb-16 font-bold text-xl text-center">
          <p>
            Neváhejte nás{" "}
            <span
              role="button"
              className="text-rose-400 underline hover:text-rose-600 transition duration-200 cursor-pointer"
              onClick={() => scrollTo("#kontakty")}
            >
              kontaktovat
            </span>
            , konzultace je nezávázná a je zcela zdarma.
          </p>
        </div>
      </div>

      {/* Nabízené služby */}
      <Services />

      {/* contacts */}

      <div className="p-3 flex justify-center mx-auto w-full md:w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-3/6">
        <div
          id="kontakty"
          className="flex flex-wrap w-full md:w-fit  md:mb-16  md:p-5 bg-neutral-100 rounded-xl text-center"
        >
          <div className="w-full my-16 md:my-0">
            <h1 className="font-semibold text-xl">Kontakt</h1>
            <div>
              <h1 className="font-bold text-4xl mt-4 ">Radomír Ďuriš</h1>
              <p className="text-gray-500 mt-4 text-lg">Adresa</p>
              <p className="">Kujavy 222, PSČ: 742 44</p>

              <p className="text-gray-500 mt-4 text-lg">IČO</p>
              <p className="">76098281</p>

              <p className="text-gray-500 mt-4 text-lg">Telefon</p>
              <p className="">731 808 040</p>

              <p className=" text-gray-500 mt-4 text-lg">E-mail</p>
              <a className="underline" href="mailto:radomir.duris@seznam.cz">
                radomir.duris@seznam.cz
              </a>
              {/* <p className="">radomir.duris@seznam.cz</p> */}
            </div>
          </div>
          {/* <div className="w-full md:w-1/2 my-16 md:my-0">
          <h1 className="font-bold text-3xl mb-4">Mapa</h1>
          <div className="bg-red-300 h-full w-full flex justify-center items-center">
            <div id="mapa" className="w-32 h-32 bg-red-30"></div>
          </div>
        </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
