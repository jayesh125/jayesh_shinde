# **Jayesh Shinde's Assignment Project: React + Tailwind CSS + API Integration**

Welcome to my project! This assignment showcases my skills in React, API integration, and frontend development with Tailwind CSS. Below, you'll find a detailed walkthrough of the project features, setup instructions, and key highlights that demonstrate my ability to build scalable and functional web applications.

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [API Documentation](#api-documentation)
6. [Validations](#validations)
7. [Creative Challenges and Solutions](#creative-challenges-and-solutions)
8. [Future Enhancements](#future-enhancements)
9. [Conclusion](#conclusion)

---

## **Project Overview**

This React-based application is built with modern tools and best practices in mind. It handles user authentication, product listing, and search functionality using REST APIs. The design is responsive and styled with Tailwind CSS for a clean, modern UI.

I aimed to create a scalable, maintainable, and user-friendly application while also ensuring that my code reflects industry standards in API handling, state management, and promise handling.

---

## **Tech Stack**

- **Frontend**: React (with Vite)
- **Styling**: Tailwind CSS
- **API Integration**: Axios
- **Routing**: React Router
- **Validation**: JavaScript promises, `async`/`await`.

---

## **Features**

- **User Authentication**: Registration, login, and current user details handled through APIs.
- **Search and Pagination**: A seamless user experience for product listing with real-time search and pagination.
- **Responsive Design**: Tailored for both desktop and mobile screens with Tailwind CSS.
- **Error Handling**: Industry-standard validation and promise handling for error-free API interactions.

---

## **Getting Started**

To run this project on your local machine:

### **Prerequisites**
- Node.js installed

### **Installation**
1. Clone the repository:
    ```bash
    git clone https://github.com/username/project-name.git
    cd project-name
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
4. Visit `http://localhost:3000` in your browser to see the app.

---

## **API Documentation**

This project interacts with the following APIs:

1. **Login API**
   - URL: [Login API](https://intern-task-api.bravo68web.workers.dev/auth/login)
   - Method: `POST`
   - Purpose: Handles user login.

2. **Sign-up API**
   - URL: [Signup API](https://intern-task-api.bravo68web.workers.dev/auth/signup)
   - Method: `POST`
   - Purpose: User registration.

3. **Current User API**
   - URL: [Current-User API](https://intern-task-api.bravo68web.workers.dev/api/me)
   - Method: `GET`
   - Purpose: Fetch logged-in user details.

---

## **Validations**

- **Form Validation**: Before submitting the form, basic checks ensure all fields are filled and valid.
- **API Response Handling**: Error messages are shown for invalid logins or sign-ups, and users are redirected on successful authentication.
- **Promise Handling**: APIs are handled using `async`/`await`, with appropriate loading states and error messages.

---

## **Creative Challenges and Solutions**

One of the most interesting challenges I faced during this project was ensuring smooth API integration while maintaining state across components without external libraries. I achieved this by leveraging React's `useState` and `useEffect` hooks, along with `async`/`await` for proper promise handling.

Here’s how I tackled some of the challenges:
- **API Timeout and Loading States**: Implemented custom loaders and error screens to enhance user experience during slow responses.
- **Clean Code and Scalability**: I adhered to modular coding practices, making the app scalable for future enhancements like user roles, filtering, and more.

---

## **Future Enhancements**

While this project fulfills the assignment requirements, I envision several features that can make the app more robust:
- **Dark Mode**: A toggle feature for dark and light themes.
- **Profile Management**: Allow users to update their profiles.
- **Improved Error Boundaries**: Enhanced error handling across all components.

---

## **Conclusion**

This project reflects my dedication to writing clean, efficient code and my ability to learn and adapt new technologies quickly. I hope this gives you a good insight into my skills and thought process. Feel free to clone, explore, and connect with me if you have any feedback or opportunities!
