import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider className="h-screen flex justify-center items-center"> {/* Center content vertically and horizontally */}
      <div className="font-sans text-xl text-gray-800 bg-gray-100 p-8 rounded-lg shadow-md"> {/* Styled container */}
        <App />
      </div>
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
