# React + Vite

# 🎬 Netflix Clone

A responsive desktop web application that replicates the core functionality and visual aesthetic of Netflix. This project showcases key features such as movie browsing, authentication, and trailer previews — built using modern React technologies and The Movie Database (TMDB) API.

## 🚀 Features

- 🔐 **Authentication** with Firebase (Login & Sign-up pages)
- 🏠 **Homepage** with categorized movie lists fetched from TMDB API
- 🎞️ **Movie Preview Page** – opens a trailer in a new tab via YouTube
- 🍿 **Live movie data** from TMDB (titles, thumbnails, ratings, genres)
- 📂 **React Router DOM** for seamless navigation
- 🔔 **Toast notifications** via React Toastify
- 🌐 **Styled UI components** (Navbar, Footer with hover effects)

> 🔹 Navigation bar is static and includes hover effects and a logout dropdown.  
> 🔹 Footer is styled but contains placeholder links only.

## 🛠 Tech Stack

- **React**
- **Vite**
- **React Router DOM**
- **Firebase Authentication**
- **TMDB API**
- **React Toastify**
- **CSS Modules**

## 📸 Screenshots

### 🔐 Login Page

## 📸 Screenshots

### 🔐 Login Page

![Login Page](https://raw.githubusercontent.com/Storozheva-dev/Netflix-clone/main/src/assets/screenshots/logPage.png)

### 🏠 Home Page

![Home Page](https://raw.githubusercontent.com/Storozheva-dev/Netflix-clone/main/src/assets/screenshots/homePage.png)

### 📽️ Player Page

![Player Page](https://raw.githubusercontent.com/Storozheva-dev/Netflix-clone/main/src/assets/screenshots/playerPage.png)

### 🔻 Footer Section

![Footer Section](https://raw.githubusercontent.com/Storozheva-dev/Netflix-clone/main/src/assets/screenshots/footer.png)

## 🔐 Firebase Authentication

- Firebase is used to handle user sign-up and login.
- User credentials are securely managed through Firebase Auth.
- On successful login or registration, users are redirected to the homepage.

## 📁 Folder Structure (Simplified)

```bash
src/
├── assets/
│   ├── screenshots/        # App screenshots for README
│   ├── cards/              # Movie visuals
│   └── ...                 # Other media (icons, logo)
│
├── components/
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   ├── TitleCards/
│   │   ├── TitleCards.jsx
│   │   └── TitleCards.module.css
│   │
│   └── pages/              # Route pages
│       ├── Home/
│       │   ├── Home.jsx
│       │   └── Home.module.css
│       ├── Login/
│       │   ├── Login.jsx
│       │   └── Login.module.css
│       ├── Player/
│           ├── Player.jsx
│           └── Player.module.css
│
├── App.jsx
├── firebase.js
├── index.css
└── main.jsx
📦 Setup & Run Locally

git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
npm install
npm run dev

📄 License
This project is for educational purposes only. Not affiliated with Netflix Inc.

Made with 🍿 & ❤️ by Storozheva Dev
```
