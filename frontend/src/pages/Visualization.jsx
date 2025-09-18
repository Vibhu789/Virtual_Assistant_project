import React from "react";

function GroundwaterTable() {
  return (
    <div className="p-6 bg-[#f4f7f9] min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#2c3e50]">
        Groundwater Dataset by State
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#34495e] text-white">
              <th className="p-3 text-sm">State</th>
              <th className="p-3 text-sm">Rainfall (mm)</th>
              <th className="p-3 text-sm">Annual Extractable Ground Water (ham)</th>
              <th className="p-3 text-sm">Ground Water Extraction (ham)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-[#ecf0f1] hover:bg-[#dfe6e9]">
              <td className="p-3 text-sm text-[#2c3e50]">ANDAMAN AND NICOBAR ISLANDS</td>
              <td className="p-3 text-sm text-[#2c3e50]">2952.91</td>
              <td className="p-3 text-sm text-[#2c3e50]">34504.51</td>
              <td className="p-3 text-sm text-[#2c3e50]">782.68</td>
            </tr>
            <tr className="even:bg-[#ecf0f1] hover:bg-[#dfe6e9]">
              <td className="p-3 text-sm text-[#2c3e50]">ANDHRA PRADESH</td>
              <td className="p-3 text-sm text-[#2c3e50]">891.99</td>
              <td className="p-3 text-sm text-[#2c3e50]">2502366.50</td>
              <td className="p-3 text-sm text-[#2c3e50]">788386.79</td>
            </tr>
            <tr className="even:bg-[#ecf0f1] hover:bg-[#dfe6e9]">
              <td className="p-3 text-sm text-[#2c3e50]">ARUNACHAL PRADESH</td>
              <td className="p-3 text-sm text-[#2c3e50]">3318.78</td>
              <td className="p-3 text-sm text-[#2c3e50]">328838.35</td>
              <td className="p-3 text-sm text-[#2c3e50]">1343.76</td>
            </tr>
            {/*  Add more rows for all states */}
            <tr className="bg-gray-200 font-bold">
              <td className="p-3">TOTAL</td>
              <td className="p-3">1054.55</td>
              <td className="p-3">4073097.92</td>
              <td className="p-3">24692184.73</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GroundwaterTable;

