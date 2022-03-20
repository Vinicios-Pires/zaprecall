import triste from "../../../assets/sad.png";
import feliz from "../../../assets/party.png";

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
            <p className="txt-final">
              Ainda faltam alguns... Mas não desanime!
            </p>
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
}

export default Concluidos;