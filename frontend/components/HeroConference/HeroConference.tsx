import Image from "next/image";
import { Wrapper } from "@layout";

import style from "./HeroConference.module.scss";

import background from "@public/images/rootConference/image.jpg";

export const HeroConference = () => {
  return (
    <section className={style.heroConference}>
      <Image
        src={background}
        alt={""}
        layout="fill"
        objectFit="cover"
        quality={80}
      />
      <Wrapper className={style.wrapper}>
        <div className={style.data}>27 мая 2021 года</div>
        <div className={style.description}>
          Международная научно-практическая конференция «Комплексное
          взаимодействие лингвистических и выпускающих кафедр в техническом
          вузе»
        </div>
        <button className={style.button}>Узнать больше</button>
      </Wrapper>
    </section>
  );
};
