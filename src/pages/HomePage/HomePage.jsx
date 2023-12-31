import Carousel from "../../components/Carousel/Carousel";
import ContactSection from "../../components/ContactSection/ContactSection";
import ContactUs from "../../components/ContactUs/ContactUs";
import InterestInformationSection from "../../components/InterestInformationSection/InterestInformationSection";
import LocationSection from "../../components/LocationSection/LocationSection";
import StoresSection from "../../components/StoresSection/StoresSection";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function HomePage() {
  return (
    <>
    <Carousel/>
    <LocationSection/>
    <StoresSection/>
    <ContactSection/>
    <InterestInformationSection/>
    <Testimonials/>
    <ContactUs/>
    </>
  )
}
