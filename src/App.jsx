import './App.css'
import Cover from './components/Cover'
import Nav from './components/Nav'
import Row from './components/Row'
import requests from './request'

function App() {
  
  

  return (
    <>    
    <Nav/>
    <Cover fetchUrl={requests.fetchNetflixOriginals}/>
    <Row isPoster='true' title='Trending' fetchUrl={requests.fetchTrending}/>   {/* this employs the "re-usability of components" feature of react (re-using the 'Row.jsx' component) */}
    <Row title='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals} />
    <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
    <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
    <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
    <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
    <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
    <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>    
      
    </>
  )
}

export default App
