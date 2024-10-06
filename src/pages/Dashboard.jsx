import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import InvestmentCard from "../components/InvestmentCard";
import NotificationsCard from "../components/NotificationsCard";
import PerformanceChart from "../components/PerformanceChart";
import PortfolioCard from "../components/PortfolioCard";
import { investments } from "../data/investment";
import { notifications } from "../data/notification";

const Dashboard = () => {
  // Calculate total investment portfolio value by summing all 'amountInvested'
  const totalPortfolioValue = investments.reduce((total, investment) => {
    return total + investment.amountInvested;
  }, 0);

  return (
    <div>
      <div>
        <Topbar />
      </div>
      <div className="flex flex-col md:flex-row md:h-screen pt-16">
        <Sidebar />
        <main className="mt-64 md:mt-0 md:ml-64 p-4 content flex-1 p-4 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-4xl mx-auto">
          {/* Total Investment Portfolio Card */}
          <div className="mt-8 text-center flex justify-center">
            <div className="w-full max-w-md">
            <PortfolioCard totalValue={totalPortfolioValue} />
            </div>
          </div>
          {/* Investment Card */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Investment</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {investments.map((investment, index) => (
                <InvestmentCard
                  key={index}
                  name={investment.name}
                  amountInvested={investment.amountInvested}
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
                  title={notification.title}
                  message={notification.message}
                  date={notification.date}
                  actionText={notification.actionText}
                  bgColor={notification.bgColor}
                />
              ))}
            </div>
          </div>
          {/* Performance Chart */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Investment Performance</h2>
            <PerformanceChart investments={investments} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
