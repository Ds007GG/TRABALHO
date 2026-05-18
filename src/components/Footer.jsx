function Footer() {
  return (
    <footer className="border-top py-5 bg-light">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-md-4 mb-3">
            <h5 className="fw-bold text-dark">R2D2 Tecnologias</h5>
            <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
              Soluções digitais inovadoras para transformar seu negócio.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <h6 className="fw-bold text-dark">Navegação</h6>
            <ul className="list-unstyled" style={{ fontSize: "0.9rem" }}>
              <li>
                <a href="#" className="text-decoration-none text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-secondary">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-secondary">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <h6 className="fw-bold text-dark">Contato</h6>
            <p
              className="text-secondary"
              style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}
            >
              Email: contato@r2d2tecnologias.com
            </p>
            <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
              Telefone: (11) 4002-8922
            </p>
          </div>
        </div>
        <hr />
        <div
          className="text-center text-secondary"
          style={{ fontSize: "0.9rem" }}
        >
          © 2026 R2D2 Tecnologias. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
