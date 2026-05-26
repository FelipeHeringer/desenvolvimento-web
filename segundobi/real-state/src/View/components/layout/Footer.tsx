import { Logo, Mail, Location, Phone, RoundedShare, RoundedWorld } from "../../../assets/Icons";
import { DirectContact } from "../DirectContact";
import Link from "../Link";

export default function Footer() {
    const contacts = [
        {icon: <Phone />, description: "+55 45 99813-0054"},
        {icon: <Mail />, description: "contato@hrnorte.com.br"},
        {icon: <Location  colors={["#D4AF37"]}/>, description: "Cascavel, Brasil"}
    ]

    const currentYear = new Date().getFullYear();

    return (
        <section className="bg-charcoal py-20">
            <div className="container flex flex-col gap-9">
                {/* About the company */}
                <div className="flex flex-col gap-6">
                    <Logo colors={["#C1BEBF", "#C1BEBF", "#C1BEBF"]} />
                    <p className="font-family-primary text-[#858481] text-sm-custom">Elevando padrões com engenharia de precisão e design atemporal. Sua visão transformada em estruturas que marcam gerações.
                    </p>
                    <div className="flex gap-4">
                        <RoundedWorld />
                        <RoundedShare />
                    </div>
                </div>
                {/* Quick Links*/}
                <div className="flex flex-col gap-6">
                    <h4 className="font-family-primary font-bold text-off-white text-[17px]">Links Rápidos</h4>
                    <div className="flex flex-col gap-3 list-none">
                        <Link text={"Empreendimentos"} />
                        <Link text={"Sobre Nós"} />
                        <Link text={"Contato"} />
                        <Link text={"Serviços"} />
                    </div>
                </div>
                {/* Legal */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-family-primary font-bold text-off-white text-[17px]">Legal</h4>
                    <div className="flex flex-col gap-3 list-none">
                        <Link text={"Privacidade"} />
                        <Link text={"Termos de Uso"} />
                        <Link text={"Cookies"} />
                    </div>
                </div>
                {/* Direct Contact*/}
                <div className="flex flex-col gap-6">
                    <h4 className="font-family-primary font-bold text-off-white text-[17px]">Contato Direto</h4>
                    <div className="flex flex-col gap-3">
                        {contacts.map((contact) => (
                            <DirectContact icon={contact.icon} description={contact.description} />
                        ))}
                    </div>
                </div>
                {/* Copyright */}
                <div>
                    <p className="font-family-primary text-[#858481] text-sm-custom">© {currentYear} HRNORTE Construtura e Incorporadora. Todos os direitos
                    reservados.</p>
                </div>
            </div>
        </section>
    )
}