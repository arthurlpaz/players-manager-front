import './App.css';
import Application from "./scenes/Application"
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div class="app">
            <Application />
        </div>
    </BrowserRouter>
  );
}

export default App;
