import React from "react";
import "../../App.css";
import { INews, Tweet } from "../../interfaces/interfaces";
import defaultImage from "../../assets/default-news.jpeg";
import { useNavigate } from "react-router-dom";
import { useNews } from "../../hooks/news";
import {
  Container,
  ContainerTexts,
  Image,
  Link,
  OriginText,
  PublishDate,
  Title,
} from "./style";

interface IProps {
  news: INews;
  tweets: Tweet[];
  sentment: string;
}

function News({ news, sentment, tweets }: IProps) {
  const { setSentment, setTweets } = useNews();

  function saveNoticeData() {
    setSentment(sentment);
    setTweets(tweets);
    navigate(`/noticia/${news.id}`);
  }

  const navigate = useNavigate();
  return (
    <Link onClick={() => saveNoticeData()}>
      <Container key={news.id}>
        <Image src={news.image ? news.image : defaultImage} />
        <ContainerTexts>
          <div className="container-title">
            <Title>"{news.title}"</Title>
            <OriginText>{news.origin}</OriginText>
          </div>
          <PublishDate>Publicado em: {news.publishDate}</PublishDate>
        </ContainerTexts>
      </Container>
    </Link>
  );
}

export default News;
