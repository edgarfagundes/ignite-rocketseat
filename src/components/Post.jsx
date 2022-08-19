import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/edgarfagundes.png"
          />
          <div className={styles.authorInfo}>
          <strong>Edgar Fagundes</strong>
          <span>Java Developer</span>
          </div>
        </div>

        <time title="15 de agosto às 15:27h" dateTime="2022-08-12 15:27:38">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>"Olá tudo bem?"</p>
        <p>"Bom dia"</p>
        <p><a href="perfil ">Visitar Perfil</a></p>
      </div>
    </article>
  );
}
