import { useEffect, useState } from "react";

const useSetDataSet = (countryDataSet) => {
  const [dataSet, setDataSet] = useState();
  useEffect(() => {
    let arr = [["Region", "Data Usage"]];
    countryDataSet.map((country) =>
      arr.push([country.country, country.dataUsage])
    );
    setDataSet(arr);
  }, [countryDataSet]);

  return dataSet;
};

export default useSetDataSet;
