import axios from "axios"
const apiRyMplanet = async (url) =>{
    const req = await axios.get(url)
    return req
}
export default apiRyMplanet;