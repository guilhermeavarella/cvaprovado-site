export default function ServiceCard({ title, description, icon }) {
    return (
        <div className="w-full lg:w-[17.25rem] h-[18rem] lg:h-[21.5rem] flex flex-col items-center bg-[var(--background-fixed-white)] rounded-2xl shadow-sm px-4 py-8 gap-4">
            <img src={`/icons/services/${icon}.svg`} className="w-16 h-16"/>
            <h5 className="text-center">{title}</h5>
            <p className="text-center">{description}</p>
        </div>
    )
}