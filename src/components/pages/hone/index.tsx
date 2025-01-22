import Banner from "./Banner";
import CompetitionsSection from "./Competitions";
import Footer from "./Footer";
import Nav from "./Nav";
import BlogSection from "./News";
import PartnersSection from "./Partners";

export default function Home() {
  return (
    <div>
      <Nav />
      <div>
        <Banner />

        <BlogSection />
        <CompetitionsSection />
        <PartnersSection />
        <Footer />
      </div>
    </div>
  );
}
