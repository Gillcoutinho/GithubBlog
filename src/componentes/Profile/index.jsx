import avatar from "../../assets/avatar.jpg";
import seta from "../../assets/seta.svg";
import git from "../../assets/git.svg";
import home from "../../assets/home.svg";
import people from "../../assets/people.svg";
import styles from "./styles.module.css";

export function Profile(props) {
  return (
    <div className={styles.content}>
      <section className={styles.profile}>
        <img src={props.userInfo.avatar_url} width={148} height={148} />
        <div className={styles.titulo}>
          <h3>{props.userInfo.name}</h3>
          <h2 className={styles.subtitulo}>{props.userInfo.bio}</h2>

          <ul>
            <li>
              <img className={styles.img} src={git} width={16} height={16} />
              {props.userInfo.login}
            </li>
            <li>
              <img className={styles.img} src={home} width={16} height={16} />
              Sinthoresp
            </li>
            <li>
              <img className={styles.img} src={people} width={16} height={16} />
              {props.userInfo.followers}
            </li>
          </ul>
        </div>
        <a href={props.userInfo.html_url} target="_blank">
          GITHUB
          <img src={seta} width={16} height={16} />
        </a>
      </section>
    </div>
  );
}
