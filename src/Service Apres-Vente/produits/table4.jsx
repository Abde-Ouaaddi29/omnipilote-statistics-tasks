import React, { useState, useEffect } from "react";
import { clients, tickets } from "../../API/data";

export const InterventionsTable = () => {
  const [interventions, setInterventions] = useState([]);

  const calculateRecurrence = (numeroSerie) => {
    const nbr = tickets.filter((ticket) => ticket.numeroSerie === numeroSerie).length
    return nbr ;
  };

  useEffect(() => {
    // Grouping the tickets by `numeroSerie`
    const groupedBySerie = tickets.reduce((acc, ticket) => {
      const { numeroSerie, designation, clientId } = ticket;
      // Find client name
      const client = clients.find((c) => c.id === clientId)?.name || "Unknown";

      if (!acc[numeroSerie]) {
        acc[numeroSerie] = {
          numeroSerie,
          designation,
          client,
          totalInterventions: calculateRecurrence(numeroSerie),
        };
      }

      return acc ;
    }, {});

    // Convert the grouped object to an array and sort by `totalInterventions` in descending order
    const sortedData = Object.values(groupedBySerie).sort(
      (a, b) => b.totalInterventions - a.totalInterventions
    );
    setInterventions(sortedData);
  }, []);

  return (
    <div>
      <div className="bg-blue-200 w-full p-2 mb-4 lg:text-sm xl:text-sm text-[12px]">
        <div className="flex items-center justify-between">
          <h1 className="font-bold my-4">
            Récurrence des interventions techniques par équipement
          </h1>
          <span className="bg-blue-300 rounded p-2">Cette année</span>
        </div>
        <table className="w-full">
          <thead>
            <tr className="font-bold">
              <td className="text-center">Numéro de série</td>
              <td className="text-center">Désignation</td>
              <td className="text-center">Client</td>
              <td className="text-center">Nombre d’interventions</td>
            </tr>
          </thead>
          <tbody>
            {interventions.map((intervention) => (
             intervention.totalInterventions > 2 ? 
              <tr key={intervention.numeroSerie}>
                <td className="text-center">{intervention.numeroSerie}</td>
                <td className="text-center">{intervention.designation}</td>
                <td className="text-center">{intervention.client}</td>
                <td className="text-center">
                  {intervention.totalInterventions}
                </td>
              </tr>
             :
             ''
              // <tr key={intervention.numeroSerie}>
              //   <td className="text-center">{intervention.numeroSerie}</td>
              //   <td className="text-center">{intervention.designation}</td>
              //   <td className="text-center">{intervention.client}</td>
              //   <td className="text-center">
              //     {intervention.totalInterventions}
              //   </td>
              // </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export const HighCountersTable = () => {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    //// Combine tickets and clients data into a single array
    const combinedData = tickets.map((ticket) => {
      const client = clients.find((client) => client.id === ticket.clientId);
      return {
        numeroSerie: ticket.numeroSerie,
        designation: ticket.designation,
        client: client ? client.name : "Unknown Client",
        compteurMono: ticket.compteurMono,
        compteurCouleur: ticket.compteurCouleur,
      };
    });

    //// Remove duplicates and keep the ticket with the highest sum of compteurMono + compteurCouleur
    const uniqueSeries = combinedData.reduce((acc, current) => {
      const found = acc.find((item) => item.numeroSerie === current.numeroSerie);
      if (!found) {
        acc.push(current);
      } else if (
        found.compteurMono + found.compteurCouleur < current.compteurMono + current.compteurCouleur
      ) {
        //// Replace the existing entry with the one having a bigger counter sum
        acc = acc.map((item) =>
          item.numeroSerie === current.numeroSerie ? current : item
        );
      }
      return acc;
    }, []);

    //// Sort the counters by the sum of compteurMono + compteurCouleur in descending order
    const sortedCounters = uniqueSeries.sort(
      (a, b) => b.compteurMono + b.compteurCouleur - (a.compteurMono + a.compteurCouleur)
    );

    setCounters(sortedCounters);
  }, []);

  return (
    <div>
      <div className="bg-blue-200 w-full p-2 mb-4 lg:text-sm xl:text-sm text-[12px]">
        <div className="flex items-center justify-between">
          <h1 className="font-bold my-4">Liste des compteurs les plus élevés</h1>
          <span className="bg-blue-300 rounded p-2">Cette année</span>
        </div>
        <table className="w-full">
          <thead>
            <tr className="font-bold">
              <td className="text-center">N° série</td>
              <td className="text-center">Désignation</td>
              <td className="text-center">Client</td>
              <td className="text-center">Compteur mono</td>
              <td className="text-center">Compteur couleur</td>
            </tr>
          </thead>
          <tbody>
            {counters.map((counter, index) => (
              <tr key={index}>
                <td className="text-center">{counter.numeroSerie}</td>
                <td className="text-center">{counter.designation}</td>
                <td className="text-center">{counter.client}</td>
                <td className="text-center">{counter.compteurMono}</td>
                <td className="text-center">{counter.compteurCouleur}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};



export const PendingTicketsTable = () => {
  // State to hold the tickets data
  const [pendingTickets, setPendingTickets] = useState([]);

  // Effect to filter pending tickets
  useEffect(() => {
    // Assuming "Ouvert" status means pending
    const filteredTickets = tickets.filter((ticket) => ticket.statut === "Ouvert");
    setPendingTickets(filteredTickets);
  }, []);

  // Function to get client name by clientId
  const getClientName = (clientId) => {
    const client = clients.find((client) => client.id === clientId);
    return client ? client.name : "Unknown Client";
  };

  return (
    <div className="bg-blue-200 w-full p-2 lg:text-sm xl:text-sm text-[12px]">
      <div className="flex items-center justify-between">
        <h1 className="font-bold my-4">
          Liste des tickets techniques en souffrance
        </h1>
        <span className="bg-blue-300 rounded p-2">cette année</span>
      </div>
      <table className="w-full">
        <thead>
          <tr className="font-bold">
            <td>N° série</td>
            <td>Désignation</td>
            <td>Client</td>
            <td>Durée du ticket (h)</td>
          </tr>
        </thead>
        <tbody>
          {pendingTickets.map((ticket) => (
            <tr key={ticket.numeroSerie}>
              <td>{ticket.numeroSerie}</td>
              <td>{ticket.designation}</td>
              <td>{getClientName(ticket.clientId)}</td>
              <td>{ticket.dureeAppel}h</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
