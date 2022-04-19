import './App.css';
import apiLocation from './services/apiRyMLocation';
import { useEffect, useState } from 'react';
import SearchBox from './components/searchBox/searchBox.js'
import LocationContainer from './components/LocationContainer/LocationContainer';

function App() {
  //*generador aleatorio de locaciones iniciales
  const randonNum = Math.floor((Math.random() * (126 - 0 + 1)) + 0)

  //? Estados 
  const [ searching , setSearch ] = useState('')
  const [ title , setTitle ] = useState('')
  const [ arrLocation , setArrayLocation ] = useState([])
  const [ location , setlocation ] = useState(`https://rickandmortyapi.com/api/location/${randonNum}`)

  
  //!Efecto de location
  useEffect(() =>{
    apiLocation(searching).then((res) =>{
      setArrayLocation(res.data.results)
    }).catch((error) =>{
      console.error(error)
    })
  }, [searching])

  //* funcionalidad de muesta de valores
  const func = (e, link) =>{
    setTitle(e)
    setlocation(link)
    setSearch('')
  }
  const  list = arrLocation.map((items) =>{
    if(items.name.toLowerCase().includes(searching.toLocaleLowerCase())){
      return <option className='option-style' value={items.name} key={items.id} onClick={() => func(items.name, items.url)}>{items.name}</option>
    }else{
      return ''
    }
  })

  
  
  return (
    <div className="App">
      <SearchBox val={searching} arr={list} sear={setSearch} titleprop={title} titleInit={location}/>
      <LocationContainer url={location}/>
    </div>
    
    
  );
}

export default App;
