import { TextoH1 } from "./style";
import LogoPequeno from "../../../assets/logo-pequeno.png";

function TopoTelaPerguntas() {
  return (
    <>
      <div className="topo-tela-perguntas">
        <img
          className="logo-perguntas"
          src={LogoPequeno}
          alt="Logo pequeno ZapRecall"
        />
        <TextoH1>ZapRecall</TextoH1>
      </div>
    </>
  );
}

export default TopoTelaPerguntas;
