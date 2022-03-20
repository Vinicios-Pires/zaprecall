import { useState } from "react";
import Setinha from "../../../../assets/setinha.png";
import NaoLembro from "../../../../assets/nao-lembro.svg";
import QuaseNaoLembrei from "../../../../assets/quase-nao-lembrei.svg";
import ZAP from "../../../../assets/ZAP.svg";

function Pergunta({
  questao,
  pergunta,
  resposta,
  setTotal,
  total,
  respostas,
  setRespostas,
}) {
  const [selecionada, setSelecionada] = useState(false);
  function AparecerPergunta() {
    setSelecionada(true);
  }

  const [exibirResposta, setExibirResposta] = useState(false);
  function AparecerResposta() {
    setExibirResposta(true);
  }

  // ETAPA DOS BOTOES
  const [resultado, setResultado] = useState("");
  function NaoLembrei() {
    setResultado("n-lembrei");
    setTotal(total + 1);
    setRespostas([...respostas, "nao-lembrei"]);
  }

  function QuaseLembrei() {
    setResultado("quase-n-lembrei");
    setTotal(total + 1);
    setRespostas([...respostas, "quase-n-lembrei"]);
  }

  function Zap() {
    setResultado("zap");
    setTotal(total + 1);
    setRespostas([...respostas, "zap"]);
  }

  const cssPergunta = `pergunta ${resultado}`;

  return !selecionada ? (
    <div className="pergunta">
      {questao}
      <ion-icon
        onClick={AparecerPergunta}
        class="icon-pergunta"
        name="play-outline"
      ></ion-icon>
    </div>
  ) : !exibirResposta ? (
    <div className="pergunta estender-colorir">
      {pergunta}
      <img
        onClick={AparecerResposta}
        className="setinha"
        src={Setinha}
        alt="setinha"
      />
    </div>
  ) : resultado === "" ? (
    <div className="resposta-revelada estender-colorir">
      {resposta}
      <div className="botoes">
        <button onClick={NaoLembrei} className="nao-lembrei">
          Não lembrei
        </button>
        <button onClick={QuaseLembrei} className="quase-nao-lembrei">
          Quase não lembrei
        </button>
        <button onClick={Zap} className="lembrei">
          Zap!
        </button>
      </div>
    </div>
  ) : resultado === "n-lembrei" ? (
    <div className={cssPergunta}>
      {questao}{" "}
      <img className="resultado-img" src={NaoLembro} alt="Nao lembro" />
    </div>
  ) : resultado === "quase-n-lembrei" ? (
    <div className={cssPergunta}>
      {questao}{" "}
      <img className="resultado-img" src={QuaseNaoLembrei} alt="Interrogacao" />
    </div>
  ) : (
    <div className={cssPergunta}>
      {questao} <img className="resultado-img" src={ZAP} alt="Correto" />
    </div>
  );
}

export default Pergunta;
