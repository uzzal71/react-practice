import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
  let marks=80;
  return (
    <div>
    <div>
      {
        marks>80?
        <h1>Brilliant Result</h1>
        :
        <h1>Avarage Result</h1>
      }
    </div>
      <Header/>
      <Hero/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;