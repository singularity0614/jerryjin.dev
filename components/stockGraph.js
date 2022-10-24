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

export default function LineGraph(props) {
  let data = props.data;
  let dataSet = data.datasets[0].data;
  let change = dataSet[dataSet.length - 1] - dataSet[0];
  let lineColour = change > 0 ? "#137333" : (change < 0 ? "#a50e0e" : "#3c4043");
  let gColour0 = change > 0 ? "rgba(19, 115, 51, 0.38)" : (change < 0 ? "rgba(165, 14, 14, 0.38)" : "rgba(60, 64, 67, 0.38)");
  
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
        borderColor: lineColour,
        fill: "start",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 150);
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

  return (
    <>
      <Line data={data} width={600} height={160} options={options}/>
    </>
  )
}