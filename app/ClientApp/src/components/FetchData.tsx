import React from "react";
interface WeatherForecast {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
export const FetchData = () => {
  const [loading, setLoading] = React.useState(false);
  const [forecasts, setForecasts] = React.useState<WeatherForecast[]>([]);
  React.useEffect(() => {
    const populateWeatherData = async () => {
      const response = await fetch("weatherforecast");
      const data = (await response.json()) as WeatherForecast[];
      setLoading(false);
      setForecasts(data);
    };
    populateWeatherData();
  }, []);
  return (
    <div>
      <h1 id="tabelLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {loading ? (
        <p>
          <em>Loading...</em>
        </p>
      ) : (
        <table className="table table-striped" aria-labelledby="tabelLabel">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {forecasts.map((forecast) => (
              <tr key={forecast.date.toString()}>
                <td>{forecast.date}</td>
                <td>{forecast.temperatureC}</td>
                <td>{forecast.temperatureF}</td>
                <td>{forecast.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};