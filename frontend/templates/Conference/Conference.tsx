import { Footer, Header, HeroConference } from "@components";
import { useWindowSize } from "@hooks";
import {
  AboutConference,
  CountConference,
  Speakers,
  Programs,
  ApplicationConference,
  Read,
  Venue,
  Organizers,
} from "./components";
import style from "./Conference.module.scss";

export const Conference = () => {
  const windowSize = useWindowSize()?.width;

  return (
    <>
      <Header />
      <main>
        {/* TODO: HeroConference на мобилке враппер убрать */}
        <div className={style.heroConference}>
          <HeroConference />
          <AboutConference />
          <CountConference />
          <Organizers />
          <Speakers />
          <Programs />
          <Read />
          <ApplicationConference />
          <Venue />
        </div>
      </main>
      <Footer />
    </>
  );
};
