import "./App.css";
import { BlogPage } from "./components/page/BlogPage";
import CirclePage from "./components/page/CirclePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/page/HomePage";
import { MyCirclePage } from "./components/page/MyCirclePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/MySite" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/circle" element={<CirclePage />} />
          <Route path="/mycircle" element={<MyCirclePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
