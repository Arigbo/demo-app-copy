
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./projects/AboutPage";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/aboutpage" element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
