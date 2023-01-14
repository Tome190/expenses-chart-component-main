import { Chart as ChartJS,  registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import {data} from "../data"

ChartJS.register( ...registerables);

const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display:false
            },
            border: {
                display: false
            }
        },
        y: {
            grid: {
                display:false
            },
            border: {
                display:false
            },
            ticks:{
                display: false
            }    
        }
    },
    plugins: {
      legend: {
            display: false,
       },
       
    },
};

export default function Chart() {
    return(
        <Bar options={options} data={data}/>
    )
  }