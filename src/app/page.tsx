import Home from '@/layouts/home';
import axios from 'axios';

const fetchForecast = async () => {
  try {
    const r = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=aff7b0e933df40b6a23215651230207&q=Buenos Aires&days=6&aqi=no&alerts=no`);
    return r.data;
  } catch (e) {
    return null;
  }
}

export default async function App() {
  const forecast = await fetchForecast();

  return (
    <main className="flex h-screen w-screen items-center justify-between max-w-[100vw] lg:max-w-[98vw] max-h-[max-content] lg:max-h-[100vh]">
      <Home forecast={forecast} />
    </main>
  )
}