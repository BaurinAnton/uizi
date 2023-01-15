import Image from "next/image";
import { H2 } from "@components";
import { Wrapper } from "@layout";
import style from "./Venue.module.scss";
import mapsPicture from "@public/images/venue/maps.jpeg";
import telPicture from "@public/images/venue/tel.svg";

export const Venue = () => {
  return (
    <section className={style.venue}>
      <Wrapper>
        <H2>Место проведения</H2>
        <div className={style.contacts}>
          <div className={style.contact}>
            <Image src={telPicture} alt="Телефон" />
            <p className={style.text}>+7 (495) 987-65-30</p>
          </div>
          <div className={style.contact}>
            <Image src={telPicture} alt="Телефон" />
            <p className={style.text}>example@mail.ru</p>
          </div>
          <div className={style.contact}>
            <Image src={telPicture} alt="Телефон" />
            <p className={style.text}>г. Москва Арбат 10</p>
          </div>
        </div>
        <div className={style.maps}>
          <Image
            src={mapsPicture}
            alt="карта"
            width={1248}
            height={400}
            quality={5}
          />
        </div>
      </Wrapper>
    </section>
  );
};
