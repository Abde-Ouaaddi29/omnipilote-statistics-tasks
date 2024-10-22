import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { tickets } from "../../API/data";
import { format, parseISO } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Graphic2 = () => {
  // Helper to group tickets by year
  const currentYear = new Date().getFullYear();
  const thisYearTickets = tickets.filter((ticket) =>
    new Date(ticket.dateOuverture).getFullYear() === currentYear
  );

  // Helper function to get month names
  const getMonthName = (dateString) => {
    return format(parseISO(dateString), 'MMMM');
  };

  // Get total tickets closed and opened this year
  const closedTickets = thisYearTickets.filter(
    (ticket) => ticket.statut === "Fermé"
  );
  const openTickets = thisYearTickets.filter(
    (ticket) => ticket.statut === "Ouvert"
  );

  // Calculate durations
  const closedDurations = closedTickets.reduce(
    (sum, ticket) => sum + ticket.dureeTicket,
    0
  );
  const openDurations = openTickets.filter(ticket => ticket.dureeTicket)
    .reduce((sum, ticket) => sum + ticket.dureeTicket, 0);

  const totalTicketsData = {
    labels: ["Fermés", "Ouverts"],
    datasets: [
      {
        label: "Nombre de Tickets",
        data: [closedTickets.length, openTickets.length],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Durée Totale (jours)",
        data: [closedDurations, openDurations],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Group tickets by months
  const months = Array.from(
    new Set(thisYearTickets.map((ticket) => getMonthName(ticket.dateOuverture)))
  );

  const monthlyClosedTickets = months.map((month) =>
    closedTickets.filter((ticket) => getMonthName(ticket.dateOuverture) === month).length
  );
  const monthlyOpenTickets = months.map((month) =>
    openTickets.filter((ticket) => getMonthName(ticket.dateOuverture) === month).length
  );

  const monthlyClosedDurations = months.map((month) => {
    return closedTickets
      .filter((ticket) => getMonthName(ticket.dateOuverture) === month)
      .reduce((sum, ticket) => sum + ticket.dureeTicket, 0);
  });

  const monthlyOpenDurations = months.map((month) => {
    return openTickets
      .filter((ticket) => getMonthName(ticket.dateOuverture) === month && ticket.dureeTicket)
      .reduce((sum, ticket) => sum + ticket.dureeTicket, 0);
  });

  const monthlyTicketsData = {
    labels: months,
    datasets: [
      {
        label: "Tickets Fermés",
        data: monthlyClosedTickets,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Tickets Ouverts",
        data: monthlyOpenTickets,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Durée Fermés (jours)",
        data: monthlyClosedDurations,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Durée Ouverts (jours)",
        data: monthlyOpenDurations,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Tickets Fermés et Ouverts Cette Année" },
    },
  };

  return (
    <div className="flex flex-wrap justify-around mt-7 border p-2">
      {/* Total tickets graph */}
      <div className="w-[370px] h-[260px] lg:w-[550px] lg:h-[350px]">
        <h2 className="font-light text-green-600">Total des Tickets Fermés et Ouverts</h2>
        <Bar data={totalTicketsData} options={options} />
      </div>

      {/* Monthly tickets graph */}
      <div className="w-[370px] h-[260px] lg:w-[550px] lg:h-[350px] ">
        <h2 className="font-light text-purple-400">Tickets par Mois</h2>
        <Bar data={monthlyTicketsData} options={options} />
      </div>
    </div>
  );
};
