# Auto-photographer Web App

### This app takes picture automatically when it hears a loud cheer, never miss an exciting moment again! Photos can be uploaded to a cloud database and shared with friends and families via one access code.

Tech stack:
- Front end: JavaScript, ReactJS
- Back end: Express, NodeJS
- Database: MongoDB Atlas

Camera:
- Take picture manually or let the camera takes picture automatically when the surrounding noise reaches a certain level
- Click save picture to upload it to the cloud
- Each session has its unique access code - be sure to write it down! 
  (future work: save access code locally so it doesn't generate new code every time the website is refreshed)
- Note: be aware that anyone with the access code can view and download your pictures, please only upload photos that you're comfortable with sharing online

Gallery:
- View all photos saved under a specific access code
- Download or delete photos
