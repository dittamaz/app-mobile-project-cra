import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './pages/about/About';
import { NoPage } from "./pages/NoPage";
import { Welcome } from "./pages/Welcome";
import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" element={<Welcome />} />
            <Route path="/about" element={<About />} />  
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;