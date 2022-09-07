import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import { chartTheme } from "../../chart-theme";

type Props = {
  name: any;
  datas: any;
};

export default function PieChart({ name, datas }: Props) {
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
        name: name,
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
        data: datas,
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
  );
}
