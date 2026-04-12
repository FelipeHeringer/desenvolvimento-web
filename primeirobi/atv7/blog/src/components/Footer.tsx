import './styles/Footer.css'

interface FooterProps {
    content: string,
}

export default function Footer({ content }: FooterProps) {
    return (
        <footer className="page-footer">
            <p>{content}</p>
        </footer>
    )
}