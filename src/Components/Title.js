import { BrowserRouter as Router, Link } from "react-router-dom";

const Title = () => {

    return(
        <div className="col">
            <Link to="/"><h3>Movie<span id="db">DB</span></h3></Link>
           
        </div>
    );
};


export default Title;