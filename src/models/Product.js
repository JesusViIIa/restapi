import  {Schema, model}  from "mongoose";
import mongoosepaginate from 'mongoose-paginate-v2'
const product= new Schema({
    title: {type: String, required: true, trim:true},
    description: {type: String, required: true, trim:true},
    price: {type: Number, required: true}
},{timestamps:true})

product.plugin(mongoosepaginate)
export default  model('product',product)