import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignUpPage";
import { VideoPlayer } from "./pages/VideoPlayer";
import Header from "./components/Header";
import { useEffect } from "react";
import { setAuth } from "./redux/slices/authSlice";
import { useDispatch } from "react-redux";

const checkAuth = (dispatch) => {
  const auth = localStorage.getItem("auth");
  if (auth) {
    dispatch(setAuth(JSON.parse(auth)));
  }
};
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    checkAuth(dispatch);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/watch/:videoId"
        element={
          <>
            <Header />
            <VideoPlayer />
          </>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
