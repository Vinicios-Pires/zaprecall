import { TextoLogo, Btn, TxtBtn } from "./style";
import Logo from "../../assets/logo.png";

function TelaInicial({ fn }) {
  return (
    <div className="tela-inicial">
      <div>
        <img src={Logo} alt="Logo Zap Recall" />
        <TextoLogo>ZapRecall</TextoLogo>
      </div>
      <Btn onClick={fn}>
        <TxtBtn>Iniciar Recall!</TxtBtn>
      </Btn>
    </div>
  );
}

export default TelaInicial;
