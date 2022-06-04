import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

// markup
const Repairing = () => {
  return (
    <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Kominictví Radomír Ďuriš - Oprava nadstřešních komínů</title>
        <link rel="canonical" href="https://www.kominictviduris.cz/oprava" />
        <meta name="description" content="Kominík Kujavy Radomír Ďuriš provádíme opravu nadstřešních částí komínů" />
      </Helmet>

      <div className="p-3 min-h-screen mx-auto w-full md:w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-3/6">
        {/* Oprava */}

        <h1 className="font-bold text-3xl text-rose-400">Oprava nadstřešních částí komínů</h1>

        <p className="text-gray-500 mt-4">
          Nadstřešní část komínů patří k nejvíce namáhané časti ze všech úseků komínového tělesa,
          protože musí odolávat extrémním rozdílům teplot. Z jedné strany povětrnostním vlivům a
          zdruhé strany vysokým teplotám spalin vznikajícíh při hoření. Vlivem těchto faktorů
          dochází k narušení stability konstrukce komínu a je nutná jeho oprava.
        </p>
        <p className="text-gray-500 mt-4">
          Nabízíme kompletní opravu nadstřešní části zděných komínů.
        </p>

        <div className="flex flex-wrap justify-between items-center rounded-xl text-center md:text-left mt-16">
          <div className="w-full md:w-1/2 h-96 md:h-96 mb-4 md:mb-0 md:p-3">
            <StaticImage
              placeholder="blurred"
              className="rounded-xl"
              src="../images/oprava1.jpeg"
              alt="Před opravou"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-full md:w-1/2 h-96 md:h-96 mb-4 md:mb-0 md:p-3">
            <StaticImage
              placeholder="blurred"
              className="rounded-xl"
              src="../images/oprava2.jpeg"
              alt="Po opravě"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Repairing;
