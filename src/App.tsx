import Graph from "./components/charts/Graph";
import PieChart from "./components/charts/Piechart";
import Layout from "./components/Layout";

function App() {
  const apiData = {
    graph_data: {
      views: {
        "2022-07-31": 1,
        "2022-08-01": 3,
        "2022-08-02": 3,
        "2022-08-03": 7,
        "2022-08-04": 8,
        "2022-08-05": 5,
        "2022-08-06": 20,
        "2022-08-07": 50,
        "2022-08-08": 100,
        "2022-08-09": 2,
      },
    },
    top_locations: [
      {
        country: "Nigeria",
        count: 68,
        percent: 34,
      },
      {
        country: "Germany",
        count: 37,
        percent: 19,
      },
      {
        country: "Ghana",
        count: 50,
        percent: 25,
      },
      {
        country: "Finland",
        count: 40,
        percent: 20,
      },
      {
        country: "United Kingdom",
        count: 4,
        percent: 2,
      },
    ],
    top_sources: [
      {
        source: "google",
        count: 50,
        percent: 25,
      },
      {
        source: "instagram",
        count: 68,
        percent: 34,
      },
      {
        source: "facebook",
        count: 40,
        percent: 20,
      },
      {
        source: "linkedin",
        count: 41,
        percent: 21,
      },
    ],
  };

  function locationFilter(l: any) {
    return { name: l.country, value: l.percent };
  }

  function sourceFilter(l: any) {
    return { name: l.source, value: l.percent };
  }

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
            <Graph
              name="Page views"
              datas={Object.entries(apiData.graph_data.views)}
            />
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
              <PieChart
                name="Top Locations"
                datas={apiData.top_locations.map(locationFilter)}
              />
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
              <PieChart
                name="Top Referral source"
                datas={apiData.top_sources.map(sourceFilter)}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
