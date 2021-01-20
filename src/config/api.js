import axios from 'axios'
const BASE_URL = "http://127.0.0.1:8000/api/"



export const useProductService = () => {
    const getAllProduct = async () => {
        return await axios.get(BASE_URL+'produk')
    }

    return {getAllProduct}
}