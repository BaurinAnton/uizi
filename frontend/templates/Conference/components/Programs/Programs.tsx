import { H2, H3 } from "@components";
import { Wrapper } from "@layout";
import style from "./Programs.module.scss";

export const Programs = () => {
  return (
    <section className={style.programs}>
      <Wrapper>
        <H2 className={style.h2}>Программа</H2>
        <H3>27 мая / пятница</H3>
        <ul className={style.listPrograms}>
          <li className={style.itemPrograms}>
            <span className={style.timeProgram}>8:00 - 8:30</span>
            <span className={style.nameProgram}>Открытие конференции</span>
          </li>
          <li className={style.itemPrograms}>
            <span className={style.timeProgram}>8:00 - 8:30</span>
            <span className={style.nameProgram}>Открытие конференции</span>
          </li>
          <li className={style.itemPrograms}>
            <span className={style.timeProgram}>8:00 - 8:30</span>
            <span className={style.nameProgram}>Открытие конференции</span>
          </li>
          <li className={style.itemPrograms}>
            <span className={style.timeProgram}>8:00 - 8:30</span>
            <span className={style.nameProgram}>Открытие конференции</span>
          </li>
          <li className={style.itemPrograms}>
            <span className={style.timeProgram}>8:00 - 8:30</span>
            <span className={style.nameProgram}>Открытие конференции</span>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
};
