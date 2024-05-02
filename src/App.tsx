import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 justify-center items-center bg-gradient-to-br from-blue-900 to-blue-800"> {/* Changed gradient background */}
        <div className="initial-search bg-gray-800 p-6 rounded-lg shadow-md mr-4"> {/* Styled initial search container */}
          <WeatherCard />
        </div>
        <div className="search-result bg-gray-800 p-6 rounded-lg shadow-md"> {/* Styled search result container */}
          {/* Insert content for search result here */}
        </div>
      </div>
    </div>
  );
};

export default App;
