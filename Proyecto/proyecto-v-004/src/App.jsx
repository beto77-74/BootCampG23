import './App.css'
import React from "react";
import { useEffect, useState } from "react"
import { fetchMovies } from "./services/movies"




const App = () => {
 
  const INITIAL_FORM = {
    adult:'',
    backdrop_path:'',
    genre_ids:'',
    id:'',
    original_language:'',
    original_title:'',
    overview:'',
    popularity:'',
    poster_path:'',
    release_date:'',
    title:'',
    video:'',
    vote_average:'',
    vote_count:''
  }

  const [movies, setMovies] = useState([])
  const [form, setForm] = useState(INITIAL_FORM)

  useEffect(() => {
    fetchMovies()
      .then(data => setMovies(data))
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }
   


  const imageUrl = 'https://image.tmdb.org/t/p/original'


  return (


  <>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./movie.svg" className="h-8" alt="MEG Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mundo MEG - Peliculas</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Inicio</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cartelera</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Estrenos</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Busqueda</a>
            </li>
          </ul>
        </div>
      </div> 
    </nav>

    <main>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">Todas las Categorias</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Comedia</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Accion</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Terror</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Romance</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
        {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Imagen
              </th>
            </tr>
          </thead>
          <tbody> */}
          {Array.isArray(movies) && movies.map((movie) => {
            // <tr
            //   className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            //   key={movie.id}
            // >
            //   <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            //     {movie.id}
            //   </th>
            //   <td key={movie.id} className="px-6 py-4">
            //     <img
            //       src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            //       width={100}
            //       height={250}
            //     />
            //   </td>
            // </tr>

            <div key={movie.id} className="px-6 py-4">
                 <img
                   src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                   width={100}
                   height={250}
                 />
            </div>
            console.log('movie.poster_path')
          })}
          
          {/* </tbody>
        </table> */}
        </div>
      </div>

    </main>
  </>
  )
}
  export default App