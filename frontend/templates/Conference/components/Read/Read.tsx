import Link from "next/link";
import Image from "next/image";
import { H2 } from "@components";
import { Wrapper } from "@layout";
import style from "./Read.module.scss";
import picture from "@public/images/read/read.jpg";

export const Read = () => {
  return (
    <section className={style.read}>
      <Wrapper>
        <H2>Читать</H2>
        <div className={style.readList}>
          <Link href={""} className={style.readLink}>
            <Image src={picture} alt={"Читать"} className={style.readPicture} />
            <p className={style.description}>
              Читать информацию для участников конференции:
            </p>
          </Link>
          <Link href={""} className={style.readLink}>
            <Image src={picture} alt={"Читать"} className={style.readPicture} />
            <p className={style.description}>
              Читать информацию для участников конференции:
            </p>
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};
