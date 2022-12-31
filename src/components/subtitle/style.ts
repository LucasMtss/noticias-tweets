import styled from "styled-components";

export const ContainerSubtitle = styled.div`
  width: 100vw;
  margin: 50px 0;
`;

export const ContainerGrey = styled.div`
  background-color: ${(props) => props.theme.CINZA_MEDIO};
  width: 70%;
  border-radius: 0 6px 6px 0;
  padding: 36px;
  display: flex;
  align-items: center;
`;

export const SubtitleText = styled.h2`
  color: ${(props) => props.theme.BRANCO};
  font-size: 48px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;
