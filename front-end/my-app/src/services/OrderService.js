import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getOrderListByUser = async (req, res) => {
    try {
        const res = await axios.get(`${API_URL}/order`,
            {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}}
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
}