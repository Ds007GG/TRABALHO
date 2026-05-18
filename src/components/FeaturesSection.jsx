import { Zap, Users, TrendingUp } from "lucide-react";

function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Velocidade",
      description: "Processamento ultra-rápido com infraestrutura otimizada.",
      icon: Zap,
    },
    {
      id: 2,
      title: "Suporte 24/7",
      description: "Equipe dedicada pronta para ajudar em qualquer momento.",
      icon: Users,
    },
    {
      id: 3,
      title: "Crescimento",
      description: "Soluções escaláveis que crescem junto com seu negócio.",
      icon: TrendingUp,
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#0066cc",
        color: "white",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ fontSize: "2rem" }}>
          Por Que Escolher a R2D2 Tecnologias?
        </h2>

        <div className="row g-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="col-12 col-md-6 col-lg-4">
                <div className="text-center">
                  <div
                    className="mb-3"
                    style={{
                      fontSize: "3rem",
                      display: "inline-block",
                      color: "#ffffff",
                    }}
                  >
                    <Icon size={60} />
                  </div>
                  <h4 className="fw-bold mb-3">{feature.title}</h4>
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
