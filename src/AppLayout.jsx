import { useState } from "react";
import Login from "./loginpopup/Login"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Header setShowLogin={setShowLogin} />
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;