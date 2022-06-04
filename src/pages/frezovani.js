import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

// markup
const Milling = () => {
  return (
    <Layout>
      
      <Helmet>
          <meta charSet="utf-8" />
          <title>Kominictví Radomír Ďuriš - Frezování</title>
          <link rel="canonical" href="https://www.kominictviduris.cz/frezovani" />
          <meta name="description" content="Kominík Kujavy Radomír Ďuriš frezování komínů" />
        </Helmet>

      <div className="p-3 min-h-screen mx-auto w-full md:w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-3/6">
        {/* Frezovani */}
        <h1 className="font-bold text-3xl text-rose-400">Frézování komínů</h1>

        <p className="text-gray-500 mt-4">
          Frézování komínů je proces při kterém se rozšiřuje komínový průduch. Obvykle se provádí
          jako příprava pro následné vložkování komína. Při frézování se do komínového průduchu
          spustí rotor frézy poháněný hydraulickým čerpadlem. Na rotoru jsou upevněny řetězy, které
          při rotaci odbourávájí zdivo a tím rozšiřují průduch na požadovaný průměr.
        </p>
        <p className="text-gray-500 mt-4">
          Tímto zpúsobem lze u vestavěných a přistavěných komínových těles odfrézovat až 1/3 síly
          komínového zdiva. Jde bezkonkurenčně ekonomičtější variantu, než kompletní zbourání
          komínového tělesa následná a výstavba nového.
        </p>

        <p className="text-gray-500 mt-4">
          Ekonomičtější jak z hlediska časového (obvyklá doba 1 den, včetně vložkování), tak z
          hlediska finačního (pouhých 30% až 40% z nákladů na postavení nového komínového tělesa).
          Na tvaru spalinové cesty nezaleží, lze frézovat oblé průduchy, stejně jako průduchy
          obdelníkového nebo čtvercového tvaru.{" "}
        </p>
      </div>
    </Layout>
  );
};

export default Milling;
