import React from "react";
import DisplayLeft from "../components/DisplayLeft";
import DisplayRight from "../components/DisplayRight";

function MainDisplay() {
  return (
    <section className="main-display">
      <div className="container-fluid">
        <div className="row DisplayCont">
          <DisplayLeft />
          <DisplayRight />
        </div>
      </div>
    </section>
  );
}

export default MainDisplay;
