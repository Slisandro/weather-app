// export const getCurrentPosition = async () => {
//   const a = navigator.geolocation.getCurrentPosition()
//   const response = navigator.geolocation.getCurrentPosition(
//     (position: any) => `${position.coords.latitude},${position.coords.longitude}`,
//     (error) => console.log({ error })
//   );

//   console.log({response})
// }

export const getCurrentPosition = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (coords) => resolve(`${coords.coords.latitude},${coords.coords.longitude}`)
    ),
    () => reject(null)
  })
}

export const fetchData = async (position: string) => fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.APIKEY}&q=${position}&days=6&aqi=no&alerts=no`)
  .then(r => r.json())
  .catch(e => null);