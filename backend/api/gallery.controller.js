import galleryDAO from "../dao/galleryDAO.js"

export default class GalleryController {

    static async apiGetGallery(req, res, next) {
      const photosPerPage = req.query.photosPerPage ? parseInt(req.query.photosPerPage, 10) : 10
      const page = req.query.page ? parseInt(req.query.page, 10) : 0
      let filters = {}
      if (req.query.user) {filters.user = req.query.user} 
      const { photosList, totalNumPhotos } = await galleryDAO.getPhotos({filters, page, photosPerPage})
      let response = {
        photos: photosList,
        page: page,
        filters: filters,
        photos_per_page: photosPerPage,
        total_results: totalNumPhotos,
      }
      res.json(response)
    }

    static async apiUploadPhoto(req, res, next) {
        try {
            const user = req.body.user
            const img = req.body.img
            const contentType = "image"
            const date = new Date()
            const photoUpload = await galleryDAO.uploadPhoto(user, img, contentType, date)
            res.json({status: "Saved successfully"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }

    static async apiDeletePhoto(req, res, next) {
        try {
            const user = req.body.user
            const _id = req.body._id
            const photoDelete = await galleryDAO.deletePhoto(_id, user)
            res.json({status: "Removed successfully"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }
}