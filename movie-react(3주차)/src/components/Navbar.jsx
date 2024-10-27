import React from "react"; // eslint-disable-line no-unused-vars
import { useNavigate } from "react-router-dom";
import { Nav, Logo, Button } from "../styled/NavbarStyles";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <Nav>
      <Logo onClick={() => navigate("/")}>YOUGCHA</Logo>
      <div>
        <Button onClick={handleLogin}>로그인</Button>
        <Button onClick={handleSignup}>회원가입</Button>
      </div>
    </Nav>
  );
};

export default Navbar;
