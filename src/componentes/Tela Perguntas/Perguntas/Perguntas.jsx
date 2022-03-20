import { useState } from "react";
import Pergunta from "./Pergunta/Pergunta";
import Concluidos from "../Concluidos/Concluidos";

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

function Perguntas() {
  const [total, setTotal] = useState(0);
  const [respostas, setRespostas] = useState([]);
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
            />
            ))}
      </div>
      <Concluidos total={total} respostas={respostas} />
    </>
  );
}

<Pergunta/>

export default Perguntas;
