import axios from "axios";

export default function axiosFetch (q: string) {
    return axios.create({
        baseURL: `https://api.weatherapi.com/v1/forecast.json?key=${"aff7b0e933df40b6a23215651230207"}&q=${q}&days=6&aqi=no&alerts=no`
    })
}