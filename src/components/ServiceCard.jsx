import { motion } from "motion/react"

export default function ServiceCard({ title, description, icon }) {
    const isLargeScreen = window.innerWidth >= 928;

    return (
        <motion.div 
        className="w-full lg:w-[17.25rem] h-[18rem] lg:h-[21.5rem] flex flex-col items-center bg-[var(--background-fixed-white)] rounded-2xl shadow-sm px-4 py-8 gap-4 
            hover:shadow-[0_0_10px_2px] hover:shadow-[#02634c90] transition-shadow duration-200 ease-in-out"
        whileHover={{ scale: isLargeScreen ? 1.15 : 1.025 }}
        whileTap={{ scale: 1.05 }}
        >
            <img src={`/icons/services/${icon}.svg`} className="w-16 h-16"/>
            <h5 className="text-center">{title}</h5>
            <p className="text-center">{description}</p>
        </motion.div>
    )
}