import React from "react";

import ReactECharts from "echarts-for-react";
import { chartTheme } from "../../chart-theme";
import * as echarts from "echarts";

type Props = {
  name: string;
  datas: any;
};

export default function Graph({ name, datas }: Props) {
  let option = {
    // title: {
    //   left: "center",
    //   text: "Tootip and dataZoom on Mobile Device",
    // },
    legend: {
      top: "bottom",
      data: ["Intention"],
    },
    // tooltip: {
    //   triggerOn: "none",
    //   position: function (pt: any) {
    //     return [pt[0], 130];
    //   },
    // },
    // toolbox: {
    //   left: "center",
    //   itemSize: 25,
    //   top: 55,
    //   feature: {
    //     dataZoom: {
    //       yAxisIndex: "none",
    //     },
    //     restore: {},
    //   },
    // },
    xAxis: {
      type: "time",
      axisPointer: {
        value: "2016-10-7",
        snap: true,
        lineStyle: {
          color: "#FF5403",
          width: 2,
        },
        label: {
          show: true,
          formatter: function (params: any) {
            return echarts.format.formatTime("yyyy-MM-dd", params.value);
          },
          backgroundColor: "#FF5403",
        },
        handle: {
          show: true,
          color: "#FF5403",
        },
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        inside: true,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        inside: true,
        formatter: "{value}\n",
      },
      z: 10,
    },
    grid: {
      top: 110,
      left: 15,
      right: 15,
      height: 160,
    },
    // dataZoom: [
    //   {
    //     type: "inside",
    //     throttle: 50,
    //   },
    // ],
    series: [
      {
        name: name,
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        sampling: "average",
        itemStyle: {
          color: "#FF5403",
        },
        stack: "a",
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(255, 84, 3, 0.2)",
            },
            {
              offset: 1,
              color: "rgba(255, 84, 3, 0)",
            },
          ]),
        },
        data: datas,
      },
    ],
  };

  return (
    <ReactECharts
      theme={chartTheme}
      option={option}
      opts={{ renderer: "svg" }}
    />
  );
}
