import  { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(false);

    useEffect(() => {
        fetch(url)
        .then(res => {
			if(!res.ok){
				throw Error("Could not fetch data")
			}
          
    
	
          return res.json();
        })
        .then(data =>{
          setData(data);
          setIsPending(false);
          setError(false);


      
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    
      },[url]);
      return {data,setIsPending,error};

}


export default useFetch;