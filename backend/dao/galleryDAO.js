import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let gallery

export default class galleryDAO {
    static async injectDB(conn) {
        if (gallery) {return}
        try {gallery = await conn.db("auto-photographer").collection("gallery")
        } catch (e) {
            console.error(`Unable to establish a connection handle in galleryDAO: ${e}`)
        }
    }

    static async getPhotos({filters = null, page = 0, photosPerPage = 10} = {}) {
        var query
        if (filters) { if ("user" in filters) {query = {"user": filters["user"]}}}
        var cursor
        try {cursor = await gallery.find(query)
        } catch (e) {console.error(`Unable to issue find command, ${e}`)
          return { gallery: [], totalNumPhotos: 0 }
        }
        const displayCursor = cursor.limit(photosPerPage).skip(photosPerPage * page)
        try {
          const photosList = await displayCursor.toArray()
          const totalNumPhotos = await gallery.countDocuments(query)
          return { photosList, totalNumPhotos }
        } catch (e) {
          console.error(
            `Unable to convert cursor to array or problem counting documents, ${e}`
          )
          return { photosList: [], totalNumPhotos: 0 }
        }
      }

      static async uploadPhoto(user, img, contentType, date){
        try {
          const newPhoto = { "user": user, "img": img, "date": date, "contentType": contentType}
          return await gallery.insertOne(newPhoto)
        } catch(e) {
          console.error(`Unable to upload photo: ${e}`)
          return {error: e}
        }
      }
      static async deletePhoto(_id, user){
        try{
          const deletePhoto = {"_id":ObjectId(_id), "user": user}
          return await gallery.deleteOne(deletePhoto)
        } catch (e) {
          console.error(`Unable to delete photo: ${e}`)
          return {error: e}
        }
      }
    }