import Carousel from "../../components/Carousel/Carousel";
import ContactSection from "../../components/ContactSection/ContactSection";
import LocationSection from "../../components/LocationSection/LocationSection";
import StoresSection from "../../components/StoresSection/StoresSection";

export default function HomePage() {
  return (
    <>
    <Carousel/>
    <LocationSection/>
    <StoresSection/>
    <ContactSection/>
    </>
  )
}
