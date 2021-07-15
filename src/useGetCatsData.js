import { useEffect, useState } from "react";
import normalizeCatsData from "./utils.js";

export default function useGetCatsData() {
  const [catsData, setCatsData] = useState([]);

  const getCatsData = () => {
    fetch("cats.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCatsData(normalizeCatsData(data));
      });
  };

  useEffect(() => {
    getCatsData();
  }, []);

  return catsData;
}
