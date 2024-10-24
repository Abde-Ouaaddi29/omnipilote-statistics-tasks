import React, { useState } from "react";
import Header from "./Service Apres-Vente/tickets/header";
import Statistics from "./Service Apres-Vente/tickets/statistics";
import MainTable from "./Service Apres-Vente/tickets/body";
import {
  TablePerClient1,
  TablePerClient2,
  TablePerClient3,
} from "./Service Apres-Vente/produits/table3";
import { Table1 } from "./Service Apres-Vente/produits/table1";
import {
  HighCountersTable,
  InterventionsTable,
  PendingTicketsTable,
} from "./Service Apres-Vente/produits/table4";
import { TechnicienDataTable } from "./Service Apres-Vente/produits/table2";

export default function Layoute() {
  const [route, setRoute] = useState(1);

  const HandleSetRoute = () => {
    if (route === 1) {
      return (
        <>
          <div className="p-4">
            <Header />
            <Statistics />
            <MainTable />
          </div>
        </>
      );
    }

    if (route === 2) {
      return (
        <div className=" border-b-2 border-blue-200 p-4 mb-6">
          <Table1 />
        </div>
      );
    }

    if (route === 3) {
      return (
        <>
          <div className="border-b-2 border-blue-200 p-4 mb-6">
            <TechnicienDataTable />
          </div>
        </>
      );
    }

    if (route === 4) {
      return (
        <>
          <div className="grid lg:grid-cols-2 xl:lg:grid-cols-2 md:lg:grid-cols-3 grid-cols-1 gap-3 border-b-2 border-blue-200 p-4 mb-6">
            <TablePerClient1 />
            {/* <Graphic/> */}
            <TablePerClient2 />
            {/* <Graphic/> */}
            <TablePerClient3 />
            {/* <Graphic /> */}
          </div>
        </>
      );
    }

    if (route === 5) {
      return (
        <>
          <div className="border-b-2 border-blue-200 p-4 mb-6">
            <InterventionsTable />
            <HighCountersTable />
            <PendingTicketsTable />
          </div>
        </>
      );
    }
  };

  return (
    <div className="">
      <div className="p-4 bg-gray-100 rounded mb-6">
        <div className="w-full mb-2 border-b-2 py-2 ">
          {/* <span className="w-4/12 font-bold mr-2 ">tableau principale :</span> */}
          <button
            onClick={() => setRoute(1)}
            className="py-2 px-6 bg-blue-400 text-white font-bold tracking-wide hover:bg-transparent hover:border border-blue-400 hover:text-blue-400 "
          >
            Reporting technique general
          </button>
        </div>

        <div className="">
          <span className=" font-bold">Rapport technique quotidien : </span>
          <div className=" flex flex-col mt-3 flex-wrap">
            <button
              onClick={() => setRoute(2)}
              className="  mb-2 py-2 px-6  bg-blue-400 text-white font-bold tracking-wide hover:bg-transparent hover:border border-blue-400 hover:text-blue-400 "
            >
              Rapport quotidien des tickets
            </button>
            <button
              onClick={() => setRoute(3)}
              className="  mb-2 py-2 px-6  bg-blue-400 text-white font-bold tracking-wide hover:bg-transparent hover:border border-blue-400 hover:text-blue-400 "
            >
              Rapport mensuel des techniciens
            </button>
            <button
              onClick={() => setRoute(4)}
              className=" mb-2 py-2 px-6  bg-blue-400 text-white font-bold tracking-wide hover:bg-transparent hover:border border-blue-400 hover:text-blue-400 "
            >
              Rapport année en cours des clients
            </button>
            <button
              onClick={() => setRoute(5)}
              className=" mb-2 py-2 px-6 bg-blue-400 text-white font-bold tracking-wide hover:bg-transparent hover:border border-blue-400 hover:text-blue-400 "
            >
              Rapport annuel des équipements
            </button>
          </div>
        </div>
      </div>
      {HandleSetRoute()}
    </div>
  );
}
