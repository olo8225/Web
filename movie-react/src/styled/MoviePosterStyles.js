import styled from "styled-components";

export const Poster = styled.div`
  margin: 5px;
  position: relative;
  display: inline-block;

  img {
    width: 130px;
    height: 205px;
    transition: filter 0.3s;
    filter: brightness(1);
    border-radius: 10px;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
