import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { INews, Tweet } from "../interfaces/interfaces";

interface NewsProps {
  allNews: INews[] | undefined;
  sentment: string;
  tweets: Tweet[];
  setAllNews: Dispatch<SetStateAction<INews[]>>;
  setTweets: Dispatch<SetStateAction<Tweet[]>>;
  setSentment: Dispatch<SetStateAction<string>>;
}

interface Props {
  children: React.ReactNode;
}

const News = createContext<NewsProps>({} as NewsProps);

export const NewsProvider: React.FC<Props> = ({ children }) => {
  const [allNews, setAllNews] = useState<INews[]>([]);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [sentment, setSentment] = useState<string>("");

  return (
    <News.Provider
      value={{
        allNews,
        setAllNews,
        tweets,
        setTweets,
        sentment,
        setSentment,
      }}
    >
      {children}
    </News.Provider>
  );
};

export function useNews(): NewsProps {
  const context = useContext(News);

  if (!context) {
    throw new Error(
      "useNews must be used within an CaptarProjetoFornecedorProvider"
    );
  }

  return context;
}
