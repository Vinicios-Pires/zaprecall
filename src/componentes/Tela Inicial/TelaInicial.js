function TelaInicial() {
  return (
    <div className="tela-inicial">
      <div>
        <img
          className="logo"
          src="assets/logozaprecall.svg"
          alt="Logo Zap Recall"
        />
        <h1 className="zaprecall-tela-inicial">ZapRecall</h1>
      </div>
      <button onClick={irParaTelaPerguntas} className="btn-tela-inicial">
        <p className="txt-btn">Iniciar Recall!</p>
      </button>
    </div>
  );
}

function irParaTelaPerguntas() {
  const telaInicial = document.querySelector(".tela-inicial");
  const telaPerguntas = document.querySelector(".tela-perguntas");
  telaInicial.classList.add("escondido");
  telaPerguntas.classList.remove("escondido");
}

export default TelaInicial;
