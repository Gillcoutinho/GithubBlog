import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { getRepoIssues } from "../../services/get";
import { useNavigate } from "react-router-dom";


export function Publication() {
  const [searchIssue, setSearchIssue] = useState("");
  const [issues, setIssues] = useState([]);
  const navigate = useNavigate();


  function goToIssueDetail(issue) {
    return navigate(`/issue/${issue.number}`,{ replace: true });
  }

  async function handleGetIsssues() {
    const response = await getRepoIssues(
      searchIssue,
      "gillcoutinho",
      "GithubBlog"
    );

    if (response) {
      setIssues(response.items);
    }
  }

  useEffect(() => {
    if (searchIssue.length > 4) {
      handleGetIsssues();
    }
  }, [searchIssue]);

  return (
    <div className={styles.wrapper}>
      <section className={styles.containerPublication}>
        <div className={styles.headerPublication}>
          <p>Publicações</p>
          <span>{issues.length} Publicações</span>
        </div>

        <input
          value={searchIssue}
          type="text"
          onChange={(event) => setSearchIssue(event.target.value)}
          placeholder="Buscar Conteúdo"
        />

        <div className={styles.cardContainer}>
          {issues?.map((issue) => {
            return (
              <div onClick={()=> goToIssueDetail(issue)} key={issue.number} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h6>{issue.title}</h6>
                  <span>{issue.updated_at}</span>
                </div>
                <p>{issue.body}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
