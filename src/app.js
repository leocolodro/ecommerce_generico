import  express  from "express";
import {dirname, join} from 'path'
import { fileURLToPath } from "url";

import mainRoutes from './routes/mainRouter.js'
import cartRouter from './routes/cartRouter.js'
import productRouter from './routes/productRouter.js'
import userRouter from './routes/userRouter.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

//routes
app.use(mainRoutes)
app.use(cartRouter)
app.use(productRouter)
app.use(userRouter)


app.use(express.static(join(__dirname, '../public')))

app.listen(process.env.PORT || 3000)
console.log(`Server started on port`, process.env.PORT || 3000);
