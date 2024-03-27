import axios from "axios"

export const getAllData = async()=>{
    const response = await axios.get("https://cdserver-r54a.vercel.app/blog")
    return response.data
}