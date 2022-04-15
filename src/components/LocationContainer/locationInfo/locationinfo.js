import { useEffect, useState } from "react";
import apiRyMplanet from "../../../services/apiRickyMortyPlanet";
import './locationInfo.css'
const LocationInfo = ({url}) =>{

    //! estados de los items en funcion del arreglo de URL
    const [ name , setname ] = useState('loading...')
    const [ img , setImg ] = useState('')
    const [ episodes, setEpisodes ] = useState(0)
    const [ status, setStatus ] = useState('unknow')


    //* estados de cada url individualmente usando el servicio apirickymortyplanet
    useEffect(() =>{
        apiRyMplanet(url).then((res) =>{
            setname(res.data.name)
            setImg(res.data.image)
            setEpisodes(res.data.episode.length)
            setStatus(res.data.status)
        }).catch((error) =>{
            console.error(error)
        })
    })

    //
    //? renderizado final
    return(
        <div className="container-card">
            <h2>{name}</h2>
            <img src={img} alt="" />
            <div className="card-info">
                <p>Episodes: <span>{episodes}</span> </p>
                <p>Status:  <span>{status}</span></p>
            </div>
        </div>
    )
}

export default LocationInfo