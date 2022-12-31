import axios from "axios";
import React, { useState } from "react";
import { hashString } from "react-hash-string";
import "../../App.css";
import { Header, Subtitle } from "../../components/index";
import { LoadingSpinner } from "../../components/loadingSpinner";
import News from "../../components/news";
import { useNews } from "../../hooks/news";
import {
  Categories,
  CategoriesToSearch,
  CategoriesValue,
  DefaultComponentProps,
  INewsResponse,
} from "../../interfaces/interfaces";
import {
  Category,
  Container,
  ContainerCategories,
  ContainerNews,
  Title,
} from "./style";

function Home({ toggleTheme }: DefaultComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState<Categories>("null");
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState<INewsResponse[]>();
  const { setAllNews } = useNews();

  function getCategoryValue(category: Categories) {
    return CategoriesToSearch[CategoriesValue[category]];
  }

  function formatDate(date: Date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  async function searchNews(category: Categories) {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/api/noticias/${getCategoryValue(category)}`,
        {
          headers: {
            "Content-Type": "	application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      setNews(
        data.map((notice: any) => {
          const iterableNotice = notice.news;

          return {
            news: {
              id: hashString(
                iterableNotice.url ? iterableNotice?.url : iterableNotice?.title
              ),
              image: iterableNotice?.image,
              title: iterableNotice?.title,
              origin: iterableNotice?.source,
              publishDate: formatDate(new Date(iterableNotice?.published_at)),
              url: iterableNotice?.url,
              description: iterableNotice?.description,
            },
            tweets: notice.tweets,
            generalSentmentAnalisys: notice.generalSentmentAnalisys,
          };
        })
      );
      setAllNews(
        data.map((notice: any) => {
          const iterableNotice = notice.news;
          return {
            id: hashString(
              iterableNotice.url ? iterableNotice?.url : iterableNotice?.title
            ),
            image: iterableNotice?.image,
            title: iterableNotice?.title,
            origin: iterableNotice?.source,
            publishDate: formatDate(new Date(iterableNotice?.published_at)),
            url: iterableNotice?.url,
            description: iterableNotice?.description,
          };
        })
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function onSelectCategory(category: Categories) {
    setSelectedCategory(category);
    searchNews(category);
  }

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <Title>últimas notícias</Title>
      <Subtitle text="Categorias" />
      <ContainerCategories>
        <Category
          isActive={selectedCategory === "geral"}
          onClick={() => onSelectCategory("geral")}
        >
          Geral
        </Category>
        <Category
          isActive={selectedCategory === "negocios"}
          onClick={() => onSelectCategory("negocios")}
        >
          Negócios
        </Category>
        <Category
          isActive={selectedCategory === "entretenimento"}
          onClick={() => onSelectCategory("entretenimento")}
        >
          Entretenimento
        </Category>
        <Category
          isActive={selectedCategory === "saude"}
          onClick={() => onSelectCategory("saude")}
        >
          Saúde
        </Category>
        <Category
          isActive={selectedCategory === "ciencia"}
          onClick={() => onSelectCategory("ciencia")}
        >
          Ciência
        </Category>
        <Category
          isActive={selectedCategory === "esportes"}
          onClick={() => onSelectCategory("esportes")}
        >
          Esportes
        </Category>
        <Category
          isActive={selectedCategory === "tecnologia"}
          onClick={() => onSelectCategory("tecnologia")}
        >
          Tecnologia
        </Category>
      </ContainerCategories>
      {isLoading && <LoadingSpinner />}
      {!isLoading && selectedCategory !== "null" && (
        <>
          <Subtitle text={CategoriesValue[selectedCategory]} />
          <ContainerNews>
            {news?.map((notice) => (
              <News
                news={notice.news}
                tweets={notice.tweets}
                sentment={notice.generalSentmentAnalisys}
              />
            ))}
          </ContainerNews>
        </>
      )}
    </Container>
  );
}

export default Home;
