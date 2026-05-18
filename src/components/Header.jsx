function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom bg-white">
      <h1 className="mb-0 text-primary fw-bold" style={{ fontSize: "1.5rem" }}>
        NexaFlow
      </h1>

      <nav>
        <a
          href="#home"
          className="ms-3 text-decoration-none text-dark"
          style={{ fontWeight: "500", transition: "color 0.3s" }}
          onMouseEnter={(e) => (e.target.style.color = "#0066cc")}
          onMouseLeave={(e) => (e.target.style.color = "#212529")}
        >
          Home
        </a>
        <a
          href="#servicos"
          className="ms-3 text-decoration-none text-dark"
          style={{ fontWeight: "500", transition: "color 0.3s" }}
          onMouseEnter={(e) => (e.target.style.color = "#0066cc")}
          onMouseLeave={(e) => (e.target.style.color = "#212529")}
        >
          Serviços
        </a>
        <a
          href="#contato"
          className="ms-3 text-decoration-none text-dark"
          style={{ fontWeight: "500", transition: "color 0.3s" }}
          onMouseEnter={(e) => (e.target.style.color = "#0066cc")}
          onMouseLeave={(e) => (e.target.style.color = "#212529")}
        >
          Contato
        </a>
      </nav>
    </header>
  );
}

export default Header;
