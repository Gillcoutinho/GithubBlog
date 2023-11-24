import seta from "../../assets/seta.svg";
import Iconseta from "../../assets/Iconseta.svg";
import git from "../../assets/git.svg";
import calender from "../../assets/calender.svg";
import coments from "../../assets/coments.svg";
import styles from "./styles.module.css";

export function Postinfo(props) {
  
  const date = props?.issueDetail?.create_at ? new Date(props.issueDetail.create_at) : ' ';
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = date ? new Intl.DateTimeFormat('pt-BR', options).format(date) : ' ';
  console.log(date)
  console.log(formattedDate)

  return (
    <div className={styles.content}>
      <section className={styles.profile}>
        <div className={styles.links}>
          <a href="/">
            <img src={Iconseta} width={16} height={16} />
            VOLTAR
          </a>
          <a href={"https://github.com/Gillcoutinho"} target="_blank">
            VER O GITHUB
            <img src={seta} width={16} height={16} />
          </a>
        </div>
        <br></br>
        <div className={styles.titulo}>
           {props?.issueDetail?.title}
          <ul>
            <li>
              <img className={styles.img} src={git} width={16} height={16} />
              GillCoutinho
            </li>
            <li>
              <img
                className={styles.img}
                src={calender}
                width={16}
                height={16}
              />
              {props?.issueDetail?.formattedDate}
            </li>
            <li>
              <img
                className={styles.img}
                src={coments}
                width={16}
                height={16}
              />
              {props?.issueDetail?.comments}
            </li>
          </ul>
        </div>
      </section>
      <div className={styles.container}>{props?.issueDetail?.body}</div>
    </div>
  );
}
