import * as React from "react";
import Layout from "../components/layout";

// markup
const CleaningAndRevision = () => {
  return (
    <Layout>
      <title>Kominictví Radomír Ďuriš</title>
      <div className="min-h-screen">
        {/* Čištění spalinových cest */}
        <h1 className="font-bold text-3xl">Čištění spalinových cest</h1>

        <p className="text-gray-500 mt-4">
          Čištění spalinové cesty se provádí mechanickým odstraněním pevných látek, usazenin a
          nečistot ze spalinové cesty a jejích komponentů a výběrem pevných částí spalin
          nahromaděných v půdici komínového průduchu a kondenzátů ze spalinové cesty.
        </p>
        <p className="text-gray-500 mt-4">
          Frekvenci čištění spalinových cest určuje nařízení vlády č. 91/2010 Sb. a jsou uvedeny v
          tabulce níže.
        </p>

        {/* Tabulka */}
        <table className="border-red-300 border text-center w-full mt-4 text-sm">
          <tbody>
            <tr className="font-semibold bg-neutral-200">
              <td className="border border-neutral-300" rowSpan={3}>
                Výkon připojeného spotřebiče paliv
              </td>
              <td className="border border-neutral-300" rowSpan={3}>
                Činnost
              </td>
              <td className="border border-neutral-300" colSpan={5}>
                Druh paliva připojeného spotřebiče paliv
              </td>
            </tr>
            <tr className="font-semibold bg-neutral-200">
              <td className="border border-neutral-300" colSpan={2}>
                Pevné
              </td>
              <td className="border border-neutral-300" colSpan={2}>
                Kapalné
              </td>
              <td className="border border-neutral-300" rowSpan={2}>
                Plynné
              </td>
            </tr>
            <tr className="font-semibold bg-neutral-200">
              <td className="border border-neutral-300">Celoroční provoz</td>
              <td className="border border-neutral-300">Sezónní provoz</td>
              <td className="border border-neutral-300">Celoroční provoz</td>
              <td className="border border-neutral-300">Sezónní provoz</td>
            </tr>
            <tr>
              <td className="border border-neutral-300" rowSpan={2}>
                do 50 kW včětně
              </td>
              <td>Čištění spalinové cesty</td>
              <td className="border border-neutral-300">3x za rok</td>
              <td className="border border-neutral-300">2x za rok</td>
              <td className="border border-neutral-300">2x za rok</td>
              <td className="border border-neutral-300">1x za rok</td>
              <td className="border border-neutral-300">1x za rok</td>
            </tr>
            <tr>
              <td className="border border-neutral-300">Kontrola spalinové cesty</td>
              <td className="border border-neutral-300" colSpan={2}>
                1x za rok
              </td>
              <td className="border border-neutral-300" colSpan={2}>
                1x za rok
              </td>
              <td className="border border-neutral-300">1x za rok</td>
            </tr>
            <tr>
              <td className="border border-neutral-300">nad 50 kW</td>
              <td className="border border-neutral-300">Čištění a kontrola spalinové cesty</td>
              <td className="border border-neutral-300" colSpan={2}>
                2x za rok
              </td>
              <td className="border border-neutral-300" colSpan={2}>
                1x za rok
              </td>
              <td className="border border-neutral-300">1x za rok</td>
            </tr>
          </tbody>
        </table>

        {/* Revize */}
        <h1 className="font-bold text-3xl mt-16">Revize spalinových cest</h1>

        <p className="text-gray-500 mt-4">
          Provádíme výchozí revize komínů a kouřových cest u novostaveb, tak i periodické revize u
          stavajících objektů.
        </p>
        <p className="text-gray-500 mt-4">
          Dle nařízení vlády č. 91/2010 Sb. §5 odst. 2 se revize spalinové cesty provádí:
        </p>
        <ul className="text-gray-500 list-disc list-inside py-3 space-y-2">
          <li>před uvedením spalinové cesty do provozu nebo po každé stavební úpravě komína,</li>
          <li>při změně druhu paliva připojeného spotřebiče paliv,</li>
          <li>před výměnou nebo novou instalací spotřebiče paliv,</li>
          <li>po komínovém požáru,</li>
          <li>
            při vzniku trhlin ve spalinové cestě, jakož i při vzniku podezření na výskyt trhlin ve
            spalinové cestě.
          </li>
        </ul>
        <p className="text-gray-500 mt-4">
          Při zjištění nedostatků spalinových cest během revize, které bezprostředně ohrožují
          požární bezpečnost spalinových cest, Vám navrhneme a provedeme adekvátní náprávu.
        </p>
      </div>
    </Layout>
  );
};

export default CleaningAndRevision;
