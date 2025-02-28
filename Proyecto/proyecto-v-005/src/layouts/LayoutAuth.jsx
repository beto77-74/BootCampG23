import { Outlet } from "react-router"

export const LayoutAuth = () => {
  return (
    <>
      <header className="py-4 px-4 border">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold text-3xl">MEG Peliculas</h1>
        </div>
      </header>

      <main className="my-6">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  )
}
