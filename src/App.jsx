import { Body } from "./components/Body";
import Header from "./components/Header";
import { SideBar } from "./components/Sidebar";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header />

      <div style={{ display: "flex", backgroundColor: "#f9f9f9", flex: 1 }}>
        <SideBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
