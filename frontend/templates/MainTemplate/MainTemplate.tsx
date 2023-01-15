import { Wrapper } from "@layout";
import { Header, HeroConference, Footer } from "@components";
import { UpcomingСonferences } from "./components";
import { useWindowSize } from "@hooks";

import style from "./MainTemplate.module.scss";

export const MainTemplate = () => {
  const windowSize = useWindowSize()?.width;

  return (
    <>
      <Header />
      <main>
        {windowSize && windowSize < 768 ? (
          <div className={style.heroConference}>
            <HeroConference />
          </div>
        ) : (
          <Wrapper>
            <div className={style.heroConference}>
              <HeroConference />
            </div>
          </Wrapper>
        )}
        <Wrapper>
          <div className={style.upcomingСonferences}>
            <UpcomingСonferences />
          </div>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
};
