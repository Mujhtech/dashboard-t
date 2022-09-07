import axios from "axios";
import React, { useEffect, useState } from "react";
import Graph from "./components/charts/Graph";
import PieChart from "./components/charts/Piechart";
import Layout from "./components/Layout";

function App() {
  const [analytics, setAnalytics] = useState({
    total_checkedin: 0,
    total_event: 0,
    total_member: 0,
    total_rsvp: 0,
    events: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    members: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    tickets: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    checkedins: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
  let options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    legend: {
      data: ["Members", "Events", "RSVPs", "Checked-ins"],
    },
    xAxis: {
      type: "category",
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Members",
        data: analytics.members,
        type: "line",
        smooth: true,
      },
      {
        name: "Events",
        data: analytics.events,
        type: "line",
        smooth: true,
      },
      {
        name: "RSVPs",
        data: analytics.tickets,
        type: "line",
        smooth: true,
      },
      {
        name: "Checked-ins",
        data: analytics.checkedins,
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      let res = await axios.get("http://test.api.mainstack.io/");
      console.log(res);
      setData(res.data);
    } catch (e) {
      //
    }
  };

  useEffect(() => {
    if (data == null) {
      fetchData();
    }
  }, []);

  return (
    <Layout>
      <div className="px-4 sm:px-6  py-4 lg:py-6 bg-transparent bg-opacity-10">
        <h1 className="font-semibold">Dashboard</h1>
      </div>
      <div className="px-4 sm:px-6 flex-1 overflow-y-auto">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">
              Good morning, Blessing ⛅️
            </h1>
            <p className="text-sm font-normal">
              Check out your dashboard summary.
            </p>
          </div>
          <a href="#" className="text-primary text-sm">
            View analytics
          </a>
        </div>
        <div className="mt-4 flex flex-row space-x-3">
          <button className="border border-gray-400 border-opacity-0 bg-white px-3 py-2 rounded-full">
            1 Day
          </button>
          <button className="border border-gray-400 border-opacity-0 bg-white px-3 py-2 rounded-full">
            2 Days
          </button>
          <button className="border border-gray-400 border-opacity-0 bg-white px-3 py-2 rounded-full">
            7 Days
          </button>
          <button className="border border-gray-400 border-opacity-0 bg-white px-3 py-2 rounded-full">
            30 Days
          </button>
          <button className="border border-primary text-primary bg-orange px-3 py-2 rounded-full">
            All time
          </button>
          <button className="border border-gray-400 border-opacity-0 bg-white px-3 py-2 rounded-full">
            Custom Date
          </button>
        </div>
        <div className="mt-7 border border-gray-400 border-opacity-0 p-4 rounded-md flex flex-col">
          <div className="mb-8 flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <h1 className="font-semibold">Page views</h1>
              <p className="text-sm font-normal">All time</p>
            </div>

            <img src="info.svg" width={15} height={15} alt="Info" />
          </div>
          <h1 className="font-bold text-4xl">500</h1>
          <div className="my-4">
            <Graph options={options} />
          </div>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-md font-semibold">Top Locations</h1>
              <a href="#" className="text-primary text-sm">
                View full reports
              </a>
            </div>
            <div className="w-full">
              <PieChart />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-md font-semibold">Top Referral source</h1>
              <a href="#" className="text-primary text-sm">
                View full reports
              </a>
            </div>
            <div className="w-full">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
