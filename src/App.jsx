import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

/**
 * App.jsx — Componente principal do portfólio.
 * Reúne todos os componentes: Header, Hero, About, Projects e Footer.
 */
function App() {
  // Estado para efeito de typing no hero
  const [displayText, setDisplayText] = useState("");

  const titles = useMemo(
    () => [
      "Desenvolvedora Back-end em evolução.",
      "Estudante de Tecnologia em Sistema para Internet.",
    ],
    []
  );

  // Efeito de digitação rotativa
  useEffect(() => {
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const current = titles[titleIndex];

      if (!isDeleting) {
        setDisplayText(current.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
        timeout = setTimeout(type, 80);
      } else {
        setDisplayText(current.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
        }
        timeout = setTimeout(type, 40);
      }
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, [titles]);

  // Gera partículas para o background do hero
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      duration: `${Math.random() * 8 + 6}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  return (
    <>
      {/* Header fixo com navegação */}
      <Header />

      {/* Hero Section */}
      <section className="hero">
        {/* Partículas animadas */}
        <div className="particles">
          {particles.map((p) => (
            <span
              key={p.id}
              className="particle"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDuration: p.duration,
                animationDelay: p.delay,
                opacity: p.opacity,
              }}
            />
          ))}
        </div>

        <div className="heroContent">
          <p className="heroGreeting">Olá, me chamo</p>
          <h1 className="heroName">Tallita Batista Mendes</h1>
          <p className="heroTitle">
            {displayText}
            <span className="cursor"></span>
          </p>
          <div className="heroButtons">
          <a href="#projetos" className="heroCta">
            Ver Projetos
          </a>
          <a href="#contato" className="heroCta">
            Contato
          </a>
          </div>
        </div>

        <div className="scrollIndicator">
          <span>scroll</span>
          <div className="scrollArrow"></div>
        </div>
      </section>

      {/* Seções do portfólio */}
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
