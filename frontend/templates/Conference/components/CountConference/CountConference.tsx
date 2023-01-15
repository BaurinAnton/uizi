import Image from "next/image";
import { Wrapper } from "@layout";

import style from "./CountConference.module.scss";

import background from "@public/images/conference/countConference.jpg";

export const CountConference = () => {
  return (
    <section className={style.countConference}>
      <Image
        src={background}
        alt={""}
        layout="fill"
        objectFit="cover"
        quality={80}
        className={style.backgroundImage}
      />
      <Wrapper>
        <ul className={style.list}>
          <li>
            <p className={style.title}>
              32
              <br />
              спикера
            </p>
            <p className={style.subTitle}>
              Профессионалы из индустрии раскажут о самом важном
            </p>
          </li>
          <li>
            <p className={style.title}>
              21
              <br />
              час
            </p>
            <p className={style.subTitle}>
              Трехдневная программа и огромное количество контента
            </p>
          </li>
          <li>
            <p className={style.title}>
              800
              <br />
              гостей
            </p>
            <p className={style.subTitle}>
              Конференция объединяет студентов со всех универов
            </p>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
};
