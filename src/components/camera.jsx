import React, { useEffect } from "react";
import galleryDataService from "../galleryDataService";

function Camera() {
  let videoRef = React.useRef(null);
  let photoRef = React.useRef(null);
  const [currPhoto, setCurrPhoto] = React.useState([]);
  // Obtain permission to user's webcam and microphone
  const obtainMediaPermission = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((videostream) => {
        let video = videoRef.current;
        video.srcObject = videostream;
        video.play();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // Function to take picture
  const takePicture = () => {
    let width = 500;
    let height = (width * 3) / 4;
    let photo = photoRef.current;
    let video = videoRef.current;
    photo.width = width;
    photo.height = height;
    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
    var img = new Image();
    img.SRC = photo.toDataURL();
    setCurrPhoto(img.SRC)
  };

  const clearImage = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
  };

  const saveImage = (user, currPhoto) => {
    var data = {
      user: user,
      img: currPhoto,
    };
    galleryDataService.saveImage(data)
    console.log(data.img)
    return;
  };

  useEffect(() => {
    obtainMediaPermission();
  }, [videoRef]);

  return (
    <div className="container-fluid p-2">
      <div className="container-fluid row">
        <div className="col-sm-6">
          <video className="container p-2 border" ref={videoRef}></video>
          <div className="d-grid gap-2 d-lg-flex justify-content-lg-center">
            <button onClick={takePicture} className="btn btn-outline-primary">
              Take Picture
            </button>
            <button onClick={takePicture} className="btn btn-outline-primary">
              Start Auto Photographer
            </button>
          </div>
        </div>
        <div className="col-sm-6">
          <canvas className="container p-2 border" ref={photoRef}></canvas>
          <div className="d-grid gap-2 d-lg-flex justify-content-lg-center">
            <button onClick={clearImage} className="btn btn-outline-danger">
              Clear Image
            </button>
            <button
              onClick={() => saveImage("test_user", currPhoto)}
              className="btn btn-outline-success"
            >
              Save Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camera;
