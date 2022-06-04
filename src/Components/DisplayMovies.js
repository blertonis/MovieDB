import {Container,Row,Col} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import {Link} from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { useState } from 'react';


const DisplayMovies = ({list,movies}) => {

    const typeMovie = (val) =>{
        if(val.length==0){
            return "Comedy"
        } else if(val!="Funny" && val!="Horror" && val!="Romantic"){
            return <span className="mb-2">Search results for:{val}</span>
        } else{
            return <span>{list}</span>
        }
    }
    return(
        <div>
            <h4 className="pl-3">{typeMovie(list)}</h4>

            <Swiper
             
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={7}
          loop={true}
          navigation
          autoplay={true}
          
          
          onSwiper={(swiper) => console.log(swiper)}
        >
          <Container className="d-movie">
            
            
           
          {movies?.map((f) => (
               <SwiperSlide>
                   <Link to={`/viewmovie/${f.imdbID}`}>
               <Col className="">
                       <img src={f.Poster}></img>
                   </Col>
                   <div className="movieTitle">
                       <span>{f.Title}</span>
                   </div>
                   </Link>
               </SwiperSlide>   
           ))}
          
          
           
         
          </Container>
        </Swiper>
        <br></br>
        </div>
        

    );
};


export default DisplayMovies;