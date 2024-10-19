import React from "react";
import { useSelector } from "react-redux";
import { FcStatistics } from "react-icons/fc";
import { MdErrorOutline } from "react-icons/md";
import Graphic from "./graphic";

export default function Statistics() {
  const tickets = useSelector((state) => state.tickets.Tickets);

  const calculateTicketDuration = (dateOuverture, dateFermeture) => {
    if (!dateFermeture) return 0;
    const ouverture = new Date(dateOuverture);
    const fermeture = new Date(dateFermeture);
    const durationInMilliseconds = fermeture - ouverture;
    const durationInHours = durationInMilliseconds / (1000 * 60 * 60);

    return durationInHours;
  };

  const calculateAvgDuration = () => {
    if (tickets.length === 0) return 0;
    const totalDuration = tickets.reduce((acc, ticket) => {
      return (
        acc +
        calculateTicketDuration(ticket.dateOuverture, ticket.dateFermeture)
      );
    }, 0);
    return (totalDuration / tickets.length).toFixed(0);
  };

  return (
    <div className="my-10 border-b-4 border-gray-200 grid lg:grid-cols-2 grid-cols-1">
      <div className="font-thin">
        {tickets.length > 0 ? (
          <div>
            <div className="mb-4 font-semibold flex items-center">
              <span>Des statistiques pour ces {tickets.length} tickets </span>
              <FcStatistics className="ml-2" />
            </div>
            <div>
              Nombre total des tickets :{" "}
              <span className="font-normal">{tickets.length}</span>
            </div>
            <div>
              Durée moyenne des tickets{" "}
              : <span className="font-normal">{calculateAvgDuration()} h</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center text-red-500">
            <span>Aucun ticket disponible pour faire des statistiques</span>
            <MdErrorOutline className="ml-3" />
          </div>
        )}
      </div>
      <div className="">
        {tickets.length > 0 ? <Graphic/> : ''}
      </div>
    </div>
  );
}
