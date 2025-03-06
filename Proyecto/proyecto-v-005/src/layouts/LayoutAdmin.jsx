import { Link, Outlet, useNavigate } from "react-router"

import miImagenlogout from "../icons/logout-c.svg"; 
import miImagenmovie from "../icons/video-c.svg"; 
import miImagenticket from "../icons/film-c.svg"; 
import miImagenvideo from "../icons/cinema-c.svg"; 
import miImagenchair from "../icons/cinema-c2.svg"; 

import { useAuth } from "../hooks/useAuth"

export const LayoutAdmin = () => {
  const { logout, user } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    // Limpiar la clave auth desde localstorage
    logout()

    // Redirigir el usuario a /login
    navigate('/') // redirige a login page
  }


  const handleSaludo = () => {
    // Obtener la hora actual
    const lahora = new Date();
    const hora = lahora.getHours();

    // Determinar el saludo según la hora
    let saludo;
    if (hora >= 6 && hora < 12) {
      saludo = "Buenos días";
      } else if (hora >= 12 && hora < 18) {
        saludo = "Buenas tardes";
      } else {
        saludo = "Buenas noches";
    }

    return (saludo);
  }

  return (
    <>
      <header className="py-4 px-4 border bg-emerald-950 justify-between">
        <div className="container mx-auto flex justify-between " >
          <Link to='/cartelera'>
            <h1 className="font-bold text-3xl text-blue-50">MEG Peliculas - Cartelera</h1>
          </Link>
          
          <div className="flex gap-8">
            <button><img src={miImagenmovie} width={75}/></button>
            <button><img src={miImagenticket} width={75}/></button>
            <button><img src={miImagenvideo} width={75}/></button>
            <button><img src={miImagenchair} width={75}/></button>
          </div>

          <div className="flex gap-4 p-3  text-blue-50 ">
            <span className="font-bold">{handleSaludo()} {user?.username}</span>
            <button className="border rounded p-1 justify-center cursor-pointer"onClick={handleLogout}>
              <img src={miImagenlogout} width={25} alt="Cerrar sesion"/>
            </button>
          </div>
        </div>

        <div className="mt-3 flex gap-6 font-sans text-blue-50">
          <Link to='/cartelera'>Cartelera</Link>
          <Link to='/estrenos'>Proximos Estrenos</Link>
          <Link to='/busqueda'>Busqueda</Link>
        </div>
      </header>

      <main className="my-6">
        <div className="container mx-auto" >
          <Outlet />
        </div>
      </main>
    </>
  )
}