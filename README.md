# 🚀 SimpleLoginForm (MERN Stack)

A full-stack web application built using the **MERN Stack** (MongoDB, Express, React, Node.js). This project demonstrates a complete authentication flow with a professional UI and separate dashboards for **Users** and **Admins**.

## ✨ Features

* **User Registration:** Full details form (Name, Email, Gender, DOB, City, State, Contact).
* **Dual Login System:** Smart toggle switch for **User** vs **Admin** login.
* **Admin Dashboard:**
    * View all registered users in a responsive table.
    * See detailed columns (City, State, Contact, Date of Birth).
    * Visual "Admin" vs "User" badges.
* **User Dashboard:** Personalized welcome screen showing the user's name.
* **Security:** Prevents duplicate emails and secures routes.
* **UI/UX:** "Industry-standard" look using **Bootstrap 5** and custom Glassmorphism CSS.

## 🛠️ Tech Stack

* **Frontend:** React.js, Bootstrap 5, CSS3.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB (Local Community Server).
* **Tools:** Mongoose, Cors, Nodemon.

---

## ⚙️ Installation & Setup Guide

Follow these steps to run the **SimpleLoginForm** project locally.

### 1. Prerequisites
Ensure you have the following installed:
* [Node.js](https://nodejs.org/)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### 2. Backend Setup
The server runs on Port `5000`.

1.  Open VS Code and navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  **Start the Server:**
    ```bash
    node app.js
    ```
    *Success Message: `Server started on port 5000` and `Connected to database`.*

### 3. Frontend Setup
The website runs on Port `3000`.

1.  Open a new terminal and navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  **Start the Website:**
    ```bash
    npm start
    ```

---

## 🔑 Login Credentials

### **1. Admin Login**
(This logic is hardcoded for demonstration purposes)
* **Username:** `admin`
* **Password:** `admin123`

### **2. User Login**
* Click **"Sign Up"** to register a new user.
* Login with the email and password you just created.

---

## 📂 Project Structure

```text
SimpleLoginForm/
│
├── backend/                # API & Database Logic
│   ├── app.js              # Main Server File
│   ├── userDetails.js      # Database Schema
│   └── package.json        # Dependencies
│
└── frontend/               # React User Interface
    ├── public/
    └── src/
        ├── components/
        │   ├── Login.js    # Login Page (User/Admin Toggle)
        │   ├── Signup.js   # Registration Form
        │   ├── UserHome.js # User Dashboard ("Hello [Name]")
        │   └── AdminHome.js# Admin Dashboard (Data Table)
        ├── App.js          # Navigation Routing
        └── App.css         # Styling

Here is the updated README.md file, customized with your project name "SimpleLoginForm".You can copy this code and replace the content in your current README.md file.Markdown# 🚀 SimpleLoginForm (MERN Stack)

A full-stack web application built using the **MERN Stack** (MongoDB, Express, React, Node.js). This project demonstrates a complete authentication flow with a professional UI and separate dashboards for **Users** and **Admins**.

## ✨ Features

* **User Registration:** Full details form (Name, Email, Gender, DOB, City, State, Contact).
* **Dual Login System:** Smart toggle switch for **User** vs **Admin** login.
* **Admin Dashboard:**
    * View all registered users in a responsive table.
    * See detailed columns (City, State, Contact, Date of Birth).
    * Visual "Admin" vs "User" badges.
* **User Dashboard:** Personalized welcome screen showing the user's name.
* **Security:** Prevents duplicate emails and secures routes.
* **UI/UX:** "Industry-standard" look using **Bootstrap 5** and custom Glassmorphism CSS.

## 🛠️ Tech Stack

* **Frontend:** React.js, Bootstrap 5, CSS3.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB (Local Community Server).
* **Tools:** Mongoose, Cors, Nodemon.

---

## ⚙️ Installation & Setup Guide

Follow these steps to run the **SimpleLoginForm** project locally.

### 1. Prerequisites
Ensure you have the following installed:
* [Node.js](https://nodejs.org/)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### 2. Backend Setup
The server runs on Port `5000`.

1.  Open VS Code and navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  **Start the Server:**
    ```bash
    node app.js
    ```
    *Success Message: `Server started on port 5000` and `Connected to database`.*

### 3. Frontend Setup
The website runs on Port `3000`.

1.  Open a new terminal and navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  **Start the Website:**
    ```bash
    npm start
    ```

---

## 🔑 Login Credentials

### **1. Admin Login**
(This logic is hardcoded for demonstration purposes)
* **Username:** `admin`
* **Password:** `admin123`

### **2. User Login**
* Click **"Sign Up"** to register a new user.
* Login with the email and password you just created.

---

## 📂 Project Structure

```text
SimpleLoginForm/
│
├── backend/                # API & Database Logic
│   ├── app.js              # Main Server File
│   ├── userDetails.js      # Database Schema
│   └── package.json        # Dependencies
│
└── frontend/               # React User Interface
    ├── public/
    └── src/
        ├── components/
        │   ├── Login.js    # Login Page (User/Admin Toggle)
        │   ├── Signup.js   # Registration Form
        │   ├── UserHome.js # User Dashboard ("Hello [Name]")
        │   └── AdminHome.js# Admin Dashboard (Data Table)
        ├── App.js          # Navigation Routing
        └── App.css         # Styling

👨‍💻 Author
Ritesh Patil
Developed as a MERN Stack Student Project.
