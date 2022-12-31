import React from "react";
import "../../App.css";
import sol from "../../assets/sol.svg";
import { ContainerHeader, ContainerTheme } from "./style";
import { DefaultComponentProps } from "../../interfaces/interfaces";

function Header({ toggleTheme }: DefaultComponentProps) {
  return (
    <ContainerHeader>
      <ContainerTheme>
        <img onClick={() => toggleTheme()} src={sol} alt="" />
      </ContainerTheme>
    </ContainerHeader>
  );
}

export default Header;
