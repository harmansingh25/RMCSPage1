import React from "react";

const kingqueen = require("/images/kingQueen.jpeg");

function DisplayLeft() {
  return (
    <div className="leftDisplay col-md-6">
      <img src={kingqueen} className="kingQueen" alt="king-queen" />
      <p className="MainLine1">Raja, Mantri, Chor, Sipahi</p>
      <p className="MainLine2">Let's relive our childhood</p>
    </div>
  );
}

export default DisplayLeft;
