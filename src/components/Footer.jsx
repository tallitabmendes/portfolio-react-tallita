import styles from "../styles/Footer.module.css";

/**
 * Componente Footer — rodapé com links sociais e créditos.
 */
function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contato</h2>
        <p className={styles.subtitle}>Tem um projeto em mente ou quer trocar uma ideia sobre tecnologia? Ficarei feliz em conversar com você!</p>

        <div className={styles.links}>
          <a
            href="https://github.com/tallitabmendes"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tallitabmendes"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
        </div>

        <div className={styles.copy}>
          <p>&copy; {new Date().getFullYear()} Tallita Batista. Todos os direitos reservados.</p>
          <p className={styles.tech}>Feito com React + Vite ⚡</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
