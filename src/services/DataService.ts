import mockData from "../data/mock_data.json"

export interface DataServiceType<T> {
  convertData(): T
}
export interface ConvertDataType {
  timestamp: string
  id: string
  value_area: number
  value_bar: number
}

export class DataServiceImpliment implements DataServiceType<ConvertDataType[]> {
  convertData() {
    const data = Object.entries(mockData.response).map(([key, { id, value_area, value_bar }]) => ({
      timestamp: key,
      id: id,
      value_area: value_area,
      value_bar: value_bar,
    }))
    return data
  }
}
