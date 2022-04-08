import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

// markup
const Milling = () => {
  return (
    <Layout>
      <title>Kominictví Radomír Ďuriš</title>
      <div className="min-h-screen">
        <div className="w-full h-96 mb-16 rounded-lg">
          <StaticImage
            placeholder="blurred"
            className="rounded-lg"
            src="../images/3.jpg"
            alt="Komín 1"
            style={{ height: "100%", width: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        </div>

        {/* Frezovani */}
        <h1 className="font-bold text-3xl">Frézování komínů</h1>

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