import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import SearchResult from "./pages/SearchResult";
import Header from "./components/Header";
import VideoDetail from "./pages/VideoDetail";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<VideoDetail />} />
        <Route path="/results" element={<SearchResult />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
