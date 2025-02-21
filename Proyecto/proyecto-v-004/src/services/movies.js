const apiKey = 'c36679b7653f2e6c0b0eabddee05cb1f';
const baseUrl = 'https://api.themoviedb.org/3';
const imageUrl = 'https://image.tmdb.org/t/p/original'


// export const fetchMovies = async () => {
//     const options = {
//       async: true,
//       crossDomain: true,
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzY2NzliNzY1M2YyZTZjMGIwZWFiZGRlZTA1Y2IxZiIsIm5iZiI6MTczOTI4ODk4NC4zODIwMDAyLCJzdWIiOiI2N2FiNzE5OGEyZTJmOTllZDRiYjQzMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BBg9g175DsC4YDUgiPwKuoQ55T0TUC19cU43XXdJ2Go'
//       }
//       //body: JSON.stringify()
//     }
  
//     const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//     // const data = await response.json()
//     console.log(await response.json())
//     return await response.json()

// }

export const fetchMovies = async () => {

    const options = {
               async: true,
               crossDomain: true,
               method: 'GET',
               headers: {
                 'Content-Type': 'application/json',
               Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzY2NzliNzY1M2YyZTZjMGIwZWFiZGRlZTA1Y2IxZiIsIm5iZiI6MTczOTI4ODk4NC4zODIwMDAyLCJzdWIiOiI2N2FiNzE5OGEyZTJmOTllZDRiYjQzMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BBg9g175DsC4YDUgiPwKuoQ55T0TUC19cU43XXdJ2Go'
               }
            }


      const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)

      const  data  = await response.json()
      
      const dataResults = data.results.map(movie => {
        const id = movie.id
        const img = movie.poster_path
        const image = `${imageUrl}${img}`
    
        return {
          ...movie,
          id,
          image
        }
      })

      return {
        ...data,
        results: dataResults
      }
  }



  

