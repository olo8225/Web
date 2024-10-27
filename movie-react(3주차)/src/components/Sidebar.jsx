import React from "react"; // eslint-disable-line no-unused-vars
import { useNavigate } from "react-router-dom";
import { SidebarContainer, Button } from "../styled/SidebarStyles";
const Sidebar = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };

  const handleMovies = () => {
    navigate("/movies");
  };

  return (
    <SidebarContainer>
      <Button onClick={handleSearch}>찾기</Button>
      <Button onClick={handleMovies}>영화</Button>
    </SidebarContainer>
  );
};

export default Sidebar;
