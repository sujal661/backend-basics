import dotenv from 'dotenv'
import express from 'express'
import authfile from './routes/authRoute.js'
import middleWare from './middleWares/appMiddlewae.js'
import cors from 'cors'
import corsConfig from '../config/configCors.js'

dotenv.config()

const app = express()
//app.use(cors())  <Allowed every request from any origin(Url)>
app.use(corsConfig()) //allowed limited origin with custom changes to make resquest to the server
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT=process.env.PORT

app.get('/',(req,res)=>{
    res.json({msg:"server has started"})
})

app.use('./api/auth',middleWare,authfile)

app.listen(PORT,()=>{
    console.log(`Server Has started on the Port: ${PORT}`)
})