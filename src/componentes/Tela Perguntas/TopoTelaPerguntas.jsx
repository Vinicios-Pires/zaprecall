import { TxtH1 } from "./style";
import LogoPequeno from "../../assets/logo-pequeno.png";

function TopoTelaPerguntas() {
  return (
    <>
      <div className="topo-tela-perguntas">
        <img
          className="logo-perguntas"
          src={LogoPequeno}
          alt="Logo pequeno ZapRecall"
        />
        <TxtH1>ZapRecall</TxtH1>
      </div>
    </>
  );
}

export default TopoTelaPerguntas;
