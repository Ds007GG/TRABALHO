function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom bg-white">
      <h1 className="mb-0 text-primary fw-bold" style={{ fontSize: "1.5rem" }}>
        R2D2 Tecnologias
      </h1>

      <nav>
        <a href="#home" className="ms-3 text-decoration-none text-dark">
          Home
        </a>
        <a href="#servicos" className="ms-3 text-decoration-none text-dark">
          Serviços
        </a>
        <a href="#contato" className="ms-3 text-decoration-none text-dark">
          Contato
        </a>
      </nav>
    </header>
  );
}

export default Header;
