import Product from "../models/Product";


export const createNewProduct = async (req, res) => {
    const { title, description, price } = req.body
    if (!title) {
        return res.status(400).send({ mesagge: 'title required' })
    }
    if (!description) {
        return res.status(400).send({ mesagge: 'description required' })
    }
    if (!price) {
        return res.status(400).send({ mesagge: 'price required' })
    }
    try {
        const newProduct = new Product({ title, description, price })
        const productSaved = await newProduct.save()
        res.json(productSaved)
    } catch (error) {
        console.log(error);
    }
}


export const getAllProducts = async (req, res) => {
    try {
    
    const products = await Product.find()
    res.json(products)
    } catch (error) {
        res.status(400).json({message: error.mesagge})
        console.log(error);
        
    }
}

export const getProductById = async (req, res) => {
    try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) {
            return res.status(400).json({ mesagge: `product doesnt exists` })
    }
    res.json(product)
    } catch (error) {
        res.status(500).json({message: error.message || 'error'})
        console.log(error);
    }
}
export const deleteProductById = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ mesagge: 'deleted correctly' })
}

export const updateProductById = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body)
    res.json({ mesagge: 'updated correctly' })
}
