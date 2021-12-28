import { Router } from "express";
import * as productCtrl from "../controllers/ProductController";
const app = Router()


app.post('/products', productCtrl.createNewProduct);
app.get('/products', productCtrl.getAllProducts);
app.get('/products/:id', productCtrl.getProductById)
app.delete('/products/:id', productCtrl.deleteProductById)
app.put('/products/:id', productCtrl.updateProductById)
export default app 