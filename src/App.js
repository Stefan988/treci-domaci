import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Korpa from "./Korpa";
import IzborKomponenata from "./IzborKomponenata";

function App() {
  const [korpa, setKorpa] = useState({});

  const dodajUKorpu = (grupa, proizvod) => {
    setKorpa({ ...korpa, [grupa]: proizvod });
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/korpa">
          <Korpa korpa={korpa} setKorpa={setKorpa}/>
        </Route>
        <Route path="/">
          <IzborKomponenata dodajUKorpu={dodajUKorpu} korpa={korpa} setKorpa={setKorpa} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
