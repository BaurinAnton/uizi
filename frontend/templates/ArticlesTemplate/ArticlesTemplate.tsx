import { Footer, H2, Header, CardArticles } from "@components";
import { Section, Wrapper } from "@layout";
import { TArticles } from "@types";
import style from "./ArticlesTemplate.module.scss";

type TProps = {
  articles: TArticles;
};

export const ArticlesTemplate = ({ articles }: TProps) => {
  return (
    <>
      <Header />
      <main>
        <Section className={style.articlesTemplate}>
          <Wrapper className={style.wrapper}>
            <H2>Все статьи</H2>
            <div className={style.articles}>
              {articles.data.map((article) => (
                <CardArticles
                  key={article.attributes.slug}
                  article={article.attributes}
                />
              ))}
            </div>
          </Wrapper>
        </Section>
      </main>
      <Footer />
    </>
  );
};
