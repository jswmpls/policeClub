import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Banner from "./components/Banner/Banner";
import Reservation from "./components/Reservation/Reservation";
import Mero from "./components/Mero/Mero";
import Contact from "./components/Contact/Contact";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <Banner />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="reservation">
        <Reservation />
      </div>
      <div id="mero">
        <Mero />
      </div>
      <div id="contacts">
        <Contact />
      </div>
    </>
  );
}

export default App;
