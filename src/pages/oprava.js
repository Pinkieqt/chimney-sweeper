import * as React from "react";
import Layout from "../components/layout";

// markup
const Repairing = () => {
  return (
    <Layout>
      <title>Kominictví Radomír Ďuriš</title>

      <div className="p-3 min-h-screen mx-auto w-full md:w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-3/6">
        {/* Oprava */}
        <h1 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-indigo-400">
          Oprava nadstřešních částí komínů
        </h1>

        <p className="text-gray-500 mt-4">
          Nadstřešní část komínů patří k nejvíce namáhané časti ze všech úseků komínového tělesa,
          protože musí odolávat extrémním rozdílům teplot. Z jedné strany povětrnostním vlivům a
          zdruhé strany vysokým teplotám spalin vznikajícíh při hoření. Vlivem těchto faktorů
          dochází k narušení stability konstrukce komínu a je nutná jeho oprava.
        </p>
        <p className="text-gray-500 mt-4">
          Nabízíme kompletní opravu nadstřešní části zděných komínů.
        </p>
      </div>
    </Layout>
  );
};

export default Repairing;
