import { Chevron, RoundedLocation, RoundedMail, RoundedPhone } from "../../../assets/Icons"
import { useScreenSize } from "../../../ViewModel/hooks/useScreenSize"
import { Button, ButtonType } from "../Button"
import { ContactInformation } from "../ContactInformation"
import { FormDropDown } from "../FormDropdown"
import { FormInput } from "../FormInput"
import { FormLabel } from "../FormLabel"
import { FormTextArea } from "../FormTextArea"

export default function ContactInformationSection() {
    const screen = useScreenSize();
    const isMobile = screen === 'mobile';

    const informations = [
        { icon: <RoundedPhone />, title: "Telefone", description: "+55 (45) 99813-0054" },
        { icon: <RoundedMail />, title: "E-mail", description: "contato@hrnorte.com.br" },
        { icon: <RoundedLocation />, title: "Endereço", description: "Av. Beira Mar Norte, 1200. Centro, Florianópolis - SC" },
    ]

    const subjects = ['Novo Projeto', 'Visitar Empreendimento', 'Solicitar Orçamento', 'Dúvidas sobre Financiamento', 'Outros']

    return (
        <section className="py-12 bg-off-white">
            <div className={`container flex
                    ${isMobile ? 'flex-col gap-12' : 'justify-between gap-8'}
                `}>
                <div className={`flex flex-col gap-12 justify-between h-full  md:w-[40%]`}>
                    <div className="flex flex-col gap-5">
                        <h3 className="font-family-primary font-bold text-h2">Entre em Contato</h3>
                        {!isMobile && (
                            <p>Pronto para transformar sua visão em realidade? Nossa equipe de especialistas
                                está à disposição para discutir seu próximo projeto de alto padrão.</p>
                        )}
                    </div>
                    {/* Contact Informations */}
                    <div className="flex flex-col gap-20">
                        {/* Company Informations */}
                        <span className="flex flex-col gap-5">
                            {informations.map((information) => (
                                <ContactInformation icon={information.icon} title={information.title} description={information.description} />
                            ))}
                        </span>
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
                </div>
                <div className={`md:pl-3 md:w-[45%]`}>
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
                                <FormDropDown icon={<Chevron />} values={subjects} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <FormLabel title={"MENSAGEM"} />
                                <FormTextArea rows={3} placeholder={"Como podemos ajudar?"} />
                            </div>
                            <div className={`md:flex md:justify-end md:pt-2`}>
                                <Button text={"ENVIAR MENSAGEM"} type={ButtonType.Tertiary} className={`${isMobile ? 'w-full' : ' px-2 w-[40%]'}`} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    )
}