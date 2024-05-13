import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    axios.get('/api/movies')
    .then((res)=>{
      console.log("api data",res)
      setMovies(res.data);
    })
    .catch((error)=>console.log("error",error))
  },[])

  return (
    <>
      <h1>Production Level WebApp</h1>
      <p>MOVIES LENGTH: {movies.length}</p>
       {
        movies.map((movies,index)=>(
           // pass key for code optimization
           <div key={movies.id}>  
           <h3>{movies.title}:</h3>
           <p>{movies.description}</p>
         </div>
        ))
       }      
    </>
  )
}

export default App
