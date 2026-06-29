import "./App.css";
import Buttons from "./components/Buttons";
import Images from "./components/Images";
import fotoreact from "./assets/img/fotoreact.jpg";

const App = function () {
  return (
    <div className="App">
      <Buttons text="CLICK ME PLEASE!" />
      <div className="container">
        <Images src={fotoreact} alt="react" />
        <Images src={fotoreact} alt="react" />
      </div>
      <Buttons text="I'M ANOTHER BUTTON" />
    </div>
  );
};

export default App;
