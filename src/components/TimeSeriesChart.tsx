import { Line } from "react-chartjs-2"
import { useChart } from "../hooks/useChart"
import * as S from "./TimeSeriseChart.styled"
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
  const { filterTarget, filterData, clearFilter, chartOptions, chartData, idList } = useChart()

  return (
    <>
      <S.IdUl>
        <li>
          <S.IdButton type="button" onClick={() => clearFilter()}>
            해제
          </S.IdButton>
        </li>
        {idList.map((id: string, idx: number) => {
          return (
            <li key={idx}>
              <S.IdButton
                type="button"
                onClick={() => filterData(id)}
                $isChecked={filterTarget === id}
              >
                {id}
              </S.IdButton>
            </li>
          )
        })}
      </S.IdUl>

      <Line options={chartOptions} data={chartData} />
    </>
  )
}
