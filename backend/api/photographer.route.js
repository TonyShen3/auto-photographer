import express from "express"
import galleryCtrl from "./gallery.controller.js"

const router = express.Router()

router.route("/")
    .get(galleryCtrl.apiGetGallery)
router.route("/gallery")
    .post(galleryCtrl.apiUploadPhoto)
    .delete(galleryCtrl.apiDeletePhoto)

export default router