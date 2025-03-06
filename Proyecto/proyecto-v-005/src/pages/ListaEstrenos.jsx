import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"

import miCalendar from "../icons/calendar.svg"; 

const APIKEY = 'c36679b7653f2e6c0b0eabddee05cb1f';
const BASEURL = 'https://api.themoviedb.org/3';
const IMAGEURL = 'https://image.tmdb.org/t/p/original'

const fetchMovies = async () => {

    const options = {
               async: true,
               crossDomain: true,
               method: 'GET',
               headers: {
                 'Content-Type': 'application/json',
               Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzY2NzliNzY1M2YyZTZjMGIwZWFiZGRlZTA1Y2IxZiIsIm5iZiI6MTczOTI4ODk4NC4zODIwMDAyLCJzdWIiOiI2N2FiNzE5OGEyZTJmOTllZDRiYjQzMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BBg9g175DsC4YDUgiPwKuoQ55T0TUC19cU43XXdJ2Go'
               }
            }

     const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-US&page=2&primary_release_date.gte=01%2F03%2F2025&primary_release_date.lte=31%2F12%2F2026&sort_by=popularity.desc', options)

    const  data  = await response.json()
      
    const dataResults = data.results.map(movie => {
    const id = movie.id
    const img = movie.poster_path
    const title = movie.title
    const release_date = movie.release_date
    const image = `${IMAGEURL}${img}`
    
    return {
      ...movie,
      id,
      image,
      title,
      release_date
    }
    })

    return {
      ...data,
      results: dataResults
    }
  }

export const ListaEstrenos = () => {
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
              .then(data => {setMovies(data.results)})
          }, [])
        

          
        return (
          <main className="flex p-10 justify-between">
            <div className="movies grid grid-cols-4 gap-60">
              {movies.map(movie => (
                <article className="movie w-[200px] h-[150px] justify-center" >
                  <img src={movie.image} />
                  <h3 className="mt-1 font-medium">{movie.title}</h3>
                  <div className="flex">
                    <img src={miCalendar} width={20}/>
                    <h4 className="font-normal">{movie.release_date}</h4>
                  </div>
                </article>
                ))}
            </div>
          </main>
        )
}
  