const getToken = async () => {
    try {
        const response = await axios.post("http://localhost:4000/api/auth/token");
        return response.data.token;
    } catch (error) {
        throw error.response.data;
    }
};

const toggleWishlist = async (idItinerary, token) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const url = `http://localhost:4000/api/users/wishlist/${idItinerary}`;
        await axios.put(url, null, config);
    } catch (error) {
        throw error.response.data;
    }
};
export default {getToken,toggleWishlist}