import "./reset.css";
import "./App.css";
import Employess from "./components/Employees/Employees";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <Employess></Employess>
      <Services></Services>
      <Footer></Footer>
    </>
  );
}

export default App;
