import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  background-color: ${(props) => props.theme.PRETO_PRINCIPAL};

  img {
    cursor: pointer;
  }
`;

export const ContainerTheme = styled.div`
  border-radius: 8px;
  display: flex;
  padding: 8px;
  background-color: ${(props) => props.theme.BRANCO};
`;
