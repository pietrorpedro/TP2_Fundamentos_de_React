import "./style.css";

export default function Header() {
  function handleScroll(e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href");
    const elemento = document.querySelector(id);

    if (elemento) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <header className="header8">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UyjkRhtY7D_ahnHAt9UHdNKDd59vvZGe_A&s"
        alt=""
      />
      <ul>
        <li>
          <a href="#home8" onClick={handleScroll}>
            Home
          </a>
        </li>
        <li>
          <a href="#quemsomos8" onClick={handleScroll}>
            Quem Somos
          </a>
        </li>
        <li>
          <a href="#produtos8" onClick={handleScroll}>
            Produtos
          </a>
        </li>
        <li>
          <a href="#contato8" onClick={handleScroll}>
            Contato
          </a>
        </li>
      </ul>
    </header>
  );
}
