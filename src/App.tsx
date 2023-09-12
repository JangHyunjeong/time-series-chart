import { TimeSeriesChart } from "./components/TimeSeriesChart"
import GlobalStyles from "./styles/base/GlobalStyles"
import styled from "styled-components"

function App() {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <MainTitle>Chart</MainTitle>
        <TimeSeriesChart />
      </MainLayout>
    </>
  )
}
export default App

const MainLayout = styled.div`
  width: calc(100% - 40px);
  max-width: 1600px;
  margin: 0 auto;
  padding-bottom: 100px;
`

const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  padding: 60px 0;
`
