import React, { useState } from "react";
import Header from "./Service Apres-Vente/tickets/header";
import Statistics from "./Service Apres-Vente/tickets/statistics";
import MainTable from "./Service Apres-Vente/tickets/body";
import Tables from "./Service Apres-Vente/produits/tables";

export default function Layoute() {
  const [route, setRoute] = useState(1);

  const HandleSetRoute = () => {

    if (route === 1) {
      return (
        <>
          <div>
            <Header />
            <Statistics />
            <MainTable />
          </div>
        </>
      );
    }

    if (route === 2) {
      return (
        <> <Tables/> </>
      );
    }
  };

  return (
    <div className="p-4">
      <div className="py-4">
        <button
          onClick={() => setRoute(1)}
          className="p-2 mr-2 bg-blue-400 text-white font-bold tracking-wide hover:bg-transparent hover:border border-blue-400 hover:text-blue-400 "
        >
          tickets
        </button>
        <button
          onClick={() => setRoute(2)}
          className="p-2 bg-blue-400 text-white font-bold tracking-wide hover:bg-transparent hover:border border-blue-400 hover:text-blue-400 "
        >
          produits
        </button>
      </div>
      {HandleSetRoute()}
    </div>
  );
}
