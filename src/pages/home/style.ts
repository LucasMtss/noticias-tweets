import styled from "styled-components";
import { colors } from "../../styles/colors";

interface ICategoryProps {
  isActive: boolean;
}

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.PRETO_PRINCIPAL};
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-family: "Jaldi", sans-serif;
  text-transform: uppercase;
  color: ${(props) => props.theme.BRANCO};
  font-weight: 400;
`;

export const ContainerCategories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  padding: 20px 20%;
  gap: 30px;
`;

export const Category = styled.button<ICategoryProps>`
  width: 210px;
  font-size: 24px;
  color: ${(props) => (props.isActive ? props.theme.CINZA_ESCURO : "#fff")};
  text-align: center;
  border-radius: 12px;
  border: solid 1px ${colors.BRANCO};
  background-color: ${(props) =>
    props.isActive ? props.theme.BRANCO : "#1C1C1C"};
  height: 60px;
  cursor: pointer;
  transition: all 300ms;

  :hover {
    background: ${(props) => props.theme.BRANCO};
    color: ${(props) => props.theme.CINZA_ESCURO};
  }
`;

export const ContainerNews = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  padding: 20px 20%;
  gap: 45px;
`;
