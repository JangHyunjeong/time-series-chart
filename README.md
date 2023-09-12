# Time Series Chart

- [chart.js](https://www.chartjs.org/) 를 사용하여 시계열 차트를 구현했습니다.

## 배포 주소

- https://time-series-chart-one.vercel.app/

## 사용 기술

- 언어 : TypeScript
- 프레임워크 : React.js
- 차트 : [chart.js](https://www.chartjs.org/)
- 통신 : Axios
- 스타일링 : Styled-components
- 배포 : Vercel

## 디렉토리 구조

```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📜TimeSeriesChart.tsx
 ┃ ┗ 📜TimeSeriseChart.styled.ts
 ┣ 📂context
 ┃ ┗ 📜DataContext.tsx
 ┣ 📂data
 ┃ ┗ 📜mock_data.json
 ┣ 📂hooks
 ┃ ┗ 📜useChart.tsx
 ┣ 📂services
 ┃ ┗ 📜DataService.ts
 ┣ 📂styles
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📜DefaultTheme.ts
 ┃ ┃ ┣ 📜GlobalStyles.ts
 ┃ ┃ ┗ 📜styled.d.ts
 ┃ ┗ 📂constants
 ┃ ┃ ┣ 📜colors.ts
 ┃ ┃ ┗ 📜fontSizes.ts
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

## 상세 기능 설명

1. 특정 지역의 data를 받아와, 시간을 기반으로 데이터를 노출해줍니다.

   - Area / Bar 형태의 Multi Chart 를 구성했습니다.

2. 호버시 Tooltip에 지역명, Area 데이터 값, Bar 데이터 값을 노출합니다.

3. 상단 filter 기능을 사용해, 특정 지역의 데이터만 하이라이팅 하여 볼 수 있습니다.

## 프로젝트 실행 방법

- 프로젝트 다운로드 후, 터미널에서 다음 명령어를 순서대로 입력하여 실행하실 수 있습니다.

```
npm install
```

```
npm run dev
```
