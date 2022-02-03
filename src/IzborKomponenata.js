import React from "react";

import spisakKomponenata from "./spisakKomponenata";
import GrupaKomponenti from "./GrupaKomponenti";
import "./IzborKomponenata.css";
import { Link } from "react-router-dom";

function IzborKomponenata({ korpa, dodajUKorpu }) {
  return (
    <div className="izborKomponenti">
      <div className="nasolov">Prodavnica racunareskse opreme</div>

      <div className="grupeKomponenti">
        {spisakKomponenata.map((kategorija) => {
          return <GrupaKomponenti korpa={korpa} dodajUKorpu={dodajUKorpu} kategorija={kategorija} />;
        })}
      </div>

      <div className="pregledDodatih">
        <div>Spisak dodatih komponenata</div>
        <div>Procesor: {korpa["Procesori"] && korpa["Procesori"]?.imeBrenda + " " + korpa["Procesori"]?.model}</div>
        <div>Memorije: {korpa["Memorije"] && korpa["Memorije"]?.imeBrenda + " " + korpa["Memorije"]?.model}</div>
        <div>
          Graficke kartice:
          {korpa["Graficke kartice"] && korpa["Graficke kartice"]?.imeBrenda + " " + korpa["Graficke kartice"]?.model}
        </div>
        <Link to="korpa" className="idiNaKorpuDugme">Pogledaj izabrane proizvode</Link>
      </div>
    </div>
  );
}

export default IzborKomponenata;
