import React from "react";
import "./Error.scss";

export default function Error() {
  return (
    <div className="errorDiv">
      <img
        className="image404"
        src={
          "https://681828296218-prod-staff.s3.eu-central-1.amazonaws.com/staff.am/images/background/404.png"
        }
        />
      <img
        className="imageRobot"
        src={
          "https://681828296218-prod-staff.s3.eu-central-1.amazonaws.com/staff.am/images/background/robby-404.png"
        }
      />
      <h1>I have looked everywhere, it`s gone</h1>
    </div>
  );
}
