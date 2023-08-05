import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './pages/about/About';
import { About2 } from './pages/about/About2';
import { About3 } from './pages/about/About3';
import { CreateAccount } from './pages/CreateAccount';
import { NoPage } from "./pages/NoPage";
import { Welcome } from "./pages/Welcome";
import { Login } from "./pages/Login";
import { Profile } from "./pages/profile/Profile";
import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" element={<Welcome />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/about/2" element={<About2 />} />
            <Route path="/about/3" element={<About3 />} />
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/profile" element={<Profile />} />  
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;