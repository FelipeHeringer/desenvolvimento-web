interface FooterProps { remaining: number; quote: string };

export default function Footer({ remaining, quote }: FooterProps) {
    return (
        <footer className=" md:mt-3 pt-4">
            <p className="text-[0.8rem] font-semibold text-[#555] mb-2">
                Your remaining todos: {remaining}
            </p>
            <p className="text-[0.78rem] text-[#888] italic leading-relaxed">{quote}</p>
        </footer>
    );
}