import HomeBanner from "../../components/HomeBanner";
import OurService from "../../components/OurService";
import WhyCelebrationHub from "../../components/WhyCelebrationHub";
import QueryForm from "../../components/QueryForm";
import ShortAboutUs from "../../components/ShortAboutUs";
import Blog from "../../components/Blog";
import Testimonials from "../../components/Testimonials";

export default function Home() {
  return (
    <>
      <HomeBanner/>
      <OurService/>
      <WhyCelebrationHub/>
      <QueryForm/>
      <ShortAboutUs/>
      <Testimonials/>
      <Blog/>
    </>
  );
}
