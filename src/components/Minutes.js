import React from "react";

function Minutes({ minutes }) {
  if (minutes < 30) {
    const numCups = Math.ceil(minutes / 5);
    let cupsStr = "";
    for (let i = 0; i < numCups; i++) {
      cupsStr += ("☕️");
    }
    return (
      <span>{cupsStr} {minutes} min read</span>
    )
  }
  else {
    const numBento = Math.ceil(minutes / 10);
    let bentoStr = "";
    for (let i = 0; i < numBento; i++) {
      bentoStr += "🍱";
    }
    return (
      <span>{bentoStr} {minutes} min read</span>
    )
  }
}

export default Minutes;