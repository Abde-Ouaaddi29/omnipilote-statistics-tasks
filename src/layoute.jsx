import React, { useState } from "react";
import Header from "./Service Apres-Vente/tickets/header";
import Statistics from "./Service Apres-Vente/tickets/statistics";
import MainTable from "./Service Apres-Vente/tickets/body";
import {
  TablePerClient1,
  TablePerClient2,
  TablePerClient3,
} from "./Service Apres-Vente/produits/table3";
import Graphic from "./Service Apres-Vente/tickets/graphic";
import {
  Table1
} from "./Service Apres-Vente/produits/table1";
import { HighCountersTable, InterventionsTable, PendingTicketsTable } from "./Service Apres-Vente/produits/table4";
import { TechnicienDataTabe } from "./Service Apres-Vente/produits/table2";

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
        <div className=" border-b-2 border-blue-200 pb-4 mb-6">
          <Table1 />
        </div>
      );
    }

    if (route === 3) {
      return (
        <>
          <div className="border-b-2 border-blue-200 pb-4 mb-6">
            <TechnicienDataTabe />
          </div>
        </>
      );
    }

    if (route === 4) {
      return (
        <>
          <div className="grid lg:grid-cols-2 xl:lg:grid-cols-2 md:lg:grid-cols-3 grid-cols-1 gap-3 border-b-2 border-blue-200 pb-4 mb-6">
            <TablePerClient1 />
            <Graphic />
            <TablePerClient2 />
            <Graphic />
            <TablePerClient3 />
            <Graphic />
          </div>
        </>
      );
    }

    if (route === 5) {
      return (
        <>
          <div className="border-b-2 border-blue-200 pb-4 mb-6">
            <InterventionsTable />
            <HighCountersTable />
            <PendingTicketsTable />
          </div>
        </>
      );
    }
  };

  return (
    <div className="p-4">
      <div className="p-4 bg-gray-100 rounded mb-6">
        <div className="w-full flex mb-2 ">
          <span className="w-4/12 font-bold mr-2 ">tableau principale :</span>
          <button
            onClick={() => setRoute(1)}
            className="py-2 px-6 mr-2 bg-blue-400 text-white font-bold tracking-wide hover:bg-transparent hover:border border-blue-400 hover:text-blue-400 "
          >
            tickets
          </button>
        </div>

        <div className="flex items-center">
          <span className=" lg:w-4/12 xl:w-4/12 w-8/12 font-bold mr-2">
            Rapport technique quotidien :{" "}
          </span>
          <div className=" flex flex-wrap">
            <button
              onClick={() => setRoute(2)}
              className="py-2 px-6 mr-2 bg-blue-400 text-white font-bold tracking-wide hover:bg-transparent hover:border border-blue-400 hover:text-blue-400 "
            >
              Rapport 1
            </button>
            <button
              onClick={() => setRoute(3)}
              className="py-2 px-6 mr-2 bg-blue-400 text-white font-bold tracking-wide hover:bg-transparent hover:border border-blue-400 hover:text-blue-400 "
            >
              Rapport 2
            </button>
            <button
              onClick={() => setRoute(4)}
              className="py-2 px-6 mr-2 bg-blue-400 text-white font-bold tracking-wide hover:bg-transparent hover:border border-blue-400 hover:text-blue-400 "
            >
              Rapport 3
            </button>
            <button
              onClick={() => setRoute(5)}
              className="py-2 px-6 bg-blue-400 text-white font-bold tracking-wide hover:bg-transparent hover:border border-blue-400 hover:text-blue-400 "
            >
              Rapport 4
            </button>
          </div>
        </div>
      </div>
      {HandleSetRoute()}
    </div>
  );
}
