import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ElementKorpe from "./ElementKorpe";
import "./Korpa.css";

function Korpa({ korpa }) {
  const [rejting, setRejting] = useState(1000);

  const generisiRandom = () => {
    return Math.floor(Math.random() * (10000 - 2000 + 1) + 2000);
  };

  useEffect(() => {
    const randomBr = generisiRandom();
    console.log(randomBr);
    setRejting(randomBr);
  }, []);

  return (
    <div>
      <div className="naslov">Izabrane komponente</div>
      <ElementKorpe
        kategorija="Procesor"
        imgUrl="https://viphouse.rs/images/blog/Best-Budget-Processor-CPU.png"
        proizvod={korpa["Procesori"]}
      />
      <ElementKorpe
        kategorija="Memorija"
        imgUrl="https://staticsmartlife.mondo.rs/Picture/22883/jpeg/import-smartlife-no-name"
        proizvod={korpa["Memorije"]}
      />
      <ElementKorpe
        kategorija="Graficka"
        imgUrl="https://pcchip.hr/wp-content/uploads/2019/06/ASRock-Radeon-VII.jpg"
        proizvod={korpa["Graficke kartice"]}
      />

      <div className="rejtingRacunara">Benchmark rejting ove konfiguraije je: {rejting} poena.</div>
      <Link className="nazadDugme" to="/">Nazad na konfiguraije</Link>
    </div>
  );
}

export default Korpa;
