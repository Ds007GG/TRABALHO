import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";
import services from "./data/services";
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <div
      className="bg-white"
      style={{ minHeight: "100vh", scrollBehavior: "smooth" }}
    >
      <Header />

      <section id="home">
        <HeroSection />
      </section>

      <section id="servicos" className="py-5 bg-light">
        <div className="container">
          <h2
            className="text-center mb-5 text-dark fw-bold"
            style={{ fontSize: "2rem" }}
          >
            Serviços Digitais
          </h2>

          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-12 col-md-6 col-lg-3">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesSection />

      <section id="contato">
        <Footer />
      </section>
    </div>
  );
}

export default App;
