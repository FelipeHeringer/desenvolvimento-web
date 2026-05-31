import ContactInformationSection from "./View/components/layout/ContactInformationSection";
import Footer from "./View/components/layout/Footer";
import Header from "./View/components/layout/Header";
import HeroSection from "./View/components/layout/HeroSection";
import OurServicesSection from "./View/components/layout/OurServicesSection";
import PortifolioSection from "./View/components/layout/PortfolioSection";

export default function App() {
  return (
    <div className="bg-off-white relative">
      <Header />
      <HeroSection />
      <OurServicesSection />
      <PortifolioSection />
      <ContactInformationSection />
      <Footer />
    </div>
  )
}