import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"

import miCalendar from "../icons/calendar.svg"; 

const IMAGEURL = 'https://image.tmdb.org/t/p/original'
const URLBASE = "https://api.themoviedb.org/3/search/movie"
const API_KEY = "c36679b7653f2e6c0b0eabddee05cb1f"


const fetchMovies = async (busqueda) => {
  const response = await fetch(`${URLBASE}?query=${busqueda}&api_key=${API_KEY}`)

    console.log(response) 
    const  data  = await response.json()
    
    const dataResults = data.results.map(movie => {
      const id = movie.id
      const img = movie.poster_path
      const title = movie.title
      const release_date = movie.release_date
      const poster_path = movie.poster_path
      const overview = movie.overview
      const image = `${IMAGEURL}${img}` 
  
      return {
        ...movie,
        id,
        image,
        title,
        release_date,
        poster_path,
        overview
      }
    })
    return {
      ...data,
      results: dataResults
    }

} 

export const Busqueda = () => {

  const { user } = useAuth()

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

  const [busqueda, setBusqueda] = useState("")

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies(busqueda) 
      .then(data => {setMovies(data.results)})
  }, [busqueda]) 

  const handleInputChange = (event) => {
    setBusqueda(event.target.value)
   }
   
  const handleSubmit = (event) => {
     event.preventDefault()
     fetchMovies(busqueda)
   }   
      
  return (
      <>
        <h1 className="title">Buscar Peliculas</h1>
        <main>
          <form className="flex mt-4 gap-3" onSubmit={handleSubmit}>
            <input
              className="border rounded-md bg-gray-200"
              type="text"
              placeholder="Pelicula a buscar..."
              value={busqueda}
              onChange={handleInputChange}
             />
            {/* <button type="submit" className="search-button"  >Buscar</button> */}
          </form> 
       
          <div className="movies grid grid-cols-4 gap-60 mt-5">
            {movies.map(movie => (
              <div key={movie.id}>
               <article className="movie w-[200px] h-[150px] justify-center"  >
                <img src={movie.image} />
                <h3 className="mt-1 font-medium">{movie.title}</h3>
                <div className="flex">
                    <img src={miCalendar} width={20}/>
                   <h4 className="font-normal">{movie.release_date}</h4>
                </div>
              </article> 
              </div> 
               ))}
          </div>
        </main>
      </> 
   
    
  )
}

