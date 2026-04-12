import './styles/Header.css'

export default function Header() {
    return (
        <header className="page-header">
            <h1 className="title">Meu Blog de Viagens</h1>
            <nav className="navbar">
                <ul className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Ajuda</a>
                    <a href="#">Contato</a>
                </ul>
            </nav>
        </header>
    )
}