import { useEffect, useState } from "react";

const NAVBAR_VARIANTS = {
    transparent: "bg-transparent shadow-none",
    solid: "bg-[var(--background-inverse)] shadow-sm",
};

const LOGO_VARIANTS = {
    text: {
        logo: "/logos/text-white.svg",
        size: "h-16",
    },
    icon: {
        logo: "/logos/icon.svg",
        size: "h-16",
    },
};

export default function NavBar() {
    const [variant, setVariant] = useState("transparent");
    const [logo, setLogo] = useState("icon");
    const isLargeScreen = window.innerWidth > 768;

    useEffect(() => {
        const handleScroll = () => {
        const isAtTop = window.scrollY < 10 * window.innerHeight / 100;
        setVariant(isAtTop ? "transparent" : "solid");
        };

        if (isLargeScreen) { setLogo("text"); }

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initialize on mount

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
        className={`
            sticky top-0 w-full flex flex-col items-center justify-center py-2 px-4 z-100
            transition-colors duration-500 ease-in-out
            ${NAVBAR_VARIANTS[variant]}
        `}
        >
        <img src={LOGO_VARIANTS[logo].logo} alt="Currículo Aprovado" className={LOGO_VARIANTS[logo].size + " hover:cursor-pointer"} onClick={() => window.location.href = "/"} />
        </section>
    );
}
