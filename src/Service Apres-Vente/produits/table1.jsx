import { technicienStats } from "../../API/data";

  
  export function Table1() {
    return (
      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3 border"></th>
              <th scope="col" className="px-6 py-3 border">
                Aujourd'hui
              </th>
              <th scope="col" className="px-6 py-3 border">
                Ce mois
              </th>
              <th scope="col" className="px-6 py-3 border">
                Cette année
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white border">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Nombre de tickets créés
              </th>
              <td className="px-6 py-4 border">2</td>
              <td className="px-6 py-4 border">29</td>
              <td className="px-6 py-4 border">298</td>
            </tr>
            <tr className="odd:bg-white border">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Nombre de tickets créés N-1
              </th>
              <td className="px-6 py-4 border">52</td>
              <td className="px-6 py-4 border">165</td>
              <td className="px-6 py-4 border">902</td>
            </tr>
            <tr className="odd:bg-white border">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Nombre de tickets fermés
              </th>
              <td className="px-6 py-4 border">83</td>
              <td className="px-6 py-4 border">229</td>
              <td className="px-6 py-4 border">808</td>
            </tr>
            <tr className="odd:bg-white border">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Nombre de tickets fermés N-1
              </th>
              <td className="px-6 py-4 border">24</td>
              <td className="px-6 py-4 border">53</td>
              <td className="px-6 py-4 border">353</td>
            </tr>
            <tr className="odd:bg-white border">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Durée moyenne des tickets fermés
              </th>
              <td className="px-6 py-4 border">1h28min</td>
              <td className="px-6 py-4 border">2h42min</td>
              <td className="px-6 py-4 border">1h22min</td>
            </tr>
            <tr className="odd:bg-white border">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Durée moyenne des tickets fermés N-1
              </th>
              <td className="px-6 py-4 border">2h42min</td>
              <td className="px-6 py-4 border">1h22min</td>
              <td className="px-6 py-4 border">1h42min</td>
            </tr>
            <tr className="odd:bg-white border">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Nombre de tickets en cours
              </th>
              <td className="px-6 py-4 border text-center" colSpan={3}>123</td>
             
            </tr>
            <tr className="odd:bg-white border">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Nombre de tickets en cours N-1
              </th>
              <td className="px-6 py-4 border text-center" colSpan={3}>234</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    );
  }