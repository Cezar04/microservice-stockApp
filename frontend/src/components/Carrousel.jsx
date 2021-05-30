import axios from 'axios';
import { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';





const Carrousel = () => {
const [top10, setTop10] = useState("")

useEffect(()=> {
    axios.get(`http://localhost:8301/rest/stock/top10`)
    .then(res=>
        setTop10(res.data)
    )
 
},[])


const quote = Object.entries(top10)



    return ( 
        <>

        <Carousel className="px-96 py-10 ">
               
            {quote && quote.map((item, index)=>     
              <Paper className="flex justify-center" key={index}>  
                  
                    <h2 className="p-3 text-gray-800 font-semibold text-3xl" >{item[0]}</h2>
                    <h2 className="p-3 text-gray-800 font-semibold text-3xl" key={index}>{item[1]}</h2>
                </Paper>
            )}
 
        </Carousel>
        </>
     );
}
 
export default Carrousel;
