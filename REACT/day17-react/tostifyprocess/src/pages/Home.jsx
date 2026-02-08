import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [alert, setAlert] = useState("");

  // 🌍 Live Location Weather
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      setWeather(data);
      setAlert("Live location weather loaded ✅");
    });
  }, []);

  // 🔍 Search Weather
  const searchWeather = async () => {
    if (!city) return;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await res.json();

    if (data.cod === 200) {
      setWeather(data);
      setAlert("Weather updated successfully 🌤");
    } else {
      setAlert("City not found ❌");
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600">
    <Navbar />

    {/* 🌤️ Banner */}
    <div className="text-center text-white py-10">
      <h1 className="text-4xl md:text-5xl font-bold">
        Weather Forecast 🌍
      </h1>
      <p className="mt-2 text-lg opacity-90">
        Live location & city weather updates
      </p>
    </div>

    {/* 🌦️ Main Card */}
    <div className="max-w-md mx-auto px-4">
      <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-xl p-6">

        <Alert message={alert} />

        {/* 🔍 Search */}
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Search city (Chennai...)"
            className="flex-1 px-4 py-3 rounded-l-xl border outline-none focus:ring-2 focus:ring-blue-400"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchWeather()}
          />
          <button
            onClick={searchWeather}
            className="px-6 bg-blue-600 text-white font-semibold rounded-r-xl hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {/* 🌡️ Weather Info */}
        {weather && weather.main && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {weather.name}, {weather.sys.country}
            </h2>

            <div className="text-6xl my-4">
              {weather.weather[0].main === "Clouds" && "☁️"}
              {weather.weather[0].main === "Clear" && "☀️"}
              {weather.weather[0].main === "Rain" && "🌧️"}
              {weather.weather[0].main === "Haze" && "🌫️"}
            </div>

            <p className="text-4xl font-bold text-blue-600">
              {Math.round(weather.main.temp)}°C
            </p>

            <p className="capitalize text-gray-600 mt-1">
              {weather.weather[0].description}
            </p>

            <div className="flex justify-around mt-6 text-gray-700">
              <div>
                <p className="font-semibold">💧 Humidity</p>
                <p>{weather.main.humidity}%</p>
              </div>
              <div>
                <p className="font-semibold">🌬 Wind</p>
                <p>{weather.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  </div>
);
}

export default Home;