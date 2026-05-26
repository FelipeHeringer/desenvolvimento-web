import Link from "./Link"

export function Navbar() {
    return (
        <nav >
            <ul className="flex space-x-5">
                <Link text="Empreendimentos"/>
                <Link text="Sobre" />
                <Link text="Serviços"/>
                <Link text="Contato" />
            </ul>
        </nav>
    );
}