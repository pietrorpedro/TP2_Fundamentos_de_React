import Habilidades from "./components/Habilidades";
import Header from "./components/Header/Header";
import SobreMim from "./components/SobreMim/SobreMim";
import Card from "./components/Card";
import Contato from "./components/Contato";
import Formacao from "./components/Formacao";

// biblioteca externa (Exercicio 16)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./style.css";

export default function App() {
  return (
    <div>
      <Header />
      <SobreMim />
      <section className="habilidades" id="habilidades">
        <Habilidades />
      </section>
      <section className="cards" id="projetos">
        <h1 className="text-center">Projetos</h1>
        <div>
          <Card
            title="Cinema Toda Vida"
            desc="Este é um sistema de venda de ingressos para filmes desenvolvido com Laravel. A aplicação consome dados da API The Movie Database (TMDb) para listar filmes, exibir detalhes, permitir a criação de contas de usuários e possibilitar a compra de ingressos."
            link="https://github.com/pietrorpedro/CinemaTodaVida"
          />
          <Card
            title="Desafio Back-end PicPay"
            desc="Este é o meu projeto para o desafio Back-end do PicPay. Abaixo, você encontrará informações sobre a implementação, instruções para configurar e executar o projeto, e detalhes sobre as funcionalidades implementadas."
            link="https://github.com/pietrorpedro/desafio-picpay-simplificado"
          />
          <Card
            title="TaskAssignPro"
            desc="TaskAssignPro é uma aplicação RESTFUL de gerenciamento de tarefas projetada para facilitar a atribuição e o acompanhamento de tarefas em uma equipe. Este projeto permite que os organizadores atribuam tarefas a funcionários de forma eficiente."
            link="https://github.com/pietrorpedro/TaskAssignPro"
          />
        </div>
      </section>
      <section className="contato" id="contato">
        <Contato />
      </section>
      <section className="formacao-section" id="formacao">
        <Formacao />
      </section>
    </div>
  );
}
