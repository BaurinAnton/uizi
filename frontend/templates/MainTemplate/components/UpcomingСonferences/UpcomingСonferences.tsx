import Image from "next/image";
import Link from "next/link";

import { CardConference } from "@components";

import { UPCOMING_СONFERENCES, COUNT_CARD_CONFERENCE } from "./constants";

import style from "./UpcomingСonferences.module.scss";

export const UpcomingСonferences = () => {
  return (
    <div className={style.upcomingСonferences}>
      <h2 className={style.title}>Ближайшие конференции</h2>
      <div className={style.conferences}>
        {UPCOMING_СONFERENCES.map((conference, id) => {
          if (id < COUNT_CARD_CONFERENCE)
            return (
              <CardConference
                key={`${conference.title}_${id}`}
                conference={conference}
                id={id}
              />
            );
        })}
      </div>
      <div className={style.otherConference}>
        <Link className={style.otherConferenceLink} href={"/"}>
          Посмотреть все конференции {">"}{" "}
        </Link>
      </div>
    </div>
  );
};
