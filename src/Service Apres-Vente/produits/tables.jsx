import React from "react";
import { useSelector } from "react-redux";
import { technicienStats, tickets } from "../../API/data";

export default function Tables() {
  const clients = useSelector((state) => state.tickets.clients);
  //   const tickets = useSelector((state) => state.tickets.tickets);
  console.log(clients);

  const TablePerClient = () => {
    // const openTicket = (id) => {
    //   if()
    // };

    return (
      <>
        <div className="p-2 bg-blue-200 text-sm">
          <div className="flex justify-between">
            <div className="font-bold">
              Nombre de tickets ouverts par client
            </div>
            <div className="bg-blue-400 px-2 py-1 rounded">Aujourd’hui</div>
          </div>
          <div className="mt-4 ">
            {clients.map((client, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex justify-between border-b mb-2 py-1"
                  >
                    <div className="px-4"> {client.name} </div>
                    <div className="px-4">23</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="p-4 bg-gray-100">
      <div>table 1</div>
      <div className="grid lg:grid-cols-2  md:lg:grid-cols-2 grid-cols-1 gap-3">
        <TechnicienDataTabe isTecheFerme={true} />
        <TechnicienDataTabe isTecheFerme={false} />
      </div>
      <div>table 3</div>
      <div className="grid lg:grid-cols-3 xl:lg:grid-cols-3 md:lg:grid-cols-2 grid-cols-1 gap-3">
        <TablePerClient />
        <TablePerClient />
        <TablePerClient />
      </div>
    </div>
  );
}

// hi abdo this what here my modifications

// if isTeckeFerme show "Nombre de Tickets fermés par technicien" else show "Durée moyenne d’interventions par technicien"

function TechnicienDataTabe({ isTeckeFerme = false }) {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th className="text-center px-6 py-4" colSpan={3}>
                Nombre de Tickets fermés par technicien
              </th>
            </tr>
            <tr>
              <th scope="col" className="px-6 py-3 border">
                Technicien
              </th>
              <th scope="col" className="px-6 py-3 border">
                Ce mois
              </th>
              <th scope="col" className="px-6 py-3 border">
                Cette année
              </th>
            </tr>
          </thead>
          <tbody>
            {technicienStats &&
              technicienStats?.map((technicien) => {
                return (
                  <tr className="odd:bg-white border" key={technicien.name}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {technicien.name}
                    </th>
                    <td className="px-6 py-4 border">
                      {isTeckeFerme
                        ? technicien.ticketsFeremeCeMois
                        : technicien.moyenneInterventionsCeMois}
                    </td>
                    <td className="px-6 py-4 border">
                      {isTeckeFerme
                        ? technicien.ticketsFeremeCeMois
                        : technicien.moyenneInterventionsCetteAnnee}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
