import Image from "next/image";
import { H2, H3 } from "@components";
import style from "./Speakers.module.scss";

import puctureOne from "./images/1.jpg";
import puctureTwo from "./images/2.jpg";
import puctureThree from "./images/3.jpg";
import { Wrapper } from "@layout";

export const Speakers = () => {
  return (
    <section className={style.speakers}>
      <Wrapper className={style.wrapper}>
        <H2 className={style.h2}>Спикеры</H2>
        <H3 className={style.h3}>
          Это уникальная возможность познакомиться с известными спикерами во
          время нашей трёхдневной конференции
        </H3>
        <ul className={style.listSpeakers}>
          <li className={style.itemSpeaker}>
            <Image
              src={puctureOne}
              alt={"Человек"}
              width={300}
              height={300}
              className={style.pictureSpeaker}
            />
            <p className={style.titleSpeaker}>Баранов Леонид Аврамович</p>
            <p className={style.subTitleSpeaker}>Заведующий кафедрой ИТТСУ</p>
          </li>
          <li className={style.itemSpeaker}>
            <Image
              src={puctureOne}
              alt={"Человек"}
              width={300}
              height={300}
              className={style.pictureSpeaker}
            />
            <p className={style.titleSpeaker}>Баранов Леонид Аврамович</p>
            <p className={style.subTitleSpeaker}>Заведующий кафедрой ИТТСУ</p>
          </li>
          <li className={style.itemSpeaker}>
            <Image
              src={puctureOne}
              alt={"Человек"}
              width={300}
              height={300}
              className={style.pictureSpeaker}
            />
            <p className={style.titleSpeaker}>Баранов Леонид Аврамович</p>
            <p className={style.subTitleSpeaker}>Заведующий кафедрой ИТТСУ</p>
          </li>
          <li className={style.itemSpeaker}>
            <Image
              src={puctureOne}
              alt={"Человек"}
              width={300}
              height={300}
              className={style.pictureSpeaker}
            />
            <p className={style.titleSpeaker}>Баранов Леонид Аврамович</p>
            <p className={style.subTitleSpeaker}>Заведующий кафедрой ИТТСУ</p>
          </li>
          <li className={style.itemSpeaker}>
            <Image
              src={puctureOne}
              alt={"Человек"}
              width={300}
              height={300}
              className={style.pictureSpeaker}
            />
            <p className={style.titleSpeaker}>Баранов Леонид Аврамович</p>
            <p className={style.subTitleSpeaker}>Заведующий кафедрой ИТТСУ</p>
          </li>
          <li className={style.itemSpeaker}>
            <Image
              src={puctureOne}
              alt={"Человек"}
              width={300}
              height={300}
              className={style.pictureSpeaker}
            />
            <p className={style.titleSpeaker}>Баранов Леонид Аврамович</p>
            <p className={style.subTitleSpeaker}>Заведующий кафедрой ИТТСУ</p>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
};
