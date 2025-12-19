import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"

function App() {

  return (
    <main className="min-w-screen min-h-screen flex flex-col items-center justify-start">
      {/* NavBar */}
      <NavBar />

      {/* Content */}
      <section className="w-full min-h-screen flex flex-col items-center justify-start">
        <Outlet />
      </section>

      {/* Footer */}
      <section className="w-full flex flex-col items-center justify-center bg-[var(--background-fixed-black)] py-24 px-4 gap-4 text-[var(--content-inverse)]">
        <p className="text-sm text-center mx-20">Acompanhe nas redes sociais ou entre em contato:</p>

        <div className="flex items-center justify-center p-4 gap-5">
          <a href="https://www.instagram.com/curriculo.aprovado/" target="_blank" rel="noreferrer">
            <img src="/icons/socials/instagram.svg" alt="Instagram" className="w-16 h-16 hover:opacity-70 transition-opacity"/>
          </a>
          <a href="https://www.linkedin.com/in/josephsantoss/" target="_blank" rel="noreferrer">
            <img src="/icons/socials/linkedin.svg" alt="LinkedIn" className="w-16 h-16 hover:opacity-70 transition-opacity"/>
          </a>
          <a href="https://wa.me/5511963991859/" target="_blank" rel="noreferrer">
            <img src="/icons/socials/whatsapp.svg" alt="Whatsapp" className="w-16 h-16 hover:opacity-70 transition-opacity"/>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <img src="/icons/socials/youtube.svg" alt="Youtube" className="w-16 h-16 hover:opacity-70 transition-opacity"/>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <img src="/icons/socials/tiktok.svg" alt="TikTok" className="w-16 h-16 hover:opacity-70 transition-opacity"/>
          </a>
        </div>

        <a href="mailto:vccv.aprovado@gmail.com" className="text-sm text-center mx-24 hover:opacity-70 transition-opacity">
          vccv.aprovado@gmail.com
        </a>
      </section>
    </main>
  )
}

export default App
