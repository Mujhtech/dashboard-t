import React from "react";

import ReactECharts from "echarts-for-react";
import { chartTheme } from "../../chart-theme";
import * as echarts from "echarts";

type Props = {
  options: any;
};

export default function Graph({ options }: Props) {
  let base = +new Date(2016, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let valueBase = Math.random() * 300;
  let valueBase2 = Math.random() * 50;
  let data = [];
  let data2 = [];

  for (var i = 1; i < 10; i++) {
    var now = new Date((base += oneDay));
    var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join(
      "-"
    );

    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);

    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push([dayStr, valueBase2]);
  }

  let option = {
    // title: {
    //   left: "center",
    //   text: "Tootip and dataZoom on Mobile Device",
    // },
    legend: {
      top: "bottom",
      data: ["Intention"],
    },
    tooltip: {
      triggerOn: "none",
      position: function (pt: any) {
        return [pt[0], 130];
      },
    },
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
        name: "Fake Data",
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
        data: data,
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
