import { tickets } from "../../API/data";

export function Table1() {
  const today = new Date().toISOString().substring(0, 10);
  const currentYear = new Date().getFullYear();
  const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0');
  const currentDay = String(new Date().getDate()).padStart(2, '0');
  const previousYear = currentYear - 1;

  console.log(currentYear, currentMonth, currentDay, today);


  const calculateAverageDuration = (filteredTickets) => {
    if (filteredTickets.length === 0) return "0h0min";
    const totalDuration = filteredTickets.reduce(
      (acc, ticket) => acc + ticket.dureeTicket,
      0
    );
    const averageDuration = totalDuration / filteredTickets.length;
    const hours = Math.floor(averageDuration);
    const minutes = Math.round((averageDuration % 1) * 60);
    return `${hours}h${minutes}min`;
  };


  const ticketsToday = tickets.filter(
    (ticket) => ticket.dateOuverture === today
  );
  const ticketsThisMonth = tickets.filter(
    (ticket) => ticket.dateOuverture.startsWith(`${currentYear}-${currentMonth}`)
  );
  const ticketsThisYear = tickets.filter(
    (ticket) => ticket.dateOuverture.startsWith(`${currentYear}`)
  );

  const ticketsPreviousYear = tickets.filter(
    (ticket) => ticket.dateOuverture.startsWith(`${previousYear}`)
  );

  const closedTicketsToday = tickets.filter(
    (ticket) => ticket.statut === "Fermé" && ticket.dateFermeture === today
  );
  const closedTicketsThisMonth = tickets.filter(
    (ticket) =>
      ticket.statut === "Fermé" &&
      ticket.dateFermeture.startsWith(`${currentYear}-${currentMonth}`)
  );
  const closedTicketsThisYear = tickets.filter(
    (ticket) =>
      ticket.statut === "Fermé" && ticket.dateFermeture.startsWith(`${currentYear}`)
  );

  const closedTicketsPreviousYear = tickets.filter(
    (ticket) =>
      ticket.statut === "Fermé" && ticket.dateFermeture.startsWith(`${previousYear}`)
  );

  const inProgressTickets = tickets.filter((ticket) => !ticket.dateFermeture);
  const inProgressTicketsPreviousYear = tickets.filter(
    (ticket) => !ticket.dateFermeture && ticket.dateOuverture.startsWith(`${previousYear}`)
  );
  

  return (
    <div className="relative overflow-x-auto my-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 border"></th>
            <th scope="col" className="px-6 py-3 border">Aujourd'hui</th>
            <th scope="col" className="px-6 py-3 border">Ce mois</th>
            <th scope="col" className="px-6 py-3 border">Cette année</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white border">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Nombre de tickets créés
            </th>
            <td className="px-6 py-4 border">{ticketsToday.length}</td>
            <td className="px-6 py-4 border">{ticketsThisMonth.length}</td>
            <td className="px-6 py-4 border">{ticketsThisYear.length}</td>
          </tr>
          <tr className="odd:bg-white border">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Nombre de tickets créés N-1
            </th>
            <td className="px-6 py-4 border">{ticketsPreviousYear.length}</td>
            <td className="px-6 py-4 border">{ticketsPreviousYear.length}</td>
            <td className="px-6 py-4 border">{ticketsPreviousYear.length}</td>
          </tr>
          <tr className="odd:bg-white border">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Nombre de tickets fermés
            </th>
            <td className="px-6 py-4 border">{closedTicketsToday.length}</td>
            <td className="px-6 py-4 border">{closedTicketsThisMonth.length}</td>
            <td className="px-6 py-4 border">{closedTicketsThisYear.length}</td>
          </tr>
          <tr className="odd:bg-white border">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Nombre de tickets fermés N-1
            </th>
            <td className="px-6 py-4 border">{closedTicketsPreviousYear.length}</td>
            <td className="px-6 py-4 border">{closedTicketsPreviousYear.length}</td>
            <td className="px-6 py-4 border">{closedTicketsPreviousYear.length}</td>
          </tr>
          <tr className="odd:bg-white border">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Durée moyenne des tickets fermés
            </th>
            <td className="px-6 py-4 border">{calculateAverageDuration(closedTicketsToday)}</td>
            <td className="px-6 py-4 border">{calculateAverageDuration(closedTicketsThisMonth)}</td>
            <td className="px-6 py-4 border">{calculateAverageDuration(closedTicketsThisYear)}</td>
          </tr>
          <tr className="odd:bg-white border">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Durée moyenne des tickets fermés N-1
            </th>
            <td className="px-6 py-4 border">{calculateAverageDuration(closedTicketsPreviousYear)}</td>
            <td className="px-6 py-4 border">{calculateAverageDuration(closedTicketsPreviousYear)}</td>
            <td className="px-6 py-4 border">{calculateAverageDuration(closedTicketsPreviousYear)}</td>
          </tr>
          <tr className="odd:bg-white border">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Nombre de tickets en cours
            </th>
            <td className="px-6 py-4 border text-center" colSpan={3}>{inProgressTickets.length}</td>
          </tr>
          <tr className="odd:bg-white border">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Nombre de tickets en cours N-1
            </th>
            <td className="px-6 py-4 border text-center" colSpan={3}>{inProgressTicketsPreviousYear.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
