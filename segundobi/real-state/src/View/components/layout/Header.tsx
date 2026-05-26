import { Logo, Menu } from "../../../assets/Icons";
import { Navbar } from "../Navbar";
import { Button } from "../Button";
import { useScreenSize } from "../../../ViewModel/hooks/useScreenSize";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
    const [showMobileContent, setShowMobileContent] = useState(false);
    const screen = useScreenSize();

    return (
        <div>
            {/* Mobile Header */}
            {screen === 'mobile' ? (
                <header className="flex py-4 px-3 justify-between items-center">
                    <Logo />
                    <button onClick={() => setShowMobileContent(true)}>
                        <Menu width={28} height={28} />
                    </button>
                </header>
            ) : (
                <header className="flex md:justify-between md:items-center md:py-4 md:px-3">
            {/* Desktop Header */}
                <Logo />
                <Navbar />
                <Button text="Agendar Visita" primary={true}/>
            </header>
            )}
            {showMobileContent && (
                <MobileMenu onClose={() => setShowMobileContent(false)} />
            )}
        </div >
    );
}