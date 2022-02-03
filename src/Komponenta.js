import React from "react";
import "./Komponenta.css";

function Komponenta({ proizvod }) {
  return (
    <div className="proizvodParent">
      <div className="informacija">
        <div className="labela">Proizvodjac:</div>
        <div className="vrednost">{proizvod.imeBrenda}</div>
      </div>
      <div className="informacija">
        <div className="labela">Model:</div>
        <div className="vrednost">{proizvod.model}</div>
      </div>
      <div className="informacija">
        <div className="labela">Cena:</div>
        <div className="vrednost">{proizvod.cena}</div>
      </div>
      <button className="dodajDugme">Dodaj u korpu</button>
    </div>
  );
}

export default Komponenta;
