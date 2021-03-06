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
          <Link
            className="mt-4 text-white bg-neutral-600 rounded-xl px-4 py-2 hover:bg-rose-400  transition duration-300"
            to="/"
          >
            Domů
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
