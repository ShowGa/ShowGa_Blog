import { CategoryPage, Editor, Home, Login, Post, Search } from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
