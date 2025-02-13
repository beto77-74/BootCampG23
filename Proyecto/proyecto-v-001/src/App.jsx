import React from 'react';
import { useState } from "react";
import axios from 'axios'
//import YouTube from 'react-youtube';
import './App.css';



function App() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "c36679b7653f2e6c0b0eabddee05cb1f";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // constantes de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Cargando Peliculas..." });
  const [playing, setPlaying] = useState(false);

  //funcion para realizar la peticion a la api
  const fetchMovies = async(searchKey)=> {
    const type = searchKey ? "search" : "discover"
    const {data: { results },
  } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
  }

  setMovies(results)
  setMovie(results[0])

useEffect(()=> {
  fetchMovies();
},[])

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