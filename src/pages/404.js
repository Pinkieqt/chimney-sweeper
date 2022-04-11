import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <div className="w-full min-h-screen flex justify-center text-center">
        <div className="w-2/3 md:1/2 mt-20 md:mt-40">
          <h1 className="text-8xl font-black mb-5">404</h1>
          <p className="text-lg">Omlouváme se, ale tohle se nám nepovedlo.</p>
          <p className="text-lg mb-10">
            Vypadá to, že se snažíte zobrazit stránku, která neexistuje, nebo je momentálně
            nedostupná.
          </p>
          <Link className="px-4 py-2 bg-gray-400 text-white rounded-xl" to="/">
            Domů
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
