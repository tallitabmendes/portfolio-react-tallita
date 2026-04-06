/**
 * Array de objetos contendo os projetos do portfólio.
 * Cada objeto possui: id, nome, descricao, tecnologias (array) e link.
 * Este arquivo é importado pelo componente Projects.jsx
 * para renderização dinâmica com .map()
 */
const projetos = [
    {
        nome: "Gestão de Vendas",
        descricao: "Plataforma para gerenciamento de inventário e vendas automotivas.",
        tecnologias: ["Django", "Python"],
        link: "https://github.com/tallitabmendes/gestao-vendas",
        icone: "🏢"
    },
    {
        nome: "Gestão Financeira",
        descricao: "Sistema para controle de fluxo de caixa e conciliação bancária.",
        tecnologias: ["Python", "Flask"],
        link: "https://github.com/tallitabmendes/gestao-financeira",
        icone: "📊"
    },
    {
        nome: "API de Estoque",
        descricao: "Integração para controle de produtos e movimentação de armazém.",
        tecnologias: ["Node.js", "Express"],
        link: "https://github.com/tallitabmendes/api-estoque",
        icone: "📦"
    },
    {
        nome: "Painel Contábil",
        descricao: "Visualização de indicadores financeiros e relatórios executivos.",
        tecnologias: ["React", "Tailwind"],
        link: "https://github.com/tallitabmendes/dashboard-contabil",
        icone: "📈"
    }
];

// O nome aqui deve ser EXATAMENTE igual ao nome da variável lá em cima
export default projetos;
