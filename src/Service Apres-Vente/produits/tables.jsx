import React from "react";
import { useSelector } from "react-redux";
import Graphic from "../tickets/graphic";
import { Table1, TechnicienDataTabe } from "./table1";
import { TablePerClient1, TablePerClient2, TablePerClient3 } from "./table3";
import { HighCountersTable, InterventionsTable, PendingTicketsTable } from "./table4";

export default function Tables() {
  const clients = useSelector((state) => state.tickets.clients);
  const tickets = useSelector((state) => state.tickets.allTickets);
  const today = new Date().toISOString().substring(0, 10);
  const currentYear = new Date().toISOString().substring(0, 4);

  console.log(clients);
  console.log(tickets);
  console.log(currentYear);

  return (
    <div className="p-4 ">
      {/* table1 */}
      <div className=" border-b-2 border-blue-200 pb-4 mb-6">
        <Table1 />
      </div>
      {/* table2 */}
      <div className="border-b-2 border-blue-200 pb-4 mb-6">
        <TechnicienDataTabe />
      </div>
      {/* table 3 */}
      <div className="grid lg:grid-cols-2 xl:lg:grid-cols-2 md:lg:grid-cols-2 grid-cols-1 gap-3 border-b-2 border-blue-200 pb-4 mb-6">
        <TablePerClient1 />
        <Graphic />
        <TablePerClient2 />
        <Graphic />
        <TablePerClient3 />
        <Graphic />
      </div>
      <div className="border-b-2 border-blue-200 pb-4 mb-6">
        <InterventionsTable/>
        <HighCountersTable/>
        <PendingTicketsTable/>
      </div>
    </div>
  );
}
