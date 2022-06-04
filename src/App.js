import {Container,Row,Col} from 'react-bootstrap';
import SearchBox from './Components/SearchBox';
import Title from './Components/Title';
import {useState,useEffect } from 'react';
import DisplayMovies from './Components/DisplayMovies';

import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';
import useFetch from './useFetch';
import Footer from './Components/Footer'


function App() {

  const [url,setUrl] = useState(`https://www.omdbapi.com/?s=sex&apikey=${process.env.REACT_APP_API_KEY}`);
  const { data:movieList, isPending:pendingOne } = useFetch(url);

  const { data:funnyMovies ,isPending:pendingTwo} = useFetch(`https://www.omdbapi.com/?s=funny&apikey=${process.env.REACT_APP_API_KEY}`);
  const { data:horrorMovie,isPending:pendingThree } = useFetch(`https://www.omdbapi.com/?s=horror&apikey=${process.env.REACT_APP_API_KEY}`);
  const { data:romanticMovie,isPending:pendingFour } = useFetch(`https://www.omdbapi.com/?s=romantic&apikey=${process.env.REACT_APP_API_KEY}`);
  const [searchValue,setSearchValue] = useState("");

  useEffect(() => { 
    {  
     {if(searchValue.length>=1){
       let urlz = `https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`;
      setUrl(urlz)
     } else {
       setUrl(`https://www.omdbapi.com/?s=Comedy&apikey=${process.env.REACT_APP_API_KEY}`);
     }}
   
    }
       },[searchValue]);

  return (
    <div>
      

      


 
      <Switch>
        <Route exact path="/">
        <Container fluid>
        <Row className="d-flex align-items-center pt-3 pb-3 header">
          <Title></Title>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>

        </Row>
      </Container>
       
        {pendingOne && <h1 className="loading">Loading...</h1>}
        {movieList && <DisplayMovies list={searchValue} movies={movieList.Search}/> }

        {pendingTwo && <h1 className="loading">Loading...</h1>}
        {funnyMovies && <DisplayMovies list="Funny" movies={funnyMovies.Search}/> }

        {pendingThree && <h1 className="loading">Loading...</h1>}
        {horrorMovie && <DisplayMovies list="Horror" movies={horrorMovie.Search}/> }

        {pendingFour && <h1 className="loading">Loading...</h1>}
        {romanticMovie && <DisplayMovies list="Romantic" movies={romanticMovie.Search}/> }

        </Route>

        <Route exact path="/viewmovie/:id">
        <Container fluid>
        <Row className="d-flex align-items-center pt-3 pb-3 header">
          <Title></Title>

        </Row>
      </Container>
         {movieList && <MovieDetails movies={movieList.Search}></MovieDetails>} 
      
        </Route>
      </Switch>
  
       
       <Footer/>
    
    </div>
  );
}

export default App;
