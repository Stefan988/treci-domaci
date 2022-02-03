import React, { useEffect, useState } from "react";
import "./Komponenta.css";

function Komponenta({ proizvod, dodajUKorpu, grupa, korpa }) {
  const [uKorpi, setUKorpi] = useState(false);

  useEffect(() => {
    setUKorpi(korpa[grupa]?.id == proizvod.id);
  }, [korpa]);

  return (
    <div className={`proizvodParent ${uKorpi && "dodatUKorpu"}`}>
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
        <div className="vrednost">{proizvod.cena} RSD</div>
      </div>
      <button
        onClick={() => {
          dodajUKorpu(grupa, proizvod);
        }}
        className="dodajDugme">
        Odaberi
      </button>
    </div>
  );
}

export default Komponenta;
