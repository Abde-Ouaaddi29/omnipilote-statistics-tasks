import React from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

export default function Graphic() {

  const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 6000 },
    { name: "May", sales: 7000 },
  ];
  
  return (
    <div>
      <div className="mt-8">
        <BarChart width={400} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#82ca9d" />
          <Bar dataKey="sales2" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
}
