import { Route, Routes } from "react-router-dom";
import { Body } from "./components/Body";
import Header from "./components/Header";
import { SideBar } from "./components/Sidebar";
import { Home } from "./components/Home";

const VideoPlayerPage = () => {
  return <div>Video Player Page</div>;
};

const LoginPage = () => {
  return <div>Login Page</div>;
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
