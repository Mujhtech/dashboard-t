import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import { chartTheme } from "../../chart-theme";

export default function PieChart() {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "left",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "24",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

  const [count, setCount] = useState<number>(0);

  function onChartReady(echarts: any) {
    //console.log("echarts is ready", echarts);
  }

  function onChartClick(param: any, echarts: any) {
    console.log(param, echarts);
    setCount(count + 1);
  }

  function onChartLegendselectchanged(param: any, echarts: any) {
    //console.log(param, echarts);
  }

  return (
    <div className="p-2 w-full sm:w-1/3 sm:max-w-1/3 sm:lg:max-w-1/3">
      <h1 className="text-dark-dark font-bold text-lg sm:text-xl md:text-md">
        Storage
      </h1>
      <div className="mt-12">
        <div className="flex flex-col justify-center mt-0 w-full h-full">
          <ReactECharts
            option={option}
            theme={chartTheme}
            opts={{ renderer: "svg" }}
            onChartReady={onChartReady}
            onEvents={{
              click: onChartClick,
              legendselectchanged: onChartLegendselectchanged,
            }}
          />
        </div>
      </div>
    </div>
  );
}
