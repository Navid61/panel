// src/App.tsx
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import MainSection from "./Layout/Main/MainSection";
import Sidebar from "./Layout/Sidebar/Sidebar";

import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSidebarPinned, setSidebarPinned] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handlePinToggle = () => {
    setSidebarPinned(!isSidebarPinned);
  };

  return (
    <Router>
      <Container fluid>
        <Sidebar
          isOpen={isSidebarOpen || isSidebarPinned}
          onClose={() => setSidebarOpen(false)}
          onPinToggle={handlePinToggle}
          isPinned={isSidebarPinned}
        />
        <MainSection
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={toggleSidebar}
          onPinToggle={handlePinToggle}
          isSidebarPinned={isSidebarPinned}
        />
      </Container>
    </Router>
  );
};

export default App;
