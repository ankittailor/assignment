import { useState } from "react";
import Chart from "react-google-charts";
import "./App.css";
import ModalInfo from "./components/ModalInfo";
import { countryData } from "./Data";
import useSetDataSet from "./useSetDataSet";

function App() {
  const dataSet = useSetDataSet(countryData);
  const [isCountrySelected, setIsCountrySelected] = useState(false);
  const [countryName, setCountryName] = useState(null);
  const [countryDataUsage, setcountryDataUsage] = useState(null);
  // console.log(dataSet);

  const handelClick = [
    {
      eventName: "select",
      callback: ({ chartWrapper }) => {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        if (selection.length === 0) return;
        const region = dataSet[selection[0].row + 1];
        setIsCountrySelected(true);
        setCountryName(region[0]);
        setcountryDataUsage(region[1]);
      },
    },
  ];
  return (
    <div className="App">
      <h1>Data Usage of regions</h1>
      {isCountrySelected && (
        <ModalInfo
          countryName={countryName}
          countryDataUsage={countryDataUsage}
          setIsCountrySelected={setIsCountrySelected}
        />
      )}
      <Chart
        chartEvents={handelClick}
        style={{ width: "100%", height: "80vh", cursor: "pointer" }}
        width={"100%"}
        height={"300px"}
        chartType="GeoChart"
        data={dataSet}
        options={{
          displayMode: "auto",
          minValue: 0,
          colors: [
            "#c0fefc",
            "#3edbf0",
            "#1B98F5",
            "#207398",
            "#04009a",
            "#120E43",
            "#03203C",
          ],
        }}
        mapsApiKey="AIzaSyCT5TXiTMRVyQ-XW3tsm6N6oC4VTpsPWyo"
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

export default App;
