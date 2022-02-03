import React from "react";

import spisakKomponenata from "./spisakKomponenata";
import GrupaKomponenti from "./GrupaKomponenti";
import './IzborKomponenata.css'

function IzborKomponenata({korpa}) {
  return (
    <div className="izborKomponenti">
      <div className="nasolov">Prodavnica racunareskse opreme</div>

      <div className="grupeKomponenti">
        {spisakKomponenata.map((kategorija) => (
          <GrupaKomponenti kategorija={kategorija} />
        ))}
      </div>

      <div>Spisak dodatih komponenata: {korpa}</div>
    </div>
  );
}

export default IzborKomponenata;
