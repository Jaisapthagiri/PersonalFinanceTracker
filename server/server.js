import express from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import connectDb from './configs/db.js'
import userRouter from './routes/userRoutes.js'
import transactionRouter from './routes/transactionRoutes.js'

const app = express()
const port = 4000 || process.env.PORT

await connectDb()

const allowedOrigins = ['http://localhost:5173']

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => res.send("api is running"))
app.use('/api/user', userRouter)
app.use('/api/transaction', transactionRouter)

app.listen(port, () => {
    console.log("Server is running");
})

export default app;
