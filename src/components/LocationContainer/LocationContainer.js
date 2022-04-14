import { useEffect, useState } from "react"
import apiRyMplanet from "../../services/apiRickyMortyPlanet"
import LocationInfo from "./locationInfo/locationinfo"
import './locationContainer.css'

const LocationContainer = ({url}) =>{

    //* Estados de location especifica
    const [ residents , setResidents ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const  [ currentItems, setCurrentItems ] = useState(0)
    const [ itemsTotal, setItemsToal ] = useState(9)

    //!Efectos de location especifica
    useEffect(() =>{
        apiRyMplanet(url).then((res) => {
            setResidents(res.data.residents)
            setCurrentPage(1)
            setCurrentItems(0)
            setItemsToal(9)
        }).catch((error) =>{
            console.error(error)
        })
    }, [url])

    //? funcionalidad
    const items = residents.slice(currentItems, itemsTotal)


    const list = (items[0] ? items.map((resident) => <LocationInfo key={resident} url={resident} /> ) : 'Location alone')

   
    const Prev = () =>{
        const prevPage = currentPage -1 
        const prevIndex = prevPage * 9
        if(prevIndex <= 0 ){ return }
        setCurrentPage(prevPage)
        setCurrentItems(currentItems - 9)
        setItemsToal(itemsTotal - 9)
    }
    const Next = () =>{
        const totalItems = residents.length
        const nextPage = currentPage + 1
        const index = nextPage * 9

        if(index >= totalItems){ return }
        setCurrentPage(nextPage)
        setCurrentItems(currentItems + 9)
        setItemsToal(itemsTotal + 9)
    }

    return(
        <div className="container-principal">
            <div className="grid"> {list} </div>
            <div className="page">
                <button onClick={Prev}>Prev</button>
                <h3>Page {currentPage}</h3>
                <button onClick={Next}>Next</button>
            </div>
        </div>
    )
}

export  default LocationContainer