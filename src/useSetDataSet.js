import { useEffect, useState } from "react";

const useSetDataSet = (countryDataSet) => {
  const [dataSet, setDataSet] = useState([["Region", "Data Usage"]]);
  useEffect(() => {
    countryDataSet.map((country) => {
      let arr = dataSet;
      dataSet.push([country.country, country.dataUsage]);
      return setDataSet(arr);
    });
  }, [countryDataSet, dataSet]);

  return dataSet;
};

export default useSetDataSet;
