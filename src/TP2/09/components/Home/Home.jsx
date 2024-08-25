import "./style.css";

export default function Home() {
  return (
    <div className="home8" id="home8">
      <section>
        <img
          src="https://www.coca-cola.com.br/assets/images/home/683w/at-your-home.png?v=d9dddc04aaced419ac680167dfe955ef"
          alt=""
        />
        <div className="content">
          <h1>Coca-cola na sua casa</h1>
          <p>
            Bem-vindo ao site da Coca-Cola, somos uma empresa que traz
            refrescância e alegria para as pessoas ao redor do mundo há mais de
            um século. Nossa missão é criar momentos de otimismo e felicidade,
            criando valor e fazendo a diferença em todas as comunidades onde
            operamos. Com um compromisso contínuo com a qualidade e a inovação,
            nossos valores refletem o respeito, a responsabilidade e o cuidado
            com o meio ambiente.
          </p>
        </div>
      </section>

      <section id="quemsomos8">
        <div className="content">
          <h1>Quem Somos</h1>
          <p>
            Fundada em 1886, a Coca-Cola começou como uma pequena operação em
            Atlanta, EUA, e rapidamente se tornou uma das marcas mais
            reconhecidas e amadas do mundo. Nossa história é marcada por
            inovações, desafios e um compromisso inabalável com a excelência.
            Nossa equipe global trabalha com paixão para garantir que cada
            garrafa entregue aos consumidores seja sinônimo de sabor e qualidade
            incomparáveis.
          </p>
        </div>
        <div className="images">
          <img
            src="https://yaffa-cdn.s3.amazonaws.com/adnews/live/images/yafNews/featureImage/coke.png"
            alt=""
          />
          <img
            src="https://fiu-original.b-cdn.net/fontsinuse.com/use-images/29/29563/29563.jpeg?filename=9025678642_1dbc073fdc_k.jpg"
            alt=""
          />
          <img
            src="https://i.ebayimg.com/images/g/fQkAAOSwU-1hmmET/s-l1600.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
