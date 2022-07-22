import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import galleryDAO from "./dao/galleryDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient
const port = 5000

MongoClient.connect(
    process.env.GALLERY_DB_URI, 
    {
        maxPoolSize: 5,
        wtimeoutMS: 2500,
        useNewUrlParser: true,
    }
).catch(err => {console.error(err.stack)
process.exit(1)
})
.then(async client => {
    await galleryDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})