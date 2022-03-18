import { useState } from "react";

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

function Pergunta({ questao, pergunta, resposta }) {
  const [selecionada, setSelecionada] = useState(false);
  function AparecerPergunta() {
    setSelecionada(true);
  }

  const [perguntaSelecionada, setPerguntaSelecionada] = useState(false);
  function AparecerResposta() {
    setPerguntaSelecionada(true);
  }

  return !selecionada ? (
    <div className="pergunta">
      {questao}
      <ion-icon
        onClick={AparecerPergunta}
        class="icon-pergunta"
        name="play-outline"
      ></ion-icon>
    </div>
  ) : !perguntaSelecionada ? (
    <div className="pergunta estender-colorir">
      {pergunta}
      <img
        onClick={AparecerResposta}
        className="setinha"
        src="assets/setinha.png"
        alt="setinha"
      />
    </div>
  ) : (
    <div className="resposta-revelada estender-colorir">
      {resposta}
      {/* <div className="botoes">
        <button className="nao-lembrei">Não lembrei</button>
        <button className="quase-nao-lembrei">Quase não lembrei</button>
        <button className="lembrei">Zap!</button>
      </div> */}
    </div>
  );
}

function Concluidos(props) {
  const { total } = props;
  return (
    <div className="concluido">
      <p>{total}/8 CONCLUIDOS</p>
    </div>
  );
}

function Perguntas() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <div className="Perguntas">
        {perguntas.map(({ questao, pergunta, resposta }) => (
          <Pergunta questao={questao} pergunta={pergunta} resposta={resposta} />
        ))}
      </div>
      <Concluidos total={total} />
    </>
  );
}

export default Perguntas;
