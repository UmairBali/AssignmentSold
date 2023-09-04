import "./App.css";
import Marquii from "./Components/Marquii/Marquii";
import Heading from "./Components/HomePage/Heading/Heading";
import Navbars from "./Components/HomePage/Navbars/Navbar";
import Questions from "./Components/Questions/Questions";
import Selectxx from "./Components/Select/Selectxx";
import Cards from "./Components/cards/Cards";
import Footer from "./Components/Footer/Footer";
import Catagories from "./Components/Catagories/Catagories";
import Webheading from "./Components/Webheading/Webheading";
import Tabz from "./Components/Tabz/Tabz";
function App() {
  return (
    <div>
      <Navbars/>
      <Heading/>
      <Marquii/>
      <Questions/>

      <Selectxx/>
      <Cards/>
      <Catagories/>
      <Webheading/>
       <Tabz/>
      <Footer/>


    </div>
  
  );
}

export default App;
