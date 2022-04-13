import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

// markup
const Lining = () => {
  return (
    <Layout>
      <title>Kominictví Radomír Ďuriš</title>

      <div className="p-3 min-h-screen mx-auto w-full md:w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-3/6">
        {/* Vložkování */}
        <h1 className="font-bold text-3xl text-rose-400">Vložkování komínů</h1>

        <p className="text-gray-500 mt-4">
          Při vložkování se do průduchů komína zavádí pevná nebo ohebná komínová vložka. Vložkování
          komínů zajišťuje bezpečný odvod spalin od spotřebiče po vyfrézování nebo jako výměna za
          špatnou, starou komínovou vložku. Provádíme vložkování pro všechny druhy paliv - tuhá,
          kapalná, plynná. S výběrem vhodné komínové vložky právě pro Váš spotřebič, Vám samozřejmě
          poradíme.
        </p>
        <p className="text-gray-500 mt-4">
          Používáme zásadně nerezové komínové vložky značky <span className="font-bold">Lekon</span>
          .
        </p>

        <ul className="text-gray-500 list-disc list-inside py-3 space-y-2">
          <li>
            <span className="font-bold">Nerezová ocel - pevné rourové kouřovody:</span> K dispozici
            máme kompletní sortiment kolen, redukcí a nástavců. Průměry materiálů od 150 mm do 200
            mm. Dle předepsaných norem musí být tloušťka kouřovodu minimálně 0,8 mm. U nás používáme
            standartně komínové vložky od 1 mm.
          </li>
          <li>
            <span className="font-bold">Nerezová ocel - flexibilní hadice: </span>Jsou určeny pro
            vložkování stávajících komínových průduchů, do uhýbaných komínů a tam, kde není možné
            instalovat pevné komínové trubky. Tento typ komínových vložek je vyráběn v průměrech od
            150 mm do 200 mm.{" "}
          </li>
        </ul>

        {/* Image */}
        <div className="flex flex-wrap justify-center items-center rounded-xl text-center md:text-left mt-16">
          <div className="w-72 h-96 md:h-96 mb-4 md:mb-0 md:p-3">
            <StaticImage
              placeholder="blurred"
              className="rounded-xl"
              src="../images/vlozkovani1.jpeg"
              alt="Komín 1"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Lining;
