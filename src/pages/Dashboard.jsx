import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import InvestmentCard from "../components/InvestmentCard";

const Dashboard = () => {

    const investments = [
    { name: "Tech Fund", performance: 8.2, status: "Active" },
    { name: "Green Energy", performance: -3.1, status: "Inactive" },
  ];

  const notifications = [
    { message: "New investment in Tech Fund", date: "2024-10-01" },
    { message: "Dividend paid for Green Energy", date: "2024-09-28" },
  ];

  return (
    <div>
      <div>
        <Topbar />
      </div>
      <div className="flex flex-row h-screen">
        <Sidebar />
        <main className="content flex-1 p-4">
            {/* Investment Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {investments.map((investment, index)=>(
                    <InvestmentCard 
                    key={index}
                    name={investment.name}
                    performance= {investment.performance}
                    status= {investment.status}
                    />
                ))}
            </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
