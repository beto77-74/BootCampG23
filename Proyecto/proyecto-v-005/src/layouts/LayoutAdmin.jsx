import { Link, Outlet, useNavigate } from "react-router"

import miImagenlogout from "../icons/logout.svg"; 
import miImagenmovie from "../icons/movie.svg"; 
import miImagenticket from "../icons/ticket.svg"; 
import miImagenvideo from "../icons/video.svg"; 
import miImagenchair from "../icons/chair-director.svg"; 

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
      <header className="py-4 px-4 border bg-blue-400 justify-between">
        <div className="container mx-auto flex justify-between">
          <Link to='/home'>
            <h1 className="font-bold text-3xl">MEG Peliculas - Cartelera</h1>
          </Link>
          
          <div className="flex gap-8">
            <button><img src={miImagenmovie}/></button>
            <button><img src={miImagenticket}/></button>
            <button><img src={miImagenvideo}/></button>
            <button><img src={miImagenchair}/></button>
          </div>

          <div className="flex gap-4 p-3 ">
            <span className="font-bold">{handleSaludo()} {user?.username}</span>
            <button className="border rounded p-1 shadow-blue-800 justify-center cursor-pointer"onClick={handleLogout}>
              <img src={miImagenlogout} alt="Cerrar sesion"/>
            </button>
          </div>
        </div>

        <div className="mt-3 flex gap-3 font-sans">
          {/* <Link to='/products'>Products</Link>
          <Link to='/invoices'>Invoices</Link> */}
          <Link to='/cartelera'>Cartelera</Link>
          <Link to='/estrenos'>Estrenos</Link>
          <Link to='/busqueda'>Busqueda</Link>
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