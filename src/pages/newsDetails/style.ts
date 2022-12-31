import styled from "styled-components";
import { colors } from "../../styles/colors";

interface SentmentProps {
  color: string;
}

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.PRETO_PRINCIPAL};
  min-height: 100vh;
  padding: 0 6rem;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 48px;
  margin: 30px 0;
  color: ${(props) => props.theme.BRANCO};
  font-family: "Jacques Francois", serif;
`;

export const NewsInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.BRANCO};
  font-size: 32px;
  margin-top: 10rem;
`;

export const ContainerNotice = styled.div`
  width: 100%;
  min-height: 560px;
  display: flex;
  border-radius: 6px;
  padding: 44px 33px;
  background-color: ${(props) => props.theme.CINZA_ESCURO};
  margin: 3rem 0;
`;

export const NewsImage = styled.img`
  height: 450px;
  width: 380px;
  margin-right: 35px;
  border: solid 5px ${colors.CINZA_MEDIO};
  border-radius: 4px;
`;

export const NewsTextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    width: 100%;
    color: ${colors.BRANCO};
    font-size: 32px;
    text-align: justify;
  }
`;

export const ContainerReadMoreButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonReadMore = styled.a`
  border: none;
  border-radius: 6px;
  width: 250px;
  padding: 0 15px;
  text-align: center;
  background-color: ${(props) => props.theme.AZUL};
  color: #fff;
  font-size: 32px;
  height: 70px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerSentmetAnalisys = styled.div`
  width: 90%;
  height: 150px;
  border: solid 3px ${(props) => props.theme.CINZA_MEDIO};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  margin: 0 auto;
  color: ${(props) => props.theme.BRANCO};
`;

export const SentmentText = styled.div<SentmentProps>`
  color: ${(props) => props.color};
  margin-left: 15px;
  font-weight: bold;
`;

export const ContainerTweets = styled.div`
  display: flex;
  gap: 10rem;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  margin-bottom: 10rem;

  @media (max-width: 1850px) {
    justify-content: center;
  }
`;

export const CardTweet = styled.div`
  margin-top: 4rem;
  width: 40%;
  padding: 15px;
  background-color: ${(props) => props.theme.CINZA_ESCURO};
  display: flex;
  border-radius: 6px;
  color: ${(props) => props.theme.BRANCO};

  img {
    border-radius: 50%;
    border: solid 1px ${(props) => props.theme.BRANCO};
    width: 90px;
    height: 90px;
    margin-right: 20px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    margin-top: 10px;
    text-align: left;
  }

  p {
    text-align: justify;
    font-size: 18px;
  }
`;

export const TweetsNotFound = styled.h1`
  color: ${(props) => props.theme.BRANCO};
`;
