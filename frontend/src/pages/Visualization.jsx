
import React from "react";
import GroundwaterTable from "../GroundwaterTable"; 

function Visualization() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-[#2c3e50] mb-6">
        Visualization Page
      </h1>

      {/* Groundwater Dataset Table */}
      <GroundwaterTable />
    </div>
  );
}

export default Visualization;


