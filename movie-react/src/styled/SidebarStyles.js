import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 200px; // 사이드바 너비
  background-color: #111111; // 사이드바 배경색
  height: 100vh; /* 화면 전체 높이에 맞추기 */
  padding: 20px; // 내부 여백
`;

export const Button = styled.button`
  width: 100%; // 버튼 너비
  padding: 10px; // 버튼 내부 여백
  margin: 5px 0; // 버튼 사이 여백
  border: none; // 테두리 제거
  background-color: #111111; // 버튼 배경색
  color: white; // 버튼 글자색
  font-weight: bold;
  cursor: pointer; // 커서 모양 변경
  border-radius: 5px; // 모서리 둥글게
`;
