import React from "react";
import './App.css'; 

function Bicycle({
  dataName,
  dataCnt,
  dataTotal
}) {
   console.log({dataName});
  return (
    <div className="Dust">
        <p className="ByStyle">Bikeseoul Information</p>
        Rental Station : {dataName} <br />
        RentalCnt : {dataCnt} <br />
        RentalTotal : {dataTotal} <br />
    </div>
  );
}

export default Bicycle
