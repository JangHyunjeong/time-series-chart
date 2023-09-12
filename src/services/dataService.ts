import data from "../data/mock_data.json"

export class dataImpement {
  get() {
    return Object.entries(data.response).map(([key, { id, value_area, value_bar }]) => ({
      timestamp: key,
      id: id,
      value_area: value_area,
      value_bar: value_bar,
    }))
  }
}
