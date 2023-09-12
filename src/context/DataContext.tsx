import { createContext, useContext, PropsWithChildren } from "react"
import { DataServiceImpliment } from "../services/DataService"

interface DataContextType {
  dataService: DataServiceImpliment
}

const DataContext = createContext(null)
export const useData = () => useContext(DataContext)

export function DataProvider({ children, dataService }: PropsWithChildren<DataContextType>) {
  const dataObj = dataService.convertData()

  return <DataContext.Provider value={{ dataObj }}>{children}</DataContext.Provider>
}
