import logoBlog from '../../assets/logoGitblog.png';
import styles from './styles.module.css';

export function Postlink(){
    return(
        <header className={styles.header}>
            <img className={styles.imageHeader} src={logoBlog} alt="blog" />
        </header>

    )
}