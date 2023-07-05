import axios from "axios";

export const fetchData = async (q: string) => {
  try {
    const r = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${"aff7b0e933df40b6a23215651230207"}&q=${q}&days=6&aqi=no&alerts=no`);
    return r.data;
  } catch (e) {
    return null;
  }
}