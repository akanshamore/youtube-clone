import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";

const VideoPlayerPage = () => {
  return <div>Video Player Page</div>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:videoId" element={<VideoPlayerPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
