import { useEffect, useState } from "react";
import apiRyMplanet from "../../services/apiRickyMortyPlanet";
import './searchbox.css'

const SearchBox = ({val, arr, sear, titleprop, titleInit}) =>{
    //! Estado incial random
    const [ titleRandom , setTitleRandom ] = useState('')


    //*Funcionalidad condicional
    useEffect(() =>{
        apiRyMplanet(titleInit).then((res)=>{
          setTitleRandom(res.data.name)
        }).catch((error) =>{
          console.error(error)
        })
    }, [titleInit])

    return(
    <header className="header">
      <h2 className="title">{titleprop ? titleprop : titleRandom}</h2> 
      <div className="serach">
        <input className="input" type="text" id="searching" value={val}  onChange={(e) => sear(e.target.value.trim())}/>
        {val ? <div className="options">{arr}</div> : '' }
      </div>
      
    </header>
    )
}
export default SearchBox;