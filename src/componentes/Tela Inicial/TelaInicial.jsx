import { TextoLogo, Botao, TextoBotao } from "./style";
import Logo from "../../assets/logo.png";

function TelaInicial({ fn }) {
  return (
    <div className="tela-inicial">
      <div>
        <img src={Logo} alt="Logo Zap Recall" />
        <TextoLogo>ZapRecall</TextoLogo>
      </div>
      <Botao onClick={fn}>
        <TextoBotao>Iniciar Recall!</TextoBotao>
      </Botao>
    </div>
  );
}

export default TelaInicial;
