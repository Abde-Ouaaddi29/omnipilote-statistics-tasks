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
import { parseISO, format } from "date-fns";
import { fr } from "date-fns/locale";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Helper function to get month names
const getMonthName = (dateString) => {
  return format(parseISO(dateString), "MMMM", { locale: fr }); // Use the French locale
};

export const GraphicGeneral = () => {
  // Get unique years from the tickets
  const years = Array.from(
    new Set(tickets.map((ticket) => new Date(ticket.dateOuverture).getFullYear()))
  );

  return (
    <div className="flex flex-col space-y-10 mt-7 border p-2 bg-gray-50">
      {years.map((year) => {
        // Filter tickets for the current year
        const yearTickets = tickets.filter(
          (ticket) => new Date(ticket.dateOuverture).getFullYear() === year
        );

        // Filter tickets by status (opened and closed)
        const closedTickets = yearTickets.filter((ticket) => ticket.statut === "Fermé");
        const openTickets = yearTickets.filter((ticket) => ticket.statut === "Ouvert");

        // Get unique months for the current year
        const months = Array.from(
          new Set(yearTickets.map((ticket) => getMonthName(ticket.dateOuverture)))
        );

        // Calculate data for closed/opened tickets by month
        const monthlyClosedTickets = months.map((month) =>
          closedTickets.filter((ticket) => getMonthName(ticket.dateOuverture) === month)
            .length
        );
        const monthlyOpenTickets = months.map((month) =>
          openTickets.filter((ticket) => getMonthName(ticket.dateOuverture) === month)
            .length
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

        // Data for the chart
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
              label: "Durée Fermés (jour)",
              data: monthlyClosedDurations,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
            {
              label: "Durée Ouverts (jour)",
              data: monthlyOpenDurations,
              backgroundColor: "rgba(153, 102, 255, 0.6)",
              borderColor: "rgba(153, 102, 255, 1)",
              borderWidth: 1,
            },
          ],
        };

        const chartOptions = {
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: `Tickets Fermés et Ouverts en ${year} par Mois` },
          },
        };

        return (
          <div key={year} className="w-full h-auto">
            {/* Chart for each year */}
            <div className=" h-[200px] lg:w-[550px] lg:h-[330px] mx-auto">
              <Bar data={monthlyTicketsData} options={chartOptions} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
