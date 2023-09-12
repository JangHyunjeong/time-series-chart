import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { dataImpement } from "../services/dataService"
import { useState } from "react"

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController
)

const dataService = new dataImpement()
const chartData = dataService.get()
const idLabel = [...new Set(chartData.map((item) => item.id))]

export function TimeSeriesChart() {
  const [filterdId, setFilterdeId] = useState("")

  const filterData = (id: string) => {
    setFilterdeId(id)
    console.info(filterdId)
  }

  const options = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "X Axis Title",
        },
      },

      "y-left": {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Area",
        },
        grid: {
          display: false,
        },
      },
      "y-right": {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "Bar",
        },
      },
    },
    plugins: {
      filler: {
        propagate: true,
      },
      // label 위치
      legend: {
        position: "bottom" as const,
      },
      // 차트 타이틀
      title: {
        display: true,
        text: "Chart",
      },
      tooltip: {
        intersect: false,
        callbacks: {
          beforeBody: function (TooltipItem: any) {
            const idx = TooltipItem[0].dataIndex
            const id = chartData[idx].id
            return `id: ${id}`
          },
        },
      },
    },
  }

  const data = {
    labels: chartData.map((item) => item.timestamp),

    datasets: [
      {
        type: "line" as const,
        label: "Area",
        yAxisID: "y-left",
        data: chartData.map((item) => item.value_area),
        fill: true,

        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        type: "bar" as const,
        label: "Bar",
        yAxisID: "y-right",
        data: chartData.map((item) => item.value_bar),
        borderColor: "rgb(53, 162, 235)",
        hoverBackgroundColor: "blue",
        backgroundColor: chartData.map((item) => {
          if (item.id === filterdId) {
            return "blue"
          }
          return "rgba(53, 162, 235, 0.5)"
        }),
      },
    ],
  }

  return (
    <>
      <ul>
        <li>
          <button type="button" onClick={() => setFilterdeId("")}>
            해제
          </button>
        </li>
        {idLabel.map((id, idx) => {
          return (
            <li key={idx}>
              <button type="button" onClick={() => filterData(id)}>
                {id}
              </button>
            </li>
          )
        })}
      </ul>
      <Line options={options} data={data} />
    </>
  )
}
