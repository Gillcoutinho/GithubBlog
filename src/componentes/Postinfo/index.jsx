import seta from "../../assets/seta.svg";
import Iconseta from "../../assets/Iconseta.svg";
import git from "../../assets/git.svg";
import calender from "../../assets/calender.svg";
import coments from "../../assets/coments.svg";
import styles from "./styles.module.css";

export function Postinfo() {
  return (
    <div className={styles.content}>
      <section className={styles.profile}>
        <div className={styles.titulo}>
          <h3>JavaScript data Types and data Structures</h3>
          <ul>
            <li>
              <img className={styles.img} src={git} width={16} height={16} />
              Gill Coutinho
            </li>
            <li>
              <img
                className={styles.img}
                src={calender}
                width={16}
                height={16}
              />
              Há 1 dia
            </li>
            <li>
              <img
                className={styles.img}
                src={coments}
                width={16}
                height={16}
              />
              Comentários
            </li>
          </ul>
        </div>
          <a href="#">
            <img src={Iconseta} width={16} height={16} />
            VOLTAR
          </a>

          <a href="#">
            VER NO GITHUB
            <img src={seta} width={16} height={16} />
        </a>
      </section>
    </div>
  );
}
