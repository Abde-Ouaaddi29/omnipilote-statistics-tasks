import { tickets } from "../../API/data";

export function TechnicienDataTabe() {
  const currentMonth = new Date().toISOString().substring(0, 7);
  const currentYear = new Date().toISOString().substring(0, 4);


  console.log(currentMonth + "/" + currentYear);

  const removeDuplicates = (array) => {
    return [...new Set(array)];
  };

  const uniqueTechnicians = removeDuplicates(
    tickets.map((item) => item.technicien)
  );

  

  const ExtractTech = (technician) => {

    const closedTicketsByMonth = tickets.filter(
      (ticket) =>
        ticket.technicien === technician &&
        ticket.dateOuverture.includes(currentMonth)
    ).length;

    const closedTicketsByYear = tickets.filter(
        (ticket) =>
          ticket.technicien === technician &&
          ticket.dateOuverture.includes(currentYear)
      ).length;

    return {closedTicketsByMonth, closedTicketsByYear};
  };

  return (
    <>
      <div className="relative overflow-x-auto">
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
                return (
                  <tr className="odd:bg-white border" key={technician}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {technician}
                    </th>
                    <td className="px-6 py-4 border text-center">
                      {ExtractTech(technician).closedTicketsByMonth}
                    </td>
                    <td className="px-6 py-4 border text-center">
                    {ExtractTech(technician).closedTicketsByYear}
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
