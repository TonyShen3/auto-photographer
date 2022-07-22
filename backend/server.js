import express from "express"
import cors from "cors"
import photographer from "./api/photographer.route.js"
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true}));
app.use(express.json())
app.use("/api/v1/auto-photographer", photographer)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))




export default app