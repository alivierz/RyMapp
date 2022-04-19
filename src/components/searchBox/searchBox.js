import { useEffect, useState } from "react";
import apiRyMplanet from "../../services/apiRickyMortyPlanet";
import './searchbox.css'

const SearchBox = ({val, arr, sear, titleprop, titleInit}) =>{
    //! Estado incial random
    const [ titleRandom , setTitleRandom ] = useState('')
    const [ numLocation , serNumLocation ] = useState(0)
    const [ dimension, setDimension ] = useState('')
    const [ type , setType ] = useState('')

    //*Funcionalidad condicional para titulo aleatorio inicial
    useEffect(() =>{
        apiRyMplanet(titleInit).then((res)=>{
          console.log(res.data)
          setTitleRandom(res.data.name)
          serNumLocation(res.data.residents.length)
          setDimension(res.data.dimension)
          setType(res.data.type)
        }).catch((error) =>{
          console.error(error)
        })
    }, [titleInit])

    //? renderizado de componentes
    return(
    <header className="header">
      <h2 className="title">{titleprop ? titleprop : titleRandom}</h2> 
      <div className="serach">
        <input className="input" type="text" id="searching" value={val}  onChange={(e) => sear(e.target.value.trim())}/>
        {val ? <div className="options">{arr}</div> : '' } 
      </div>
      <div className="info-zone">
        <h3>Residents: {numLocation}</h3>
        <h3>Dimension: {dimension}</h3>
        <h3>Type: {type} </h3>
      </div>
    </header>
    )
}
export default SearchBox;