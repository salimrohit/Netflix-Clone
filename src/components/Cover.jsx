import React, { useEffect, useState } from 'react'
import './Cover.css'
import instance from '../instance';

function Cover({fetchUrl}) {
  console.log(fetchUrl);
  /* to store data - we create a state */
  const [movie,setMovie] = useState({}) //empty object as argument as data is an object
  const base_url = "https://image.tmdb.org/t/p/original/";
  //js code
  const fetchData = async()=>{
    const response = await instance.get(fetchUrl)
    /* console.log(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]); */
    setMovie(response?.data.results[Math.floor(Math.random()*response.data.results.length-1)])
  }


  console.log(movie);

  useEffect(()=>{
    fetchData()
  },[])



  return (
    //jsx code
    <div style={{height:'600px', backgroundImage:`url(${base_url}${movie.backdrop_path})`, backgroundSize:'cover', backgroundAttachment:'fixed'}}>
      <div className="banner-details">

        <h1>{movie.name}</h1>
        <button className='btn btn-danger'>Play</button>
        <button className='btn btn-outline-light ms-4'>More Info</button>
        <p>{movie.overview?.slice(0,200)}...</p>
      </div>

       </div>
  )
}

export default Cover
