import Link from "./Link"

export function Navbar() {
    return (
        <nav className="scroll-smooth">
            <ul className="flex space-x-5">
                <Link text="Empreendimentos" href="#portfolio"/>
                <Link text="Serviços" href="#services"/>
                <Link text="Contato" href="#contact"/>
            </ul>
        </nav>
    );
}