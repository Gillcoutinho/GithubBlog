import styles from "./styles.module.css";
import { useState } from 'react';

export function Publication() {
 const [searchIssue, setSearchIssue] = useState();

  return (
    <div className={styles.wrapper}>
      <section className={styles.containerPublication}>
        <div className={styles.headerPublication}>
          <p>Publicações</p>
          <span>6 Publicações</span>
        </div>

        <input value={searchIssue} type="text" onChange={(event) => setSearchIssue(event.target.value)} placeholder="Buscar Conteúdo" />

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h6>JavaScript data types and data structures</h6>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have.
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h6>JavaScript data types and data structures</h6>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
            <h6>JavaScript data types and data structures</h6>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
            <h6>JavaScript data types and data structures</h6>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
            <h6>JavaScript data types and data structures</h6>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
            <h6>JavaScript data types and data structures</h6>
              <span>Há 1 dia</span>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
