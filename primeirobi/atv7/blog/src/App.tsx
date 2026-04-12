import ArticleCard from "./components/ArticleCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostRelatedCard from "./components/PostRelatedCard";
import praiaBonita from "./assets/praia_bonita.jpg";
import petropolis from "./assets/petropolis.jpg";
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <ArticleCard
          title="Título do Artigo"
          date="15 de agosto de 2025"
          content={["O Nordeste do Brasil é conhecido por abrigar algumas das praias mais belas do mundo.",
            "Destino como Fernando de Noronha, Porto de Galinhas, Praia do Espelho (Bahia) e Morro Branco (Ceará) "]}
          imageUrl={praiaBonita} />
      </main>
      <aside className="aside">
        <PostRelatedCard title="Post Relacionado 1" imageUrl={petropolis} />
        <PostRelatedCard title="Post Relacionado 2" imageUrl={praiaBonita} />
      </aside>
      <Footer content="Copyright © 2025 MinhaEmpresa, Inc." />
    </div>
  )
}