const BASE_URL = 'http://fakestoreapi.com/products';

const productList = async (req, res) => {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            return res.status(response.status).json({error: "Couldn't fetch product data"});
        }

        const productData = await response.json();

        res.status(200).json(productData);
        
    } catch (error) {
        console.error(`Error! Couldn't fetch fetch product data. Error: ${error.message}`);
        res.status(500).json({error: 'Failed to fetch products'});
    }
}

module.exports = { productList }