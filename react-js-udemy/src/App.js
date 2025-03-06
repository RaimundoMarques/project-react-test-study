import React from "react";
import Main from "./components/Main";

import ResponsiveComponent from "./components/ResponsiveComponent";

import './App.css'

export default function App(){
    return (
    <div>
      <h1 className="title-app">React Study!</h1>
      {/* retorna um componente */}
      <Main />
    </div>
  )
}
