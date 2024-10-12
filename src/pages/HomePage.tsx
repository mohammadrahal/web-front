import Banner from "../components/Banner";
import Counter from "../components/Counter";
import Course from "../components/Course";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
       <Banner />

      <div className="pt-32">
        <Counter />
      </div>

      <div className="pt-12">
        <Course />
      </div>

      <div className="pt-12">
        <Team />
      </div>

      <div className="pt-12">
        <FAQ />
      </div>
      
      <div className="pt-12">
        <Testimonial />
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
