import Bodyinimate from "./components/Bodyinimate";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  function addsallary() {
    return console.log("this is your totalla Sallary");
  }
  return (
    <>
      <Navbar />
      <h3>Arif Hussain</h3>
      <p>Hunza pakistan</p>
      {addsallary()}
      <Bodyinimate/>
      <Footer />
    </>
  );
}

export default App;
