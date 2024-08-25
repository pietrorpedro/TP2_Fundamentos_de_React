import Contato from "./components/Contato/Contato";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Produtos from "./components/Produtos/Produtos";

export default function App() {
  return (
    <div className="site8">
      <Header />
      <main className="main8">
        <Home />
        <Produtos />
        <Contato />
      </main>
    </div>
  );
}
