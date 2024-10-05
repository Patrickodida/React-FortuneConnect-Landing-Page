import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import InvestmentCard from "../components/InvestmentCard";
import NotificationsCard from "../components/NotificationsCard";
import { investments } from "../data/investment";
import { notifications } from "../data/notification";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Topbar />
      </div>
      <div className="flex flex-row h-screen">
        <Sidebar />
        <main className="content flex-1 p-4">
          {/* Investment Card */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Investment</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {investments.map((investment, index) => (
                <InvestmentCard
                  key={index}
                  name={investment.name}
                  performance={investment.performance}
                  status={investment.status}
                />
              ))}
            </div>
          </div>
          {/* Notifications Card */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Recent Notifications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {notifications.map((notification, index) => (
                <NotificationsCard
                  key={index}
                  message={notification.message}
                  date={notification.date}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
