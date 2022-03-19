import TelaInicial from "./componentes/Tela Inicial/TelaInicial";
import TelaPerguntas from "./componentes/Tela Perguntas/TelaPerguntas";
import { useState } from "react";

import "./estilos/reset.css"
import "./estilos/style.css"

function App() {
  const [game, setGame] = useState(false);

  function startGame() {
    setGame(true);
  }

  return (
    <div className="root">
      {!game && <TelaInicial fn={startGame} />} {game && <TelaPerguntas />}
    </div>
  );
}

export default App;
