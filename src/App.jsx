import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from './pages/NotFound';
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/product/:id/:name" element={<ProductPage/>}/>
          <Route path="/profile/:facebookID/:youtubeID" element={<ProfilePage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
