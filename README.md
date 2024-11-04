<div align="center">
  <br />
    <a target="_blank">
      <img src="https://github.com/user-attachments/assets/2cd9494f-c288-442b-98a7-a5481ae6f37f" alt="Project Banner">
    </a>
  <br />


  <h3 align="center">Tomato - A Food Delivery Website</h3>

</div>

## <a name="table">Table of Contents</a>

1.  [Introduction](#introduction)
2.  [Screenshots](#screenshots)
3.  [Tech Stack](#tech-stack)
4.  [Features](#features)
5.  [Quick Start](#quick-start)
6.  [Snippets (Code to Copy)](#snippets)
7. [Links](#links)
8. [Contact](#contact)



## <a name="introduction"> Introduction</a>

🍅 Tomato - Food Delivery Website
Tomato is a full-stack food delivery web application developed using the MERN Stack (MongoDB, Express, React, Node.js). Designed to provide a seamless user experience, Tomato enables users to browse a range of delicious dishes, select their favorite meals, and place orders online. The project also includes a robust admin panel with controls to manage orders, menus, and user data, as well as user authentication to ensure secure access

## <a name="screenshots">Screenshots</a>
**1. Home Page**

 <img src="https://github.com/user-attachments/assets/c5ba20c3-f1bc-4ebd-bcf7-5bca7d4242e3" alt="Home Page">
 

 **2. Signup Popup**
 
 <img src="https://github.com/user-attachments/assets/2283c8d9-471a-47a9-8c93-57c707d154ca" alt="Signup Page">
 

 **3. Cart Page**
 
 <img src="https://github.com/user-attachments/assets/baeda580-2d1b-466e-baa8-af1b415229d4" alt="Cart Page">

  **4. Admin Page**
 
 <img src="https://github.com/user-attachments/assets/11bb0772-90ba-43f6-9e84-1085b6e55870" alt="Admin Page">

## <a name="tech-stack"> Tech Stack</a>

- React.js
- MongoDb
- Javascript
- Express.js
- CSS3

## <a name="features">Features</a>
1. **User-Friendly Interface:** Simple and intuitive design that makes browsing and ordering food easy.

2. **Category-Based Filtering:** Users can filter dishes by categories for a more personalized experience.

3. **Real-Time Order Management:** Users can view order status, while admins manage orders in real time.

4. **Admin Panel:** Offers complete control over dish availability, order tracking, and user management.

5. **Secure Authentication:** User registration and login with secure authentication.

6. **Payment Integration with Stripe:** Enables secure and reliable payment processing for a smooth checkout experience.

7. **Responsive Design:** Optimized for desktops, tablets, and mobile devices, providing a consistent experience across all platforms.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/JaivardhanPadhy/Food-Delivery-Website.git
```

**Navigate into the cloned repository**
```bash
cd Food-Delivery-Website
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#JWT
JWT_SECRET=

#Stripe
STRIPE_SECRET_KEY=
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">Snippets</a>

<details>
<summary><code>frontend-index.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Outfit;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}
.app {
  width: 80%;
  margin: auto;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


```

</details>

<details>
<summary><code>admin-index.css</code></summary>

```css

@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Outfit;
}

body {
  min-height: 100vh;
  background-color: #fcfcfc;
}

a {
  text-decoration: none;
  color: inherit;
}

hr {
  border: none;
  height: 1px;
  color: #a9a9a9;
}

.app-content {
  display: flex;
}

.flex-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cursor {
  cursor: pointer;
}

```

</details>


## <a name="links">Links</a>
- [My Modern Portfolio](https://github.com/JaivardhanPadhy/Modern-Portfolio)
- [Saas Podcast Platform](https://github.com/JaivardhanPadhy/Saas-Podcast-Platform)
- [Dashboard Application](https://github.com/JaivardhanPadhy/Dashboard)
- [Video-Conferencing Website](https://github.com/JaivardhanPadhy/VideoConferencing-Website)


## <a name="contributing"> Contributing</a>
We welcome contributions to the LiveDocs - the realtime collborator doc editor! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. Follow these steps to contribute:

1.Fork the repository.
   - Create a new branch
     ``` bash
      (git checkout -b feature-branch)
     ```

2.Make your changes.
   - Commit your changes 
       ```  bash
             (git commit -m 'Add some feature')
       ```

3.Push to the branch (git push origin feature-branch).
   - Open a pull request.

## <a name="contact"> Contact</a>
For any questions or inquiries, please contact me at theofficialjaivp@gmail.com.
