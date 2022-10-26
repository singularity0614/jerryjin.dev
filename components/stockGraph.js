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
  TimeScale,
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
  TimeScale,
);

import { Line } from "react-chartjs-2";
import 'chartjs-adapter-moment';

export default function LineGraph(props) {
  let data = props.data;
  let dataSet = data.datasets[0].data;
  let change = dataSet[dataSet.length - 1].y - dataSet[0].y;
  let lineColour = change > 0 ? "#137333" : (change < 0 ? "#a50e0e" : "#3c4043");
  let gColour0 = change > 0 ? "rgba(19, 115, 51, 0.38)" : (change < 0 ? "rgba(165, 14, 14, 0.38)" : "rgba(60, 64, 67, 0.38)");
  
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: lineColour,
        fill: "start",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, gColour0);
          gradient.addColorStop(1, "rgba(244, 244, 244, 0)");
          return gradient;
        },
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
          labels: "auto",
        },
        grid: {
          display: false,
        },
        type: "time",
        time: {
          unit: "day",
          displayFormats: {
            quarter: "MMM YYYY",
          },
        },
      },
      y: {
      },
    },
  }

  return (
    <>
      <Line data={data} width={600} height={250} options={options}/>
    </>
  )
}