import express from "express";
import productroutes from './routes/products.routes'
import morgan from "morgan";
import cors from 'cors'


//----------------------------setings--------------------------///
const app = express()
app.set('port',process.env.PORT || 3000)
const port = app.get('port')

//-----------------------------------------------databses***************************
import'./database'




///midelwares 
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))



//------------------------ routes___________________________________________
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api',productroutes)








app.listen(port, () => console.log(`Example app listening on port ${port}!`))