import React from "react";
import Komponenta from "./Komponenta";
import "./GrupaKomponenata.css";

function GrupaKomponenti({ kategorija, dodajUKorpu, korpa }) {
  return (
    <div className="grupaKomponenti">
      <div className="nazivGrupe">{kategorija.nazivGrupe}</div>
      <div className="spisakProizvodaUGrupi">
        {kategorija.proizvodi.map((proizvod) => {
          return (
            <Komponenta korpa={korpa} dodajUKorpu={dodajUKorpu} grupa={kategorija.nazivGrupe} proizvod={proizvod} />
          );
        })}
      </div>
    </div>
  );
}

export default GrupaKomponenti;
