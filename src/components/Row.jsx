import React, { useEffect, useState } from 'react'
import './Row.css'
import instance from '../instance';

function Row({title,fetchUrl,isPoster}) { //object destructuring
    /* console.log(title,fetchUrl); */ //to check if data is being fetched from App.jsx (and request.js, indirectly)
    console.log(isPoster);
    const [movies, setMovies] = useState([]) //creating a state called "movies"
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async()=>{  // fetching data is a "sideeffect",ie, it goes against the pure function concept
      const response = await instance.get(fetchUrl)
      /* console.log(response.data.results); */
      setMovies(response.data.results)
    }

    
    console.log(movies); //fetches an array of (20, in this case) items (data can vary)

    useEffect(()=>{   // 'useEffect' is a hook used to handle sideeffects in components
      fetchData()
    },[])




  return (
    <div className='row'>
        <h3>{title}</h3>
        <div className="movie-row">
        { 
        /* map() method is used as 'movies' is an array of objects */
        /* paranthesis is used instead of curly brackets inside map() because us */
        movies.map(items=>(<img className={`movie ${isPoster?'movie-poster':'movie'}`} src={`${base_url}${isPoster?items.poster_path:items.backdrop_path}`} alt="poster" />)) 
        
        }


        </div>
        
      
    </div>
  )
}

export default Row
