import Image from "next/image";

import style from "./CardConference.module.scss";

type TProps = {
  conference: { src: string; alt: string; title: string; data: string };
  id: number;
};

export const CardConference: React.FC<TProps> = ({ conference, id }) => (
  <div className={style.card} key={`${conference.title}_${id}`}>
    <Image width={260} height={177} src={conference.src} alt={conference.alt} />
    <h3 className={style.title}>{conference.title}</h3>
    <div className={style.date}>{conference.data}</div>
  </div>
);
