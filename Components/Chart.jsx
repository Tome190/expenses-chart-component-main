import { Chart as ChartJS,  registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import json from "../src/data.json"

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

const data = {
    labels : json.map(item=> item.day),
    datasets: [{
        data: json.map(item=> item.amount),
        backgroundColor: [
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(186, 34%, 60%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        ],
        borderWidth : 1,
        borderRadius: 5,
        color: "hsl(212, 10%, 50%)",
    }],
}

export default function Chart() {
    return(
        <Bar options={options} data={data}/>
        
    )
  }