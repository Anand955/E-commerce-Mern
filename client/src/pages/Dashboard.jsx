import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Orders */}
        <div className="p-5 bg-white rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Orders</p>
            <p className="text-xl font-semibold text-gray-800">1,250</p>
          </div>
          <div className="text-blue-500 bg-blue-100 p-3 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h18v18H3z" />
            </svg>
          </div>
        </div>

        {/* Products */}
        <div className="p-5 bg-white rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Products</p>
            <p className="text-xl font-semibold text-gray-800">340</p>
          </div>
          <div className="text-green-500 bg-green-100 p-3 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 8v4l3 3" />
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
          </div>
        </div>

        {/* Revenue */}
        <div className="p-5 bg-white rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Revenue</p>
            <p className="text-xl font-semibold text-gray-800">$12,400</p>
          </div>
          <div className="text-yellow-500 bg-yellow-100 p-3 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 8v8m0 0H8m4 0h4" />
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
          </div>
        </div>

        {/* Users */}
        <div className="p-5 bg-white rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Users</p>
            <p className="text-xl font-semibold text-gray-800">875</p>
          </div>
          <div className="text-purple-500 bg-purple-100 p-3 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17 20h5V4H2v16h5" />
              <path d="M12 16v-4m0 0V8m0 4h4m-4 0H8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
