import { tickets } from "../../API/data";  

export function TechnicienDataTable() {
  const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const currentYear = new Date().getFullYear();

  const removeDuplicates = (array) => {
    return [...new Set(array)];
  };

  const uniqueTechnicians = removeDuplicates(
    tickets.map((item) => item.technicien)
  );

  const calculateAverageDuration = (ticketsFermee) => {
    if (ticketsFermee.length === 0) return "N/A";
  
    const totalMinutes = ticketsFermee.reduce((acc, dureeTicket) => {
      const minutes = Math.round(dureeTicket * 60); 
      return acc + minutes;
    }, 0);
  
    const avgMinutes = Math.floor(totalMinutes / ticketsFermee.length);
  
    const avgHours = Math.floor(avgMinutes / 60);
    const remainingMinutes = avgMinutes % 60;
  
    return `${avgHours}h${remainingMinutes.toString().padStart(2, "0")}min`;
  };
  

  const ExtractTech = (technician) => {
    const monthlyTickets = tickets.filter(
      (ticket) =>
        ticket.technicien === technician &&
        new Date(ticket.dateOuverture).getMonth() + 1 === parseInt(currentMonth) &&
        ticket.statut === "Fermé"
    );
    const yearlyTickets = tickets.filter(
      (ticket) =>
        ticket.technicien === technician &&
        new Date(ticket.dateOuverture).getFullYear() === currentYear &&
        ticket.statut === "Fermé"
    );

    const closedTicketsByMonth = monthlyTickets.length;
    const closedTicketsByYear = yearlyTickets.length;

    const avgDurationMonth = monthlyTickets.length
      ? calculateAverageDuration(monthlyTickets.map(ticket => ticket.dureeTicket))
      : "N/A";
    const avgDurationYear = yearlyTickets.length
      ? calculateAverageDuration(yearlyTickets.map(ticket => ticket.dureeTicket))
      : "N/A";

    return { closedTicketsByMonth, closedTicketsByYear, avgDurationMonth, avgDurationYear };
  };

  return (
    <>
      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
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
            {uniqueTechnicians &&
              uniqueTechnicians.map((technician) => {
                const { closedTicketsByMonth, closedTicketsByYear } = ExtractTech(technician);
                return (
                  <tr className="odd:bg-white border" key={technician}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {technician}
                    </th>
                    <td className="px-6 py-4 border text-center">
                      {closedTicketsByMonth}
                    </td>
                    <td className="px-6 py-4 border text-center">
                      {closedTicketsByYear}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* Additional table for average intervention duration */}
      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="text-center px-6 py-4" colSpan={3}>
                Durée moyenne d’interventions par technicien
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
            {uniqueTechnicians &&
              uniqueTechnicians.map((technician) => {
                const { avgDurationMonth, avgDurationYear } = ExtractTech(technician);
                return (
                  <tr className="odd:bg-white border" key={technician}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {technician}
                    </th>
                    <td className="px-6 py-4 border text-center">
                      {avgDurationMonth}
                    </td>
                    <td className="px-6 py-4 border text-center">
                      {avgDurationYear}
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
