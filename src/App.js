import Bodyinimate from "./components/Bodyinimate";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  function addsallary() {
    return alert("this is your totalla Sallary");
  }
  return (
    <>
      <Navbar salary={addsallary}/>
      <h3>Arif ali  Hussain</h3>
      <h4>This is 4/8/2024</h4>
      <p>Hunza pakistan</p>
      <Bodyinimate/>
      <Footer/>
    </>
  );
}

export default App;
