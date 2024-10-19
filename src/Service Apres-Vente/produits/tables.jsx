import React from 'react'
import { useSelector } from 'react-redux';

export default function Tables() {
 const allTickets = useSelector((state) => state.tickets.allTickets);
 console.log(allTickets)

  return (
    <div className='p-4 bg-gray-100'>
        <div>table 1</div>
        <div>table 2</div>
        <div>table 3</div>
        <div>table 4</div>
    </div>
  )
}
