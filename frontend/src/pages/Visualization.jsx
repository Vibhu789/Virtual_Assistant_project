import React from "react";

function Visualization() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-[#2c3e50] mb-6">
        Visualization Page
      </h1>

      {/* Static HTML Dataset */}
      <table className="table-auto border-collapse border border-gray-400 w-full text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Year</th>
            <th className="border border-gray-400 px-4 py-2">City</th>
            <th className="border border-gray-400 px-4 py-2">Groundwater Level (m)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">2015</td>
            <td className="border border-gray-400 px-4 py-2">Delhi</td>
            <td className="border border-gray-400 px-4 py-2">25</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">2020</td>
            <td className="border border-gray-400 px-4 py-2">Noida</td>
            <td className="border border-gray-400 px-4 py-2">30</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">2025</td>
            <td className="border border-gray-400 px-4 py-2">Greater Noida</td>
            <td className="border border-gray-400 px-4 py-2">35</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Visualization;




