import { useEffect,useState } from 'react';
import axios from 'axios'
import './App.css';
import YouTube from 'react-youtube';

function App() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  //para las imagenes
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Cargando Peliculas" });
  const [playing, setPlaying] = useState(false);

  // realiza la peticion a la api
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

    setMovies(results);
    setMovie(results[0]);

    if (results.length) {
      await fetchMovie(results[0].id);
    }
  };

  // peticion de un solo objeto y mostrar en reproductor de videos
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Trailer Oficial"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    fetchMovie(movie.id);

    setMovie(movie);
    window.scrollTo(0, 0);
  };

  // funcion para buscar peliculas
  const searchMovies = (event) => {
    event.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="p-2 bg-green-200">
      <h2 className="text-4xl text-blue-950 text-center font-semibold mb-5">Trailer de Peliculas</h2>

      {/* buscando peliculas */}
      <form className="container flex gap-4 mb-4" onSubmit={searchMovies}>
        <input
          className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-lg text-sm p-2 cursor-pointer"
          type="text"
          placeholder="Buscar..."
          onChange={(event) => setSearchKey(event.target.value)}
        />
        <button className="bg-amber-100 p-2 font-medium w-18 rounded-lg cursor-pointer btn btn-primary">Buscar</button>
        
      </form>

      <div>
        <main className="flex">
          {movie ? (
            <div
              className="viewtrailer"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "75%",
                      height: "75%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className=" bg-red-500 p-2 font-medium w-28 rounded-lg cursor-pointer text-amber-50">
                    Cerrar
                  </button>
                </>
              ) : (
                <div className="container">
                  <div className="flex">
                    {trailer ? (
                      <button
                        className="bg-green-700 p-2 font-medium w-28 cursor-pointer text-amber-50"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Ver Trailer
                      </button>
                    ) : (
                      "El Trailer no esta habilitado"
                    )}
                    <h1 className="justify-center border p-2 text-white font-semibold">{movie.title}</h1>
                    <p className="border p-2 text-white">{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>

      {/* contenedor para mostrar los posters y las peliculas en la peticion a la api */}
      <div className="container mt-4">
        <div className="grid grid-cols-3 ml-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="mb-3"
              onClick={() => selectMovie(movie)}
            >
              <img
                src={`${URL_IMAGE + movie.poster_path}`}
                alt=""
                height={800}
                width="80%"
                className="cursor-pointer"
              />
              <h4 className="capitalize font-black grid grid-cols-3 cursor-pointer">{movie.title}</h4>
              
            </div>
          ))}
        </div>
      </div>
      console.log({movie.title})
    </div>
  );
}

export default App;
