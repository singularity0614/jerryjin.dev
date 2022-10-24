import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
);

import { Line } from "react-chartjs-2";

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltips: {
      
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: "#137333",
      fill: "start",
      backgroundColor: "rgba(232, 244, 235, 0.3)",
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },    
  },
  scales: {
    x: {
      ticks: {
        fontColor: "rgba(255,255,255,.7)",
      },
      scaleLabel: {
        display: true,
        labelString: "Month",
        fontColor: "white",
      },
      grid: {
        display: false,
      },
    },
    y: {
    },
  },
}

export default function LineGraph(props) {
  return (
    <>
      <Line data={props.data} width={600} height={160} options={options}/>
    </>
  )
}