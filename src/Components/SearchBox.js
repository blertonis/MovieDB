import {useState} from 'react';

const SearchBox = ({searchValue,setSearchValue}) => {

    const [search,setSearch] = useState();
    return(
        <div className="col text-right">
            <input type="text"  autoComplete='off' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} id="search" placeholder="Search For movies"></input>
        </div> 
    );
};


export default SearchBox;