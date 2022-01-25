import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
function App() {
  return (
    <main>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </main>
  );
}

export default App;
