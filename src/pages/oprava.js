import * as React from "react";
import Layout from "../components/layout";

// markup
const Repairing = () => {
  return (
    <Layout>
      <title>Kominictví Radomír Ďuriš</title>
      <div className="min-h-screen">
        {/* Oprava */}
        <h1 className="font-bold text-3xl">Oprava nadstřešních částí komínů</h1>

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
