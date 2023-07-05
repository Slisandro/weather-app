import Home from '@/layouts/home';
import { useStore } from '@/store/store';
import axios from 'axios';

const fetchForecast = async () => {
  try {
    const r = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${"aff7b0e933df40b6a23215651230207"}&q=${"Buenos Aires"}&days=6&aqi=no&alerts=no`);
    return r.data;
  } catch (e) {
    return null;
  }
}

export default async function App() {
  const forecast = await fetchForecast();

  return (
    <main className="flex h-screen w-screen items-center justify-between">
      <Home forecast={forecast} />
    </main>
  )
}