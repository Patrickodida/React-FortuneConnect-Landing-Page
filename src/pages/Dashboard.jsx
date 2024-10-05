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
      <div className="flex flex-col md:flex-row md:h-screen">
        <Sidebar />
        <main className="content flex-1 p-4 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-4xl mx-auto">
          {/* Investment Card */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Investment</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {investments.map((investment, index) => (
                <InvestmentCard
                  key={index}
                  name={investment.name}
                  performance={investment.performance}
                  status={investment.status}
                  bgColor={investment.bgColor}
                />
              ))}
            </div>
          </div>
          {/* Notifications Card */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Recent Notifications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {notifications.map((notification, index) => (
                <NotificationsCard
                  key={index}
                  message={notification.message}
                  date={notification.date}
                  bgColor={notification.bgColor}
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
