import Hello from "./components/Hello";
import Profile from "./components/Profile";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import ClickListener from "./components/ClickListener";
import Typed from "./components/Typed"

function App() {
  return (
    <>
      <Hello name="World" />
      <Profile />
      <img className="logo" src={makersLogo}></img>
      <Typed />
      <ClickListener />
    </>
  );
}

export default App;
