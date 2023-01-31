import { Footer, Header } from "@components";
import { useWindowSize } from "@hooks";
import { TConference } from "@types";
import {
  AboutConference,
  CountConference,
  Speakers,
  Programs,
  ApplicationConference,
  Read,
  Venue,
  Organizers,
  HeroConference,
} from "./components";
import style from "./ConferenceTemplate.module.scss";

type TProps = {
  conference: TConference;
};

export const ConferenceTemplate = ({ conference }: TProps) => {
  return (
    <>
      <Header />
      <main>
        <div className={style.heroConference}>
          <HeroConference
            title={conference.title}
            date={conference.date}
            backgroundPicture={conference.backgroundPicture}
            slug={conference.slug}
          />
          <AboutConference aboutConference={conference.AboutConference} />
          <CountConference countConference={conference.CountConference} />
          <Organizers organizers={conference.Organizers} />
          <Speakers speakers={conference.Speakers} />
          <Programs program={conference.Program} />
          <Read read={conference.Read} />
          <ApplicationConference />
          <Venue venue={conference.Venue} />
        </div>
      </main>
      <Footer />
    </>
  );
};
