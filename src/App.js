import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import ListaProdutosCarrinho from "./componentes/ListaProdutosCarrinho";
import { useEffect, useState } from "react";

function App() {

  const [listaProdutos, setListaProdutos] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);

  function restaurarCarrinho() {
    const carrinho = localStorage.getItem('carrinho');
    if (carrinho !== null) {
      setListaProdutos(JSON.parse(carrinho))
    }
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });
    restaurarCarrinho();
  }, []);

  if (mostrarLista) {
    return (
      <div className="App">
        <Cabecalho />
        <BarraBusca qtdCarrinho={listaProdutos.length} mostraLista={setMostrarLista} />
        <ListaProdutosCarrinho listaProdutosCarrinho={listaProdutos} mostrarLista={setMostrarLista} />
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <Cabecalho />
        <BarraBusca qtdCarrinho={listaProdutos.length} mostrarLista={setMostrarLista} />
        <GradeProdutos listaProdutos={produtos}
          setListaProdutos={setListaProdutos}
          listaProdutosCarrinho={listaProdutos} />
      </div>
    );
  }
}

export default App;