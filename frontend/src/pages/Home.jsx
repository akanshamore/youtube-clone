import { Body } from "../components/Body";
import Header from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { FilterButtons } from "../components/FilterButtons";

export const Home = () => {
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
      <FilterButtons />
      <div style={{ display: "flex", backgroundColor: "#f9f9f9", flex: 1 }}>
        <SideBar />
        <Body />
      </div>
    </div>
  );
};
