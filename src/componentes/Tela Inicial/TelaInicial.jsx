import { TextoLogo, Btn, TxtBtn } from "./style";

function TelaInicial({fn}) {
  return (
    <div className="tela-inicial">
      <div>
        <img src="assets/logo.png" alt="Logo Zap Recall" />
        <TextoLogo>ZapRecall</TextoLogo>
      </div>
      <Btn onClick={fn}>
        <TxtBtn>Iniciar Recall!</TxtBtn>
      </Btn>
    </div>
  );
}

export default TelaInicial;
