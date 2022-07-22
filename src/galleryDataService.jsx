import http from "./http-common"

class GalleryDataService {
    getAll(page = 0) {
      return http.get(``);
    }
  
    get(user) {
      return http.get(`/?user=${user}`);
    }

    saveImage(data) {
      return http.post(`/gallery`, data);
    }
  
    deleteImage(_id, userId) {
      return http.delete(`/gallery`, {data:{_id: _id, user: userId}});
    }
  
  }
  
  export default new GalleryDataService();