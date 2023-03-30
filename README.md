
  # Artflow
  
  ## Technologies
![Figma] ![React] ![Router] ![Material UI] ![Firebase] ![Netlify] ![SCSS] ![Framer Motion] 

## Contributing
  neftonjin, https://github.com/neftonjin
  JXG052, https://github.com/JXG052
  macaulam, https://github.com/macaulam

  ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description  
  This web-application provides a platform for artists to showcase their artwork in a secure and accessible manner. By facilitating the upload and display of visual media in a user-friendly format, it offers a valuable resource for both established and emerging artists seeking to promote their work. The application requires authentication via a user name and password, which enhances security and ensures the privacy of the users' content. While the current version does not feature a delete button, work is underway to implement this feature in future versions. This web-application is an innovative and effective solution for artists seeking to expand their online presence and showcase their work.
  
## User Story
    As an artist I want to develop a web-application where I can securly login and upload my artwork. The uploaded artwork will be then displayed in an image gallery on my profile page. 
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)
  
## Installation
  
  This web application does not require installation. 
  
  ## Usage
  
  In order to use the application the user first needs to contact the admin and request a user name and password. After receiving the login details the user can then go to the home page of the application and login . Aftauthentification the user will be redirected to the profile page where he can upload his artwork by click the + button at the bottom of the page. When you click and upload an image a loading bar will show the progress of the upload. When the uploading is finished the image will automatically be rendered in the photogallery. You can add as many images as you like but be aware that only the administrator of the app can currently delete them.We are working on implementing the delete button which will be available in the futures versions.
  
  To demo the website use:
  Login: abc@abc.com
  Password: 1234567

  ## Limitation
    All uploaded images are stored in firebase database.The firebase account is currently on the free version and it only have 1.5gb bandwidth allowed per day. So if you upload too many pictures or too large and then you refresh the gallery too many times, the bandwidth will be consumed for the day and instead of the images in the gallery you will get broken links until the next day when the firebase resets the bandwidth.
  
  ## License
  
  This project is licensed under the MIT license.
  

  
  ## Questions
  
  If you have any questions about this project, please contact neftonjin at neftonjin@yahoo.com.

  ## Links 
   https://artflow.netlify.app/    (webApp)
   https://github.com/neftonjin/art-gallery-shop-app  (GitHub)
  
  ## Preview
Demo of the mobile login page
<img src="/documentation/Login-mobile.png" alt="Alt text" title="Login Page Mobile">

Demo of the desktop login page
<img src="/documentation/Login-desktop.png" alt="Alt text" title="Login Page Desktop">

Demo of the homepage
<img src="/documentation/homepage.png" alt="Alt text" title="Homepage">

Demo of the user profile page
<img src="/documentation/Profile.png" alt="Alt text" title="User Profile Page">


