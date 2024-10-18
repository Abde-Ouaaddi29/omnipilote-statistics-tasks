import React from "react";
import { useSelector } from "react-redux";

export default function Body() {
  const tickets = useSelector((state) => state.tickets.Tickets);
  console.log(tickets);

  const calculateTicketDuration = (dateOuverture, dateFermeture) => {
    if (!dateFermeture) return "-";
    const ouverture = new Date(dateOuverture);
    const fermeture = new Date(dateFermeture);
    const durationInSeconds = fermeture - ouverture;

    const durationInDays = Math.floor(
      durationInSeconds / (1000 * 60 * 60)
    );
    return durationInDays;
  };

  return (
    <div className="overflow-x-auto ">
      {/* <table className="border-2 mx-2 my-4 text-sm text-white bg-gray-500">
        <thead>
          <tr className="bg-green-700 ">
            <th className="border-2 border-gray-300 p-1">Type</th>
            <th className="border-2 border-gray-300 p-1">N° Ticket</th>
            <th className="border-2 border-gray-300 p-1">N° Série</th>
            <th className="border-2 border-gray-300 p-1">Désignation</th>
            <th className="border-2 border-gray-300 p-1">Raison Sociale</th>
            <th className="border-2 border-gray-300 p-1">Date d'Ouverture</th>
            <th className="border-2 border-gray-300 p-1">SLA</th>
            <th className="border-2 border-gray-300 p-1">Durée de l'Appel</th>
            <th className="border-2 border-gray-300 p-1">Date d'Affectation</th>
            <th className="border-2 border-gray-300 p-1">Compteur Mono</th>
            <th className="border-2 border-gray-300 p-1">Compteur Couleur</th>
            <th className="border-2 border-gray-300 p-1">Statut Ticket</th>
            <th className="border-2 border-gray-300 p-1">Date de Fermeture</th>
            <th className="border-2 border-gray-300 p-1">Durée du Ticket(j)</th>
            <th className="border-2 border-gray-300 p-1">SLA Taux</th>
            <th className="border-2 border-gray-300 p-1">Technicien</th>
          </tr>
        </thead>

        {tickets.length > 0 ? (
          tickets.map((item) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.type}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.numeroTicket}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.numeroSerie}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.designation}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.client}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.dateOuverture}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.SLA}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.dureeAppel}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.dateAffectation ? item.dateAffectation : "-"}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.compteurMono}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.compteurCouleur}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.statut}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.dateFermeture ? item.dateFermeture : "-"}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {calculateTicketDuration(
                        item.dateOuverture,
                        item.dateFermeture
                      )}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.tauxSLA ? item.tauxSLA : "-"}
                    </td>
                    <td className="border-2 border-gray-300 p-1 text-center text-sm">
                      {item.technicien}
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })
        ) : (
          <tbody>
            <tr>
              <td colSpan="16" className="w-full text-center p-2 bg-gray-500">
                pas de tickets !
              </td>
            </tr>
          </tbody>
        )}
      </table> */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Type
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-100">
                Désignation{" "}
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                N° Série
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-100">
                Statut Ticket
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Date d'Ouverture
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-100">
                Durée du Ticket(h)
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Technicien
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.length > 0 ? (
              tickets.map((item) => {
                return (
                  <>
                    <tr className=" dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-700"
                      >
                        {item.type}
                      </th>
                      <td className="px-6 py-4">{item.numeroTicket}</td>
                      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                        {item.designation}
                      </td>
                      <td className="px-6 py-4">{item.statut}</td>
                      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                        {item.dateFermeture ? item.dateFermeture : "-"}
                      </td>
                      <td className="px-6 py-4">
                        {" "}
                        {calculateTicketDuration(
                          item.dateOuverture,
                          item.dateFermeture
                        )}
                      </td>
                      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                        {item.technicien}
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center p-4  bg-gray-200"
                >
                  pas de tickets !
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
