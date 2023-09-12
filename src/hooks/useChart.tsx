import { useState } from "react"
import { useData } from "../context/DataContext"
import { ConvertDataType } from "../services/DataService"

export function useChart() {
  const { dataObj } = useData()
  const idList = [...new Set(dataObj.map((data: ConvertDataType) => data.id))]

  const [filterTarget, setFilterTarget] = useState<string>("")
  const filterData = (id: string) => {
    setFilterTarget(id)
  }
  const clearFilter = () => {
    setFilterTarget("")
  }

  const chartOptions = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      x: {
        title: {
          display: true,
          text: `${dataObj[0].timestamp.split(" ")[0]}일자`,
        },
      },
      "y-left": {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Area",
        },
        min: 0,
        max: 200,
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
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Chart",
      },
      tooltip: {
        intersect: false,
        callbacks: {
          beforeBody: function (TooltipItems: any) {
            const idx = TooltipItems[0].dataIndex
            const id = dataObj[idx].id
            return `id: ${id}`
          },
        },
      },
    },
  }

  const chartData = {
    labels: dataObj.map((data: ConvertDataType): string => data.timestamp.split(" ")[1]),

    datasets: [
      {
        type: "line" as const,
        label: "Area",
        yAxisID: "y-left",
        data: dataObj.map((data: ConvertDataType): number => data.value_area),
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        type: "bar" as const,
        label: "Bar",
        yAxisID: "y-right",
        data: dataObj.map((data: ConvertDataType) => data.value_bar),
        borderColor: "rgb(53, 162, 235)",
        hoverBackgroundColor: "rgb(53, 162, 235)",
        backgroundColor: dataObj.map((data: ConvertDataType) => {
          if (data.id === filterTarget) {
            return "rgb(53, 162, 235)"
          }
          return "rgba(53, 162, 235, 0.5)"
        }),
      },
    ],
  }

  return { filterData, clearFilter, chartOptions, chartData, idList }
}
