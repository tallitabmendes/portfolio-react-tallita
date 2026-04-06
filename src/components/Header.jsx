import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

/**
 * Componente Header — barra de navegação fixa.
 * Altera aparência no scroll e inclui menu hamburger para mobile.
 */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detecta scroll para aplicar estilo no header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu ao clicar em um link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          &lt;TALLITA /&gt;
        </a>

        {/* Botão hamburger para mobile */}
        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="#sobre" onClick={handleLinkClick}>Sobre</a>
          <a href="#projetos" onClick={handleLinkClick}>Projetos</a>
          <a href="#contato" onClick={handleLinkClick}>Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
