import { CategoryPage, Editor, Home, Login, Post, Search } from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post/:postId" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
