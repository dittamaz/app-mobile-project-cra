import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './pages/About';
import { NoPage } from "./pages/NoPage";
import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
       <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<About />}>
            
              <Route path="*" element={<NoPage />} />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;