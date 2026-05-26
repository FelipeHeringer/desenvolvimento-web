import { RoundedLocation, RoundedMail, RoundedPhone } from "../../../assets/Icons"
import { ContactInformation } from "../ContactInformation"
import { FormDropDown } from "../FormDropdown"
import { FormInput } from "../FormInput"
import { FormLabel } from "../FormLabel"
import { FormTextArea } from "../FormTextArea"

export default function ContactInformationSection() {
    const informations = [
        { icon: <RoundedPhone />, title: "Telefone", description: "+55 (45) 99813-0054" },
        { icon: <RoundedMail />, title: "E-mail", description: "contato@hrnorte.com.br" },
        { icon: <RoundedLocation />, title: "Endereço", description: "Av. Beira Mar Norte, 1200. Centro, Florianópolis - SC" },
    ]

    return (
        <section className="flex flex-col gap-12 py-12 bg-off-white container">
            {/* Contact Informations */}
            <div className="flex flex-col gap-8">
                <h3 className="font-family-primary font-bold text-h2">Entre em Contato</h3>
                {informations.map((information) => (
                    <ContactInformation icon={information.icon} title={information.title} description={information.description} />
                ))}
                <div className="flex flex-col py-6 px-6 bg-[#F7F3F1] rounded-lg shadow-sm gap-3">
                    <p className="font-family-primary font-bold text-body">Horário de Atendimento</p>
                    <div className="flex justify-between">
                        <p className="font-family-primary text-sm-custom text-[#474741]">Segunda - Sexta</p>
                        <p className="font-family-primary text-sm-custom text-[#474741]">09:00 - 18:00</p>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between">
                        <p className="font-family-primary text-sm-custom text-[#474741]">Sábado / Domingo</p>
                        <p className="font-family-primary text-sm-custom text-[#474741]">Fechado</p>
                    </div>
                </div>
            </div>
            {/* Contact Form  */}
            <form action="" className="flex flex-col gap-6 py-8 px-8 bg-[#FFFFFF] rounded-lg">
                <h4 className="font-family-primary font-bold text-charcoal text-h3">Envie uma Mensagem</h4>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <FormLabel title={"NOME COMPLETO"} />
                        <FormInput placeholder={"Seu Nome"} type={"name"} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <FormLabel title={"E-MAIL"} />
                        <FormInput placeholder={"seu@email.com"} type={"email"} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <FormLabel title={"ASSUNTO"} />
                        <FormDropDown icon={""} values={['Novo Projeto', ]} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <FormLabel title={"MENSAGEM"} />
                        <FormTextArea rows={3} placeholder={"Como podemos ajudar?"} />
                    </div>
                    <button className="bg-[#795920] py-4 rounded-lg shadow-sm text-off-white text-body font-bold font-family-primary">ENVIAR MENSAGEM</button>
                </div>
            </form>
        </section>
    )
}