import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../App.css";
import { Header, Subtitle } from "../../components";
import { DefaultComponentProps, INews } from "../../interfaces/interfaces";
import { useNews } from "../../hooks/news";
import profileImage from "../../assets/tweet-profile.png";
import defaultImage from "../../assets/default-news.jpeg";
import {
  ButtonReadMore,
  CardTweet,
  Container,
  ContainerNotice,
  ContainerReadMoreButton,
  ContainerSentmetAnalisys,
  ContainerText,
  ContainerTweets,
  NewsImage,
  NewsInfos,
  NewsTextContent,
  SentmentText,
  Title,
  TweetsNotFound,
} from "./style";
import { colors } from "../../styles/colors";

function NewsDetails({ toggleTheme }: DefaultComponentProps) {
  const [selectedNews, setSelectedNews] = useState<INews>({} as INews);
  const params = useParams();
  const navigate = useNavigate();
  const { allNews, sentment, tweets } = useNews();

  useEffect(() => {
    const newsFound = allNews?.find((news) => news.id.toString() === params.id);
    if (newsFound) setSelectedNews(newsFound);
    else navigate("/home");
  }, [allNews, navigate, params]);

  function getSentmentColor() {
    if (sentment === "Positivo") return colors.VERDE;
    if (sentment === "Negativo") return colors.VERMELHO;
    if (sentment === "Neutro") return colors.AMARELO;
    return colors.VERDE;
  }

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      {selectedNews && (
        <>
          <Title>{`"${selectedNews.title}"`}</Title>
          <NewsInfos>
            <span>Fonte: {selectedNews.origin}</span>
            <span>Publicado em: {selectedNews.publishDate}</span>
          </NewsInfos>
          <ContainerNotice>
            <NewsImage src={selectedNews.image || defaultImage} />
            <NewsTextContent>
              <p>{selectedNews.description}</p>
              <ContainerReadMoreButton>
                <ButtonReadMore target="_blank" href={selectedNews.url}>
                  VER MAIS
                </ButtonReadMore>
              </ContainerReadMoreButton>
            </NewsTextContent>
          </ContainerNotice>
          <Subtitle text="Principais tweets sobre o assunto" />
          {tweets.length ? (
            <ContainerSentmetAnalisys>
              Os tweets sobre esse assunto são{" "}
              <SentmentText color={getSentmentColor()}>{sentment}</SentmentText>
            </ContainerSentmetAnalisys>
          ) : (
            <TweetsNotFound>
              Não foram encontrados tweets sobre essa notícia
            </TweetsNotFound>
          )}
          <ContainerTweets>
            {tweets.map((tweet) => (
              <CardTweet>
                <img src={profileImage} alt="tweet" />
                <ContainerText>
                  {/* <h2>Lucas</h2> */}
                  <p>{tweet.text}</p>
                </ContainerText>
              </CardTweet>
            ))}
          </ContainerTweets>
        </>
      )}
    </Container>
  );
}

export default NewsDetails;
