import { useEffect, useState } from 'react';


const RandomQuotes = () => {
    
    const [quotes, setQuotes] = useState('')
    
    const handleAPI = async ()=>{
        const response = await fetch("https://dummyjson.com/quotes/random");
        const result = await response.json();
        console.log(quotes);
        setQuotes(result);
    }

    useEffect(()=>{
        handleAPI();
    },[]);
    
    return(
        
        <div className='container'>
        <h1>Quote Of The Day</h1>
        {
           quotes ? <div>
            <p>{quotes.quote}</p>
            <h3>_{quotes.author}_</h3>
           </div> : <p>Loading...</p>
        }
        
        <button onClick={handleAPI} >New Quote</button>
        </div>
        
    ) 
};

export default RandomQuotes;