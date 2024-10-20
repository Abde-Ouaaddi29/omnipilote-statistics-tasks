import React from "react";
import { useSelector } from "react-redux";
import { technicienStats, tickets } from "../../API/data";

export default function Tables() {
  const clients = useSelector((state) => state.tickets.clients);
  const tickets = useSelector((state) => state.tickets.allTickets);
  const today = new Date().toISOString().substring(0, 10);
  const currentYear = new Date().toISOString().substring(0, 4);

  console.log(clients);
  console.log(tickets);
  console.log(currentYear);

  //// table 3 /////
  const TablePerClient1 = () => {
    const overtTickets = tickets.filter(
      (item) => item.statut === "Ouvert" && item.dateOuverture === today
    );

    console.log(overtTickets);

    const clientsWithovertTickets = clients.filter((client) =>
      overtTickets.some((ticket) => ticket.clientId === client.id)
    );

    return (
      <>
        <div className="p-2 bg-blue-200 text-sm hover:border border-blue-400 transition-all duration-700">
          <div className="flex justify-between">
            <div className="font-bold">
              Nombre de tickets ouverts par client
            </div>
            <div className="bg-blue-400 px-2 py-1 rounded">Aujourd’hui</div>
          </div>
          <div className="mt-4">
            {overtTickets.length > 0 ? (
              clientsWithovertTickets.map((client) => {
                const ticketCount = overtTickets.filter(
                  (ticket) => ticket.clientId === client.id
                ).length;

                return (
                  <div
                    key={client.id}
                    className="flex justify-between border-b mb-2 py-1"
                  >
                    <div className="px-4">{client.name}</div>
                    <div className="px-4">{ticketCount}</div>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-gray-600 mt-10">
                Aucun ticket aujourd'hui.
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  const TablePerClient2 = () => {
    const closedTickets = tickets.filter(
      (item) =>
        item.statut === "Fermé" && item.dateOuverture.includes(currentYear)
    );
    console.log(closedTickets);

    const clientsWitClosedTickets = clients.filter((client) =>
      closedTickets.some((ticket) => ticket.clientId === client.id)
    );

    return (
      <>
        <div className="p-2 bg-blue-200 text-sm hover:border border-blue-400 transition-all duration-700">
          <div className="flex justify-between">
            <div className="font-bold">Nombre de tickets Fermés par client</div>
            <div className="bg-blue-400 px-2 py-1 rounded">cette annee</div>
          </div>
          <div className="mt-4">
            {clientsWitClosedTickets.map((client) => {
              const ticketCount = closedTickets.filter(
                (ticket) => ticket.clientId === client.id
              ).length;

              return (
                <div
                  key={client.id}
                  className="flex justify-between border-b mb-2 py-1"
                >
                  <div className="px-4">{client.name}</div>
                  <div className="px-4">{ticketCount}</div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  const TablePerClient3 = () => {
    const HandleClient = (e) => {
      const totalTickets = tickets.filter((item) => item.clientId === e);
      console.log(totalTickets);

      const totalDuration = totalTickets.reduce(
        (e, ticket) => e + ticket.dureeTicket,
        0
      );
      const averageDuration = totalDuration / totalTickets.length;
      console.log(averageDuration);

      if (averageDuration == 0) {
        return <> {"-"} </>;
      }

      return `${Math.floor(averageDuration)}h ${Math.round(
        (averageDuration % 1) * 60
      )}m`;
    };

    return (
      <>
        <div className="p-2 bg-blue-200 text-sm hover:border border-blue-400 transition-all duration-700">
          <div className="flex justify-between">
            <div className="font-bold">
              Durée moyenne d’interventions par client
            </div>
            <div className="bg-blue-400 px-2 py-1 rounded">cette annee</div>
          </div>
          <div className="mt-4">
            {clients.map((item) => {
              return (
                <>
                  <div className="flex justify-between border-b mb-2 py-1">
                    <div className="px-4">{item.name}</div>
                    <div className="px-4">
                      {/* {tickets.filter(ticket => )} */}
                      {HandleClient(item.id)}
                    </div>
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
      <div>
        <Table1 />
      </div>
      <div className="grid lg:grid-cols-2  md:lg:grid-cols-2 grid-cols-1 gap-3">
        <TechnicienDataTabe isTeckeFerme={true} />
        <TechnicienDataTabe isTeckeFerme={false} />
      </div>
      <div>table 3</div>
      <div className="grid lg:grid-cols-3 xl:lg:grid-cols-3 md:lg:grid-cols-2 grid-cols-1 gap-3">
        <TablePerClient1 />
        <TablePerClient2 />
        <TablePerClient3 />
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
                        ? technicien.ticketsFeremeCetteAnnee
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

function Table1() {
  return (
    <div className="relative overflow-x-auto my-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 border ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3 border"></th>
            <th scope="col" className="px-6 py-3 border">
              Aujourd'hui
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
          <tr className="odd:bg-white border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Nombre de tickets créés
            </th>
            <td className="px-6 py-4 border">2</td>
            <td className="px-6 py-4 border">29</td>
            <td className="px-6 py-4 border">298</td>
          </tr>
          <tr className="odd:bg-white border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Nombre de tickets créés N-1
            </th>
            <td className="px-6 py-4 border">52</td>
            <td className="px-6 py-4 border">165</td>
            <td className="px-6 py-4 border">902</td>
          </tr>
          <tr className="odd:bg-white border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Nombre de tickets fermés
            </th>
            <td className="px-6 py-4 border">83</td>
            <td className="px-6 py-4 border">229</td>
            <td className="px-6 py-4 border">808</td>
          </tr>
          <tr className="odd:bg-white border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Nombre de tickets fermés N-1
            </th>
            <td className="px-6 py-4 border">24</td>
            <td className="px-6 py-4 border">53</td>
            <td className="px-6 py-4 border">353</td>
          </tr>
          <tr className="odd:bg-white border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Durée moyenne des tickets fermés
            </th>
            <td className="px-6 py-4 border">1h28min</td>
            <td className="px-6 py-4 border">2h42min</td>
            <td className="px-6 py-4 border">1h22min</td>
          </tr>
          <tr className="odd:bg-white border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Durée moyenne des tickets fermés N-1
            </th>
            <td className="px-6 py-4 border">2h42min</td>
            <td className="px-6 py-4 border">1h22min</td>
            <td className="px-6 py-4 border">1h42min</td>
          </tr>
          <tr className="odd:bg-white border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Nombre de tickets en cours
            </th>
            <td className="px-6 py-4 border text-center" colSpan={3}>123</td>
           
          </tr>
          <tr className="odd:bg-white border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Nombre de tickets en cours N-1
            </th>
            <td className="px-6 py-4 border text-center" colSpan={3}>234</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
}
