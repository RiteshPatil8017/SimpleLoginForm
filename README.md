# 🚀 MERN User Management System

A full-stack web application built using the **MERN Stack** (MongoDB, Express, React, Node.js). This application features a complete authentication system with separate panels for **Users** and **Admins**.

## ✨ Features

* **User Registration:** Complete form with validation (Name, Email, Gender, DOB, City, State, Contact).
* **Dual Login System:** Toggle switch for **User Login** and **Admin Login**.
* **Admin Dashboard:**
    * View all registered users in a responsive table.
    * See detailed information (City, State, Contact, etc.).
    * Visual badges for User Types.
* **User Dashboard:** Personalized "Hello [Name]" welcome screen.
* **Security:** Password verification and unique email checks.
* **UI/UX:** Modern Glassmorphism design using **Bootstrap 5** and custom CSS.

## 🛠️ Tech Stack

* **Frontend:** React.js, Bootstrap 5, CSS3.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB (Local or Atlas).
* **Tools:** Mongoose, Cors, Nodemon.

---

## ⚙️ Installation & Setup Guide

Follow these steps to run the project locally on your machine.

### 1. Prerequisites
Make sure you have the following installed:
* [Node.js](https://nodejs.org/)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas)

### 2. Clone the Repository
```bash
git clone <your-repository-url>
cd MyMernProject

3. Backend Setup
The backend runs on Port 5000.

Navigate to the backend folder:
    Bash
    cd backend

Install dependencies:Bashnpm install
Database Configuration:Open app.js.Ensure the MongoDB connection string is correct (Line 10):const mongoUrl = "mongodb://127.0.0.1:27017/MyLoginApp";Start the Server:Bashnode app.js
You should see: Server started on port 5000 and Connected to database.4. Frontend SetupThe frontend runs on Port 3000.Open a new terminal and navigate to the frontend folder:Bashcd frontend
Install dependencies:Bashnpm install
Start the React App:Bashnpm start
🔑 Usage & Credentials1. Admin Login (Hardcoded)Use these credentials to access the Admin Panel immediately:Username: adminPassword: admin1232. User LoginGo to "Sign Up" to create a new account.Login using the email and password you just registered.📂 Project StructureMyMernProject/
│
├── backend/                # Server Side
│   ├── app.js              # Main Server File (API Routes)
│   ├── userDetails.js      # MongoDB Schema Model
│   └── package.json        # Backend Dependencies
│
└── frontend/               # Client Side
    ├── public/
    └── src/
        ├── components/
        │   ├── Login.js    # Login Form (User/Admin Toggle)
        │   ├── Signup.js   # Registration Form
        │   ├── UserHome.js # User Dashboard
        │   └── AdminHome.js# Admin Dashboard (Table View)
        ├── App.js          # Routing
        └── App.css         # Styling
🔗 API EndpointsMethodEndpointDescriptionPOST/registerRegister a new userPOST/login-userAuthenticate user & get detailsGET/getAllUsersFetch all users (Admin only)👨‍💻 Author[Your Name]Built with ❤️ using the MERN Stack.
