import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./components/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
        <ToastContainer className="div-height" />
      </div>
    </BrowserRouter>
  );
}

export default App;
