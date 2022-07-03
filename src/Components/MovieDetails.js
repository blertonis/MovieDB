import { useEffect } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import DisplayMovies from './DisplayMovies';


const MovieDetails = ({movies}) => {

    const {id} = useParams();

    
    const { data:movieDetails,isPending } = useFetch("https://www.omdbapi.com/?i=" + id + "&apikey=5d252b8");
    const { data:romanticMovie } = useFetch("https://www.omdbapi.com/?s=romantic&apikey=5d252b8");

    return(
       <div>
           

          <div className="wrapper-mob mb-4">
          <h2 className="text-center mt-4 mb-4">{movieDetails && movieDetails.Title}</h2>

             <Container>
                 <Row>
                    <Col md="6" sm="12"  xs="12" className="aww text-center">
                    {movieDetails && (
                        <img src={movieDetails.Poster}></img>
                    )}

                    {movieDetails && movieDetails.Ratings.Value}
                    <br></br>  <br></br>

                    </Col>
                    <Col md="6" sm="12" xs="12" className=" pull-left">
                    <table>
                <tr>
                    <td>Year</td>
                    <td>{movieDetails && movieDetails.Year}</td>
                </tr>

                <tr>
                    <td>Director</td>
                    <td>{ movieDetails && movieDetails.Director}</td>
                </tr>

                <tr>
                    <td>Country</td>
                    <td>{ movieDetails && movieDetails.Country}</td>
                </tr>


                <tr>
                    <td>Length</td>
                    <td>{ movieDetails && movieDetails.Runtime}</td>
                </tr>

                <tr>
                    <td>Realeased</td>
                    <td>{ movieDetails && movieDetails.Released}</td>
                </tr>
            
                <tr>
                    <td>Director</td>
                    <td>{ movieDetails && movieDetails.Director}</td>
                </tr>

                <tr>
                    <td>Language</td>
                    <td>{ movieDetails && movieDetails.Language}</td>
                </tr>

                <tr>
                    <td>Awards</td>
                    <td>{ movieDetails && movieDetails.Awards}</td>
                </tr>
            
                
            </table>


                    </Col>
                 </Row>
             </Container>
          </div>

          {romanticMovie && <DisplayMovies list="Romantic" movies={romanticMovie.Search}/> }

       </div>


    )
};


export default MovieDetails;