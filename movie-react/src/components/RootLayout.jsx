import React from "react"; // eslint-disable-line no-unused-vars
import { LayoutContainer, MainContent } from "../styled/RootLayoutStyles";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Sidebar />
        <MainContent>
          <Outlet />
        </MainContent>
      </LayoutContainer>
    </>
  );
};

export default RootLayout;
