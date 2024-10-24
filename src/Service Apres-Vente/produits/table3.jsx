import { useSelector } from "react-redux";

export const TablePerClient1 = () => {
  const clients = useSelector((state) => state.tickets.clients);
  const tickets = useSelector((state) => state.tickets.allTickets);
  const today = new Date().toISOString().substring(0, 10);

  console.log('clients', clients)

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
          <div className="font-bold">Nombre de tickets ouverts par client</div>
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

export const TablePerClient2 = () => {
  const clients = useSelector((state) => state.tickets.clients);
  const tickets = useSelector((state) => state.tickets.allTickets);
  const currentYear = new Date().toISOString().substring(0, 4);

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

export const TablePerClient3 = () => {
  const clients = useSelector((state) => state.tickets.clients);
  const tickets = useSelector((state) => state.tickets.allTickets);

  const HandleClient = (clientId) => {
    // Get current year
    const currentYear = new Date().getFullYear();

    // Filter closed tickets for the current year
    const closedTickets = tickets.filter(ticket => 
      ticket.statut === "Fermé" && new Date(ticket.dateOuverture).getFullYear() === currentYear
    );

    // Filter tickets for the specific client
    const totalTickets = closedTickets.filter((ticket) => ticket.clientId === clientId);

    // If no tickets exist, return "-"
    if (totalTickets.length === 0) {
      return <>{"-"}</>;
    }

    // Calculate total and average duration
    const totalDuration = totalTickets.reduce((acc, ticket) => acc + ticket.dureeTicket, 0);
    const averageDuration = totalDuration / totalTickets.length;

    // Return average duration formatted as h and m
    return (
      <>
        {`${Math.floor(averageDuration)}h ${Math.round((averageDuration % 1) * 60)}m`}
      </>
    );
  };

  return (
    <div className="p-2 bg-blue-200 text-sm hover:border border-blue-400 transition-all duration-700">
      <div className="flex justify-between">
        <div className="font-bold">Durée moyenne d’interventions par client</div>
        <div className="bg-blue-400 px-2 py-1 rounded">cette annee</div>
      </div>
      <div className="mt-4">
        {clients.map((client) => (
          <div key={client.id} className="flex justify-between border-b mb-2 py-1">
            <div className="px-4">{client.name}</div>
            <div className="px-4">{HandleClient(client.id)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
