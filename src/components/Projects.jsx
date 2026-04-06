import { useEffect, useRef } from "react";
import projects from "../data/projects";
import styles from "../styles/Projects.module.css";

/**
 * Componente Projects — COMPONENTE OBRIGATÓRIO
 * Importa o array de projetos de src/data/projects.js
 * e renderiza dinamicamente cada card usando .map()
 */
function Projects() {
  const sectionRef = useRef(null);

  // Animação de entrada ao scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animate}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projetos" className={styles.projects} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles.animate}`}>Projetos</h2>

        {/* Renderização dinâmica com .map() — REQUISITO OBRIGATÓRIO */}
        <div className={styles.grid}>
          {projects.map((project) => (
            <article
              key={project.id}
              className={`${styles.card} ${styles.animate}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{project.icone}</span>
                <h3 className={styles.cardTitle}>{project.nome}</h3>
              </div>

              <p className={styles.cardDesc}>{project.descricao}</p>

              {/* Tecnologias renderizadas dinamicamente */}
              <div className={styles.techs}>
                {project.tecnologias.map((tech, index) => (
                  <span key={index} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Ver no GitHub →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
