import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
   const {name, flags, population, area, capital, cca3} = country

   const [visited, setVisited] = useState(false)

   const handleVisited=()=>{
    setVisited(!visited)
   }

    return (
        <div className='country'>
            <h3>{name.common}</h3>
           <img src={flags.png} alt="" />
           <p>Population: {population}</p>
           <p>Capital: {capital}</p>
           
           <p>Area: {area}</p>
           <p><small>code:{cca3}</small></p>

           <button onClick={ handleVisited}>visited</button>
           {/* {visited && 'I have visited this country'} */}
           {visited? 'I have visited': 'I wan to visite'}
        </div>
    );
};

export default Country;