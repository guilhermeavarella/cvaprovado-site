import { motion } from "motion/react";
import whiteArrow from "../assets/icons/button-arrow-white.svg";
import blackArrow from "../assets/icons/button-arrow-black.svg";

{/* variant: "white" | "default" */}

export default function Button({ label, variant }) {
    return (
        variant === "white" ?
        <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-row items-center bg-[var(--background-fixed-white)] text-[var(--content-primary)] px-8 py-4 gap-4 rounded-xl hover:opacity-80 hover:cursor-pointer transition-opacity"
        onClick={() => { window.open('https://wa.me/5511963991859'); }}
        >
            <p className="font-semibold font-Geologica">{label}</p>
            <img src={blackArrow} className="w-4 h-4"/>
        </motion.button>
        :
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-row items-center bg-[var(--brand-secondary)] text-[var(--content-inverse)] px-8 py-4 gap-4 rounded-xl hover:opacity-80 hover:cursor-pointer transition-opacity"
        onClick={() => { window.open('https://wa.me/5511963991859'); }}
        >
            <p className="font-semibold font-Geologica">{label}</p>
            <img src={whiteArrow} className="w-4 h-4"/>
        </motion.button>
    );
}
