import React from "react";
import "../../App.css";
import { ContainerSubtitle, ContainerGrey, SubtitleText } from "./style";

interface IProps {
  text: string;
}

function Subtitle({ text }: IProps) {
  return (
    <ContainerSubtitle>
      <ContainerGrey>
        <SubtitleText>{text}</SubtitleText>
      </ContainerGrey>
    </ContainerSubtitle>
  );
}

export default Subtitle;
