import { Outlet } from "react-router"
import background from "../img/fondo05.png";

export const LayoutAuth = () => {
  
  return (
    <>
      <header className="py-4 px-4 border  bg-emerald-950" >
        <div className="container mx-auto flex justify-between" >
          <h1 className="font-bold text-3xl text-blue-50">MEG Peliculas - Cartelera</h1>
        </div>
      </header>

      <main className="my-6">
       
        <div className="container mx-auto w-screen h-screen" style={{ backgroundImage: `url(${background})`}}> 
          <Outlet />
        </div>
      </main>
    </>
  )
}
