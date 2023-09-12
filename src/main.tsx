import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { DataServiceImpliment } from "./services/DataService.ts"
import { DataProvider } from "./context/DataContext.tsx"

// bootStraping
const dataService = new DataServiceImpliment()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider dataService={dataService}>
      <App />
    </DataProvider>
  </React.StrictMode>
)
