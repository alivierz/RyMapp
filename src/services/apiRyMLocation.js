import axios from "axios";
const apiLocation = async (value) =>{
    const req = await axios.get(`https://rickandmortyapi.com/api/location?name=${value}`)
    return req
}

export default apiLocation