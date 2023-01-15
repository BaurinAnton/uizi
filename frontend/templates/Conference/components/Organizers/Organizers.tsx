import Image from "next/image";
import { H2 } from "@components";
import { Wrapper } from "@layout";
import pictureRut from "@public/images/organizers/rut.png";
import style from "./Organizers.module.scss";

export const Organizers = () => {
  return (
    <section className={style.organizers}>
      <Wrapper className={style.wrapper}>
        <H2>Организаторы и партнеры</H2>
        <ul className={style.listOrganizers}>
          <li className={style.itemOrganizers}>
            <Image src={pictureRut} alt={"РУТ (МИИТ)"} />
            <p className={style.descriptionOrganizers}>РУТ (МИИТ)</p>
          </li>
          <li className={style.itemOrganizersOrganizers}>
            <Image src={pictureRut} alt={"РУТ (МИИТ)"} />
            <p className={style.descriptionOrganizers}>РУТ (МИИТ)</p>
          </li>
          <li className={style.itemOrganizersOrganizers}>
            <Image src={pictureRut} alt={"РУТ (МИИТ)"} />
            <p className={style.descriptionOrganizers}>РУТ (МИИТ)</p>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
};
