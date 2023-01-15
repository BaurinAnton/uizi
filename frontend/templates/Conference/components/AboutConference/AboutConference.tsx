import Image from "next/image";
import { H2, H3 } from "@components";
import { Wrapper } from "@layout";
import picture from "@public/images/conference/aboutConference.jpg";

import style from "./AboutConference.module.scss";

export const AboutConference = () => {
  return (
    <section>
      <Wrapper className={style.aboutConference}>
        <H2 className={style.h2}>О конференции</H2>
        <H3 className={style.h3}>
          Конференция организована с целью выявления интеграционных процессов
          междисциплинарного уровня лингвистических и выпускающих кафедр для
          повышения качества подготовки специалистов технических вузов.
        </H3>
        <div className={style.pictures}>
          <Image
            src={picture}
            alt={"о конференции"}
            className={style.picture}
          />
          <Image
            src={picture}
            alt={"о конференции"}
            className={style.picture}
          />
          <Image
            src={picture}
            alt={"о конференции"}
            className={style.picture}
          />
        </div>
      </Wrapper>
    </section>
  );
};
