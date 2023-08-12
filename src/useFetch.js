import { useState , useEffect} from "react";

const useFetch = (url) => {
    const [data ,setData]=useState(null);
    const [isPending,setPending]=useState(true); 
    const [error,setError]=useState(null); 

    useEffect(() => { 
        console.log("hello");
        setTimeout(() => {
            fetch(url)
            .then(res => { 
                if(!res.ok){ 
                    throw Error("could not fetch the data for that ressources "); 
                }
                return res.json();
            })
            .then(data =>{ 
                setData(data);
                setPending(false); 
                setError(null);

            })
            .catch(err => { 
                setPending(false); 
                setError(err.message);
            })
        },0);
    },[url]);

    
    return { data , isPending,error };
}
 
export default useFetch;