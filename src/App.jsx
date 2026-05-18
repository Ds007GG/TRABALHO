import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#09090B] text-white min-h-screen">
      <Header />

      <HeroSection />

      <section className="px-6 py-20">
        
        <h2 className="text-4xl font-bold text-center mb-12">
          Serviços Digitais
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />

          ))}
        </div>
      </section>
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;