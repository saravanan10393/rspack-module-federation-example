import React from "react";

import "./card.css";

export function Card({ children }) {
  return (<div className="card">
      { children }
  </div>)
}