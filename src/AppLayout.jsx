import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Login from "./loginpopup/Login";

const AppLayout = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />} {/* ✅ Send function as prop */}
      <Header setShowLogin={setShowLogin} />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
