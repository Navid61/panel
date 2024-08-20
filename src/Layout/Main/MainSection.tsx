// MainSection.tsx
import React, { useState, useEffect, Suspense } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
// Import Sidebar component
// import Sidebar from '../Sidebar/Sidebar';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Dashboard = React.lazy(
  () => import("../../View/Pages/Dashboard/Dashboard")
);
const Config = React.lazy(() => import("../../View/Pages/Config/Config"));

interface MainSectionProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
  onPinToggle: () => void;
  isSidebarPinned: boolean;
}

const MainSection: React.FC<MainSectionProps> = ({
  isSidebarOpen,
  onSidebarToggle,
  onPinToggle,
  isSidebarPinned,
}) => {
  const location = useLocation();
  const [currentComponent, setCurrentComponent] =
    useState<React.ReactNode | null>(null);

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setCurrentComponent(<Dashboard />);
        break;
      case "/config":
        setCurrentComponent(<Config />);
        break;
      default:
        setCurrentComponent(
          <div>
            <h2>Default Page</h2>
            {/* Add default content here */}
          </div>
        );
    }
  }, [location.pathname]);

  const handleOnSidebarToggle = () => {
    onSidebarToggle();

    console.log("isSidebarOpen ", isSidebarOpen);
  };


  const handleContainerClick = () => {
    if (isSidebarOpen) {
      onSidebarToggle();
    }
  };

  return (
    <div className="main-container" onClick={handleContainerClick}>
      <div
        id="main"
        style={{
          marginLeft: isSidebarOpen || isSidebarPinned ? "17%" : "0",
          border: "1px dashed red",
        }}
      >
        <div className="header">
          <Button
            id="openNav"
            className="menu-btn"
            onClick={handleOnSidebarToggle}
          >
            &#9776;
          </Button>

          <Header />
        </div>

        <div className="container" style={{ maxWidth: "100vw" }}>
          <Suspense fallback={<div>Loading...</div>}>
            {currentComponent}
          </Suspense>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
