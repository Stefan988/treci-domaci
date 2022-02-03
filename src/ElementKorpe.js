import React from "react";
import "./Korpa.css";

function ElementKorpe({ kategorija, imgUrl, proizvod }) {
    console.log(proizvod)
  return (
    <div className="kategorijaProizvoda">
      <img width={300} src={imgUrl} />
      <div className="informacije">
        <div className="naslovKategorije">{kategorija}</div>
        <div className="imeBrenda">{proizvod?.imeBrenda}</div>
        <div className="model">{proizvod?.model}</div>
        <div className="cena">{proizvod?.cena}</div>
      </div>
    </div>
  );
}

export default ElementKorpe;
