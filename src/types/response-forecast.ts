export default interface ResponseForecast {
    forecast: {
        date: string,
        forecastday: {
            date: string,
            day: {
                maxtemp_c: number,
                mintemp_c: number,
                maxtemp_f: number,
                mintemp_f: number,
                condition: {
                    icon: string
                }
            }
        }[]
    },
    location: { name: string, country: string, lon: string, lat: string },
    current: {
        pressure_mb: string,
        vis_miles: string,
        humidity: string,
        temp_c: number,
        temp_f: number,
        last_updated: string,
        wind_mph: string,
        wind_dir: string,
        condition: {
            icon: string,
            text: string
        }
    }
}