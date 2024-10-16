import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterDay,
  setFilterStatus,
  setFilterTechnician,
  setFilterToday,
  setFilterYear,
  setFilterYearMonth,
  setTickets,
} from "../Redux/slices/TicketSlice";

export default function Header() {
  const dispatch = useDispatch();
  const [yearsList, setYearsList] = useState([]);
  // const [year, setYear] = useState("");

  const tickets = useSelector((state) => state.tickets.Tickets);
  const filterByYearMonth = useSelector(
    (state) => state.tickets.filterByYearMonth
  );
  console.log("filterByYearMonth", filterByYearMonth);

  const HadndleFilterbyStatus = (e) => {
    dispatch(setFilterStatus(e.target.value));
    console.log(e.target.value);
  };

  const HadndleFilterbyTechnician = (e) => {
    dispatch(setFilterTechnician(e.target.value));
  };

  const HadndlFilterbyYear = (e) => {
    // setYear(e.target.value);
    dispatch(setFilterYear(e.target.value));
    // console.log(year.substring(0, 4));
  };

  const HadndlFilterbyDay = (e) => {
    // setYear(e.target.value);
    dispatch(setFilterDay(e.target.value));
    console.log(e.target.value);
  };

  const handleFilterByMonth = (e) => {
    const date = new Date(e.target.value);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    console.log(year, month);
    console.log(new Date().toLocaleDateString("en-CA").substring(0, 7));
    dispatch(setFilterYearMonth({ year, month }));
  };

  /////// constant functions //////////
  useEffect(() => {
    const GenerateYearsList = (
      startYear = 2010,
      endYear = new Date().toISOString().substring(0, 4)
    ) => {
      let years = [];
      setYearsList(years);
      let e = startYear;
      for (e; e <= endYear; e++) {
        years.push(e);
      }
    };
    GenerateYearsList();
  }, []);

  const removeDuplicates = (array) => {
    return [...new Set(array)];
  };

  const uniqueStatuses = removeDuplicates(tickets.map((item) => item.statut));
  const uniqueTechnicians = removeDuplicates(
    tickets.map((item) => item.technicien)
  );

  return (
    <div className="bg-green-100 p-4 flex flex-wrap justify-center items-center">
      <div
        onClick={() => dispatch(setTickets())}
        className="bg-green-600 px-4 py-1 rounded text-white m-3 cursor-pointer hover:bg-green-700 transition-all duration-500"
      >
        defaulte
      </div>
      <div
        onClick={() => dispatch(setFilterToday())}
        className="bg-green-600 px-4 py-1 rounded  text-white m-3 cursor-pointer hover:bg-green-700 transition-all duration-500"
      >
        aujourd'hui
      </div>

      <div className="bg-green-600 px-4 py-1 rounded text-white m-3 hover:bg-green-700 transition-all duration-500">
        <span className=" border-r-2 px-2 mr-2">select par jour</span>
        <input
          className="bg-green-600 cursor-pointer rounded hover:bg-green-700 transition-all duration-500"
          type="date"
          name="day"
          onChange={HadndlFilterbyDay}
        />
      </div>

      <div className="bg-green-600 px-4 py-1 rounded text-white m-3 hover:bg-green-700 transition-all duration-500">
        <span className=" border-r-2 px-2 mr-2">select par moins</span>
        <input
          className="bg-green-600 rounded text-white cursor-pointer hover:bg-green-700 transition-all duration-500"
          type="date"
          name="month"
          onChange={handleFilterByMonth}
        />
      </div>

      <div>
        <select
          onChange={HadndlFilterbyYear}
          className="bg-green-600 px-4 py-1 rounded text-white m-3 cursor-pointer hover:bg-green-700 transition-all duration-500 outline-green-400 outline-offset-2"
          name="year"
          id="year"
        >
          <option value="">select par années</option>
          {yearsList.map((item) => {
            return (
              <>
                <option value={item}>{item}</option>
              </>
            );
          })}
        </select>
      </div>
      <div>
        <select
          onChange={HadndleFilterbyStatus}
          className="bg-green-600 px-4 py-1 rounded text-white m-3 cursor-pointer hover:bg-green-700 transition-all duration-500 outline-green-400 outline-offset-2"
          name="statut"
          id="statut"
        >
          <option value="">select par statut</option>
          {uniqueStatuses.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          onChange={HadndleFilterbyTechnician}
          className="bg-green-600 px-4 py-1 rounded text-white mr-2 cursor-pointer hover:bg-green-700 transition-all duration-500 outline-green-400 outline-offset-2"
          name="technicien"
          id="technicien"
        >
          <option value="">select par technicien</option>
          {uniqueTechnicians.map((technician, index) => (
            <option key={index} value={technician}>
              {technician}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
