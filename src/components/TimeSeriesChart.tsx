import { Line } from "react-chartjs-2"
import { useChart } from "../hooks/useChart"
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

export function TimeSeriesChart() {
  const { filterData, clearFilter, chartOptions, chartData, idList } = useChart()

  return (
    <>
      <ul>
        <li>
          <button type="button" onClick={() => clearFilter()}>
            해제
          </button>
        </li>
        {idList.map((id, idx) => {
          return (
            <li key={idx}>
              <button type="button" onClick={() => filterData(id)}>
                {id}
              </button>
            </li>
          )
        })}
      </ul>

      <Line options={chartOptions} data={chartData} />
    </>
  )
}
