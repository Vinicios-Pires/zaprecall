import { useState } from "react";
import Setinha from "../../assets/setinha.png";
import NaoLembro from "../../assets/nao-lembro.svg";
import QuaseNaoLembrei from "../../assets/quase-nao-lembrei.svg";
import ZAP from "../../assets/ZAP.svg";
import triste from "../../assets/sad.png";
import feliz from "../../assets/party.png";

const perguntas = [
  {
    questao: "pergunta 1",
    pergunta: "O que é JSX?",
    resposta: "Uma extensão de linguagem do JavaScript",
  },
  {
    questao: "pergunta 2",
    pergunta: "O React é __",
    resposta: "uma biblioteca JavaScript para construção de interfaces",
  },
  {
    questao: "pergunta 3",
    pergunta: "Componentes devem iniciar com __",
    resposta: "letra maiúscula",
  },
  {
    questao: "pergunta 4",
    pergunta: "Podemos colocar __ dentro do JSX",
    resposta: "expressões",
  },
  {
    questao: "pergunta 5",
    pergunta: "O ReactDOM nos ajuda __",
    resposta: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    questao: "pergunta 6",
    pergunta: "Usamos o npm para __",
    resposta: "gerenciar os pacotes necessários e suas dependências",
  },
  {
    questao: "pergunta 7",
    pergunta: "Usamos props para __",
    resposta: "passar diferentes informações para componentes ",
  },
  {
    questao: "pergunta 8",
    pergunta: "Usamos estado (state) para __",
    resposta:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];

// perguntas.sort(() => Math.random() - 0.5); USAR DEPOIS

function Pergunta({
  questao,
  pergunta,
  resposta,
  setTotal,
  total,
  respostas,
  setRespostas,
  // icone,
  // setIcone
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
    // setIcone(...icone , <img src={NaoLembro} alt={NaoLembro}/>)
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

function Perguntas() {
  const [total, setTotal] = useState(0);
  const [respostas, setRespostas] = useState([]);
  // const [icone, setIcone] = useState([]);
  return (
    <>
      <div className="Perguntas">
        {perguntas.map(({ questao, pergunta, resposta }) => (
          <Pergunta
            key={questao}
            questao={questao}
            pergunta={pergunta}
            resposta={resposta}
            setTotal={setTotal}
            total={total}
            respostas={respostas}
            setRespostas={setRespostas}
            // icone={icone}
            // setIcone={setIcone}
          />
        ))}
      </div>
      <Concluidos total={total} respostas={respostas} />
    </>
  );
}

function Concluidos(props) {
  const { total, respostas } = props;
  const NumeroQuestoes = 8;
  const armazemRespostas = [];

  if (total !== NumeroQuestoes) {
    return (
      <div className="concluido">
        <p>
          {total}/{NumeroQuestoes} CONCLUÍDOS
        </p>
      </div>
    );
  } else {
    for (let i = 0; i < respostas.length; i++) {
      let resp = respostas[i];
      armazemRespostas.push(resp);
    }
    for (let i = 0; i < armazemRespostas.length; i++) {
      if (armazemRespostas.includes("nao-lembrei") === true) {
        return (
          <div className="msg-final">
            <p>
              <img src={triste} alt="Carinha triste" /> <b>Putz...</b>
            </p>
            <p className="txt-final">Ainda faltam alguns... Mas não desanime!</p>
            <p>
              {total}/{NumeroQuestoes} CONCLUÍDOS
            </p>
          </div>
        );
      } else {
        return (
          <div className="msg-final">
            <p>
              <img src={feliz} alt="Carinha feliz" /> <b>Parabéns!</b>
            </p>
            <p className="txt-final">Você não esqueceu de nenhum flashcard!</p>
            <p>
              {total}/{NumeroQuestoes} CONCLUÍDOS
            </p>
          </div>
        );
      }
    }
  }

  // return (
  //   <div className="concluido">
  //     <p>
  //       {total}/{NumeroQuestoes} CONCLUIDOS
  //     </p>
  //   </div>
  // );
}

export default Perguntas;
