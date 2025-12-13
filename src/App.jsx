import { Outlet } from "react-router-dom"

function App() {
  return (
    <section className="min-w-screen min-h-screen flex flex-col items-center justify-start">
      <div>
        <Outlet />
      </div>
    </section>
  )
}

export default App
