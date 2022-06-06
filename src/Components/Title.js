import { BrowserRouter as Router, Link } from "react-router-dom";

const Title = () => {

    return(
        <div className="col">
            <Link to="/"><h3><span id="db">Movie</span>DB</h3></Link>
           
        </div>
    );
};


export default Title;