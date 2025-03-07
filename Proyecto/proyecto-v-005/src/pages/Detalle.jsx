import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { formatDate } from "/src/utils"

const IMAGEURL = 'https://image.tmdb.org/t/p/original'
const URLBASE = "https://api.themoviedb.org/3/movie"
const API_KEY = "c36679b7653f2e6c0b0eabddee05cb1f"



const fetchMovies = async (busqueda) => {
  //'https://api.themoviedb.org/3/movie/1290627?language=es-US',

  const options = {
    async: true,
    crossDomain: true,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzY2NzliNzY1M2YyZTZjMGIwZWFiZGRlZTA1Y2IxZiIsIm5iZiI6MTczOTI4ODk4NC4zODIwMDAyLCJzdWIiOiI2N2FiNzE5OGEyZTJmOTllZDRiYjQzMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BBg9g175DsC4YDUgiPwKuoQ55T0TUC19cU43XXdJ2Go'
    }
  }

   const response = await fetch(`${URLBASE}/${busqueda}&language=es-US`, options)


    console.log(response) 
    const  data  = await response.json()
    
    const dataResults = data.map(movie => {
      const id = movie.id
      const img = movie.backdrop_path
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
      data: dataResults
    }

} 

export const Detalle = (busqueda) => {


  const movieId = busqueda

  console.log(movieId)

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

  const [movies, setMovies] = useState([])

  useEffect(() => {
          fetchMovies(user.accessToken)
            .then(data => {setMovies(data)})
        }, [movieId])
      


  
return (
      <>
        <h1 className="text-4xl">Detalle de la Pelicula</h1>
        <main>
          <div className="gap-y-60 gap-x-20 p-10 justify-center">
            {movies.map(movie => (
              <div key={movie.id}>
                <div className="flex flex-col gap-2">
                  <input
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="image"
                    placeholder="imagen..."
                    //onChange={handleChange}
                    value={movie.image}
                  />

                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="name"
                    placeholder="Titulo"
                    //onChange={handleChange}
                    value={movie.title}
                  />

                  <textarea
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    rows="4"
                    name="resumen"
                    placeholder="Resumen de la película..."
                    //onChange={handleChange}
                    value={movie.overview}
                  />
                
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="date"
                    name="release"
                    placeholder="Fecha de Estreno"
                    //onChange={handleChange}
                    value={movie.release_date}
                  />

                  <input
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="submit"
                    value="Salir"
                  />
            
                </div>
               
              </div> 
               ))}
          </div>
          
          {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}
          
        </main>
      </> 
   
    
  )

}
