import { useEffect, useRef } from "react";
import styles from "../styles/About.module.css";

/**
 * Componente About — seção "Sobre Mim" com informações pessoais
 * e um card visual estilo terminal de código.
 */
function About() {
  const sectionRef = useRef(null);

  // Animação de entrada ao scroll usando Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animate}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className={styles.about} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles.animate}`}>Sobre Mim</h2>

        <div className={styles.grid}>
          {/* Coluna de texto */}
          <div className={`${styles.text} ${styles.animate}`}>
            <p>
              Atuo como <strong>Desenvolvedora Back-end em evolução</strong>, desenvolvimento de software, buscando sempre evoluir.
            </p>
            <p>
              Minha formação em áreas regulamentares me confere um raciocínio
              lógico apurado e uma visão estratégica para o desenvolvimento de
              soluções de software.
            </p>

            <div className={styles.tags}>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>Django</span>
              <span className={styles.tag}>Node.js</span>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>PostgreSQL</span>
              <span className={styles.tag}>Git</span>
            </div>
          </div>

          {/* Card estilo terminal */}
          <div className={`${styles.codeCard} ${styles.animate}`}>
            <div className={styles.codeHeader}>
              <span className={styles.dot} style={{ background: "#ff5f57" }}></span>
              <span className={styles.dot} style={{ background: "#ffbd2e" }}></span>
              <span className={styles.dot} style={{ background: "#28c840" }}></span>
              <span className={styles.fileName}>tallita.js</span>
            </div>
            <pre className={styles.codeBody}>
{`const tallitabmendes = {
  nome: "Tallita Batista",
  titulo: "Desenvolvedora Back-end em evolução",
  formacao: [
    "Desenvolvedora Back-end em evolução",
    "Estudante de Tecnologia em Sistema para Internet."
  ],
  paixao: "Resolver Problemas."
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
