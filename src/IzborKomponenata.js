import React from "react";

import spisakKomponenata from "./spisakKomponenata";
import GrupaKomponenti from "./GrupaKomponenti";

function IzborKomponenata() {
  return (
    <div>
      {spisakKomponenata.map((kategorija) => (
        <GrupaKomponenti kategorija={kategorija} />
      ))}
    </div>
  );
}

export default IzborKomponenata;
