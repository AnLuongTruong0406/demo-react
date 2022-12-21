import logo from "./logo.svg";
import slack_bg from "./asset/img/slack_bg.jpg";
import piggy from "./asset/img/piggy_look.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper" data-ba>
          <img src={slack_bg} className="bg" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
