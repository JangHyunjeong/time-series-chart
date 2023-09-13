# Time Series Chart

- [Chart.js](https://www.chartjs.org/) 를 사용하여 데이터를 시각적으로 구현했습니다.
- 차트 구현에 Chart.js 선택 이유
   - 다양한 SVG구성요소로 만들어지는 타 차트 라이브러리와 달리, Chart.js의 경우 Canvas로 최종 랜더링 된다. 성능적인 측면에서 많은 양의 데이터를 시각화 하는 Chart 작업에는 더욱 적합할 것이라고 판단했다. 이러한 이유로 Chart.js 를 이용해 차트를 구현해 보았다.

## 배포 주소

- https://time-series-chart-one.vercel.app/

## 사용 기술

- 언어 : TypeScript
- 프레임워크 : React.js
- 차트 : [Chart.js](https://www.chartjs.org/)
- 통신 : Axios
- 스타일링 : Styled-components
- 배포 : Vercel
 
## 상세 기능 설명

1. data(시간, 지역명, Area데이터, Bar데이터 로 구성)를 받아와, 시간 순서에 따라 데이터를 노출해줍니다.
   - x축: 시간 , 왼쪽 y축 : area 데이터, 오른쪽 y축: bar 데이터 를 기준으로 출력해줍니다. 
   - Area / Bar 형태의 Multi Chart 를 구성했습니다.
   - ![image](https://github.com/JangHyunjeong/time-series-chart/assets/85441226/7f096f99-dd67-453b-b08a-8bb1867936a3)
 
 2. 호버 기능 구현
   - 데이터의 값을 쉽게 확인하기 위해, 호버시 Tooltip에 지역명, Area 데이터 값, Bar 데이터 값을 노출합니다.
   ![호버](https://github.com/JangHyunjeong/time-series-chart/assets/85441226/dcbbec0e-d7af-460c-9e3d-48d0f1a8f024)\

3. 필터링 기능 구현
   - 특정 지역의 데이터를 확인하기 쉽게, 상단 filter 기능을 사용하 원하는 데이터를 하이라이팅 하여 볼 수 있습니다.
   ![필터](https://github.com/JangHyunjeong/time-series-chart/assets/85441226/5533bb9e-1df0-4bba-a35c-0204571ba5ad)

 

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

## 프로젝트 실행 방법

- 프로젝트 다운로드 후, 터미널에서 다음 명령어를 순서대로 입력하여 실행하실 수 있습니다.

```
npm install
```

```
npm run dev
```
