import Image from "next/image";
import { Footer, H2, Header } from "@components";
import { Section, Wrapper } from "@layout";
import style from "./ArticleTemplate.module.scss";
import { getLinkImage, mdToJsx } from "@utils";
import Link from "next/link";
import { TArticle } from "@types";

type TProps = {
  articles: TArticle;
};

export const ArticleTemplate = ({ articles }: TProps) => {
  return (
    <>
      <Header />
      <Wrapper className={style.wrapper}>
        <Section>
          <H2 className={style.title}>{articles.title}</H2>
          <article className={style.article}>
            <div className={style.description}>
              {mdToJsx(articles.description)}
            </div>
          </article>
          <Link className={style.link} href={`http://localhost:3000/articles`}>
            К всем статьям
          </Link>
        </Section>
      </Wrapper>
      <Footer />
    </>
  );
};
