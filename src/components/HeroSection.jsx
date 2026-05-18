function HeroSection() {
  return (
    <section
      className="text-center py-5"
      style={{
        background: "linear-gradient(135deg, #e6f2ff 0%, #f0f7ff 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <h2 className="display-2 fw-bold mb-4 text-dark">Bem vindo ao futuro!</h2>

      <h2 className="display-6 fw-normal mb-4 text-dark">
        Soluções Digitais Para Empresas Modernas
      </h2>

      <p
        className="text-dark"
        style={{
          fontSize: "1.1rem",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "30px",
        }}
      >
        Automatize processos com tecnologia inteligente.
      </p>

      <button
        className="btn fw-bold"
        style={{
          backgroundColor: "#0066cc",
          color: "white",
          padding: "12px 32px",
          fontSize: "1rem",
          border: "none",
          borderRadius: "6px",
        }}
        onClick={() => alert("Não implementado ainda")}
      >
        Começar Agora
      </button>
    </section>
  );
}

export default HeroSection;
