import React, { useState, useEffect } from "react";

export const InterventionsTable = () => {
  const [interventions, setInterventions] = useState([]);

  const sampleData = [
    {
      id: "24245235",
      designation: "AT20",
      client: "albert",
      interventionsPerYear: 8,
    },
    {
      id: "12342235",
      designation: "AT40",
      client: "ATLAS One",
      interventionsPerYear: 10,
    },
  ];

  const calculateInterventions = (interventionsPerYear) => {
    return interventionsPerYear >= 4 ? interventionsPerYear : 4;
  };

  useEffect(() => {
    const calculatedData = sampleData.map((item) => ({
      ...item,
      totalInterventions: calculateInterventions(item.interventionsPerYear),
    }));
    setInterventions(calculatedData);
  }, []);

  return (
    <div>
      <div className="bg-blue-200 w-full p-2 mb-4">
        <div className="flex items-center justify-between">
          <h1 className=" font-bold my-4">
            {" "}
            Récurrence des interventions techniques par équipement
          </h1>
          <span className="bg-blue-300 rounded p-2">cette annee</span>
        </div>
        <table className="w-full">
          <thead>
            <tr className="font-bold">
              <td>Numéro</td>
              <td>Désignation</td>
              <td>Client</td>
              <td>Nombre d’interventions</td>
            </tr>
          </thead>
          <tbody>
            {interventions.map((intervention) => (
              <tr key={intervention.id}>
                <td>{intervention.id}</td>
                <td>{intervention.designation}</td>
                <td>{intervention.client}</td>
                <td>{intervention.totalInterventions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const HighCountersTable = () => {
  const [counters, setCounters] = useState([]);

  const sampleData = [
    {
      id: "1214125235",
      designation: "AT20",
      client: "ATLAS One",
      monoCounter: 52478,
      couleurCounter: 8547,
    },
  ];

  useEffect(() => {
    setCounters(sampleData);
  }, []);

  return (
    <div>
      <div className="bg-blue-200 w-full p-2 mb-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold my-4">
            Liste des compteurs les plus élevés
          </h1>
          <span className="bg-blue-300 rounded p-2">Cette année</span>
        </div>
        <table className="w-full">
          <thead>
            <tr className="font-bold">
              <td>N° série</td>
              <td>Désignation</td>
              <td>Client</td>
              <td>Compteur mono</td>
              <td>Compteur couleur</td>
            </tr>
          </thead>
          <tbody>
            {counters.map((counter) => (
              <tr key={counter.id}>
                <td>{counter.id}</td>
                <td>{counter.designation}</td>
                <td>{counter.client}</td>
                <td>{counter.monoCounter}</td>
                <td>{counter.couleurCounter}</td>
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
    const [tickets, setTickets] = useState([]);

    // Sample data for the pending tickets
    const sampleData = [
        { id: '1214125235', designation: 'AT20', client: 'ATLAS One', duration: '25j 14h 35mn' },
        // Add more data entries as needed
    ];

    // Effect to initialize data
    useEffect(() => {
        // Set the tickets data
        setTickets(sampleData);
    }, []);

    return (
        <div className="bg-blue-200 w-full p-2">
            <div className="flex items-center justify-between">
                <h1 className="font-bold my-4">Liste des tickets techniques en souffrance</h1>
                <span className="bg-blue-300 rounded p-2">cette annee</span>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="font-bold">
                        <td>N° série</td>
                        <td>Désignation</td>
                        <td>Client</td>
                        <td>Durée du ticket</td>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map(ticket => (
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.designation}</td>
                            <td>{ticket.client}</td>
                            <td>{ticket.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

