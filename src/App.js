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
      <h3>Arif Hussain</h3>
      <p>Hunza pakistan</p>
      <Bodyinimate/>
      <Footer/>
    </>
  );
}

export default App;
