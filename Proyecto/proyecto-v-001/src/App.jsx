import { useEffect,useState } from "react";
import axios from 'axios'
import YouTube from 'react-youtube';
import './App.css';



const App = () => {
  const API_URL = "https://www.themoviedb.org/3";
  const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // constantes de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState();
  const [playing, setPlaying] = useState(false);

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";

    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    //console.log('data',results);
    //setSelectedMovie(results[0])
    
    useEffect(()=> {
         fetchMovies()
         .then (setMovies(results[0]))
       },[])
    //setMovies(results);
    //setMovie(results[0]);

  };

  //funcion para realizar la peticion a la api
  // const fetchMovies = async()=> {
  //   const response = await fetch(`${API_URL}/movie`,  //axios.get(`${API_URL}/${type}/movie`)
  //   {params: {
  //     api_key: API_KEY,
  //     query: searchKey,
  //   }})
  //   return await response.json()
  // }

  //  //console.log('data',results);
  // useEffect(()=> {
  //   fetchMovies()
  //   .then (setMovies)
  // },[])



  return(
    <div>
      <div className='container mt-3'>
        <div className='row'>
          {movies.map((movie) => (
            <div key={movie.id} className='col-md-4 mb-3'>
              <img src={`${URL_IMAGE + movie.poster_path}`} alt=""/>
              <h4 className='text-center'>{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;