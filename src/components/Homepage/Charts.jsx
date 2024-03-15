import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import '../../assets/css/Charts.css';

const revenueData = [
  {
    label: "Jan",
    revenue: 64854,
    cost: 32652,
  },
  {
    label: "Feb",
    revenue: 54628,
    cost: 42393,
  },
  {
    label: "Mar",
    revenue: 117238,
    cost: 50262,
  },
  {
    label: "Apr",
    revenue: 82830,
    cost: 64731
  },
  {
    label: "May",
    revenue: 91208,
    cost: 41893
  },
  {
    label: "Jun",
    revenue: 103609,
    cost: 83809
  },
  {
    label: "Jul",
    revenue: 90974,
    cost: 44772
  },
  {
    label: "Aug",
    revenue: 82919,
    cost: 37590
  },
  {
    label: "Sep",
    revenue: 62407,
    cost: 43349
  },
  {
    label: "Oct",
    revenue: 82528,
    cost: 45324
  },
  {
    label: "Nov",
    revenue: 56979,
    cost: 47978
  },
  {
    label: "Dec",
    revenue: 87436,
    cost: 39175
  }
];

const sourceData = [
  {
    label: "Mon",
    value: 36500,
  },
  {
    label: "Tue",
    value: 38945,
  },
  {
    label: "Wed",
    value: 29345,
  },
  {
    label: "Thu",
    value: 23245,
  },
  {
    label: "Fri",
    value: 24945,
  },
  {
    label: "Sat",
    value: 28945,
  },
  {
    label: "Sun",
    value: 18945,
  },

 
];

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

 const Charts = () => {
  return (
    <div className="Chartm">
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.16,
              },
            },
            plugins: {
              title: {
                text: "Avg. rides Per Week",
              },
            },
          }}
        />
      </div>

      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Rides Revenue/Day",
              },
            },
          }}
        />
      </div>
    </div>
  );
};
export default Charts;