import styled from "styled-components";

export const Container = styled.div`
  width: 545px;
  height: 180px;
  padding: 12px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.CINZA_ESCURO};
  cursor: pointer;
`;

export const Image = styled.img`
  height: 100%;
  width: 190px;
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 12px;

  .container-title {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-family: "Jacques Francois";
  font-size: 16px;
  margin-bottom: 25px;
  text-align: left;
`;

export const OriginText = styled.p`
  font-family: "Poppins";
  color: #fff;
  font-size: 14px;
  text-align: left;
`;

export const PublishDate = styled.p`
  color: #fff};
  width: 100%;
  text-align: end;
`;

export const Link = styled.a`
  text-decoration: none;
`;
