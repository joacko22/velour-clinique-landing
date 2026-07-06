import { BookingProvider } from './context/BookingContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ValueProps from './components/ValueProps';
import Treatments from './components/Treatments';
import Locations from './components/Locations';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import FAQ from './components/FAQ';
import ConsultCTA from './components/ConsultCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingModal from './components/booking/BookingModal';

export default function App() {
  return (
    <BookingProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <ValueProps />
        <Treatments />
        <Locations />
        <BeforeAfterGallery />
        <FAQ />
        <ConsultCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BookingModal />
    </BookingProvider>
  );
}
