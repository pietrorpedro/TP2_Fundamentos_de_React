export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Portfólio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#sobremim">
                Sobre Mim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#habilidades">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projetos">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#formacao">
                Formação
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
