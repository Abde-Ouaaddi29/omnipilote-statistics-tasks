import React from "react";
import { useSelector } from "react-redux";
import Graphic from "../tickets/graphic";

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
    <div className="p-2">
      <div>Table 1</div>
      <div>Table 2</div>
      <div className="grid lg:grid-cols-2 xl:lg:grid-cols-2 md:lg:grid-cols-2 grid-cols-1 gap-3 my-6 border-b-4 border-blue-200 py-6">
        <TablePerClient1 />
        <Graphic />
        <TablePerClient2 />
        <Graphic />
        <TablePerClient3 />
        <Graphic />
      </div>
      <div>Table 4</div>
    </div>
  );
}
