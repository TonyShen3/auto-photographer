import React, { useState, useEffect } from "react";
import galleryDataService from "../galleryDataService";
import { Link } from "react-router-dom";
import userEvent from "@testing-library/user-event";

function Gallery () {

    const [photos, setPhotos] = useState([]);

    useEffect(() =>{
        getPhotos();
    }, [])

    const getPhotos = () => {
        galleryDataService.getAll()
            .then(response => {
            console.log(response.data);
            setPhotos(response.data.photos);
            })
            .catch(e => {
            console.log(e);
            });
        };
    const deleteImage = (id, userId) => {
            galleryDataService.deleteImage(id, userId)
            return;
          };
            
    return (
        <div>
            <h1 className="text-dark text-center">Gallery</h1>
            {photos.map((photo) => {return (<div><img src={photo.img} alt="user_photo"></img><button onClick={() => {deleteImage(photo._id, photo.user)}} className="btn btn-outline-danger"> Delete Image </button></div>)})}
        </div>
    )
}

export default Gallery
