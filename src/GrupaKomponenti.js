import React from "react";
import Komponenta from "./Komponenta";
import './GrupaKomponenata.css'

function GrupaKomponenti({ kategorija }) {
  return (
    <div className="grupaKomponenti">
      <div className="nazivGrupe">{kategorija.nazivGrupe}</div>
      <div className="spisakProizvodaUGrupi">
        {kategorija.proizvodi.map((proizvod) => (
          <Komponenta proizvod={proizvod} />
        ))}
      </div>
    </div>
  );
}

export default GrupaKomponenti;
