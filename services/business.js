import axios from "axios"

const baseURL = "https://cdserver-r54a.vercel.app/"

export const getAllData = async()=> await axios.get(baseURL)