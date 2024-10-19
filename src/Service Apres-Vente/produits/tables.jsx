import React from "react";
import { useSelector } from "react-redux";

export default function Tables() {
  const clients = useSelector((state) => state.tickets.clients);
//   const tickets = useSelector((state) => state.tickets.tickets);
  console.log(clients);

  const TablePerClient = () => {

    // const openTicket = (id) => {
    //   if()
    // };

    return (
      <>
        <div className="p-2 bg-blue-200 text-sm">
          <div className="flex justify-between">
            <div className="font-bold">
              Nombre de tickets ouverts par client
            </div>
            <div className="bg-blue-400 px-2 py-1 rounded">Aujourd’hui</div>
          </div>
          <div className="mt-4 ">
            {clients.map((client, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex justify-between border-b mb-2 py-1"
                  >
                    <div className="px-4"> {client.name} </div>
                    <div className="px-4">23</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="p-4 bg-gray-100">
      <div>table 1</div>
      <div>table 2</div>
      <div>table 3</div>
      <div className="grid lg:grid-cols-3 xl:lg:grid-cols-3 md:lg:grid-cols-2 grid-cols-1 gap-3">
        <TablePerClient />
        <TablePerClient />
        <TablePerClient />
      </div>
    </div>
  );
}
