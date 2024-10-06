# FortuneConnect Platform

**FortuneConnect** is an investment platform that connects local capital with socially impactful investment ideas. This project includes a responsive landing page and a user dashboard, built using **ReactJS** and **Tailwind CSS** for styling.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [How to Use the Platform](#how-to-use-the-platform)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)

---

## Project Overview

The **FortuneConnect Platform** consists of two main components:

1. A **Landing Page** that provides potential users with information about the platform's mission, features, testimonials, and a call to action.
2. A **User Dashboard** where registered users can view and manage their investment portfolios, check notifications, and update profile settings.
   The Dashboard displays dynamic content, the Logged in user is able to access his investments, performance, status, and performance chart.

The platform is designed to be fully responsive and aims to provide a seamless user experience.

---

## Features

- **Landing Page**:

  - Hero section with a call to action
  - Features section outlining platform benefits
  - Testimonials from investors and businesses
  - Footer with links to important pages and social media

- **User Dashboard**:
  - Sidebar navigation with links to the user's profile, investments, and settings
  - Main dashboard displaying user-specific information:
    - Total investment portfolio value
    - List of investments (name, performance, status)
    - A simple chart showing investment performance
  - Notifications section for recent activities
  - Top bar with user info (name, avatar, sign-out button)

---

## How to Use the Platform

### 1. Sign Up

To create a new account on FortuneConnect:

- Navigate to the **Signup** page from the landing page.
- Fill in the required fields such as your name, email address, password, and confirm password.
- Click the **Sign Up** button to create your account.
- You will be redirected to the **Login** page.

### 2. Log In

After signing up, you can log in to your account:

- Click on the **Login** button on the landing page or the top navigation bar.
- Enter your email address and password.
- Click the **Log In** button to access your dashboard.

### 3. Access Your Dashboard

Once logged in, you will be redirected to your **User Dashboard**. Here’s what you can do:

- **View Your Investments**: Your dashboard displays a summary of your investments, including the total portfolio value and a detailed list of individual investments with their performance and status.
- **Check Notifications**: Look for any recent notifications or updates in the notifications section.
- **Analyze Performance**: Utilize the performance chart to assess your investment progress over time.

### 5. Log Out

To securely log out of your account:

- Click on the **Sign Out** button on the **Topbar**.

---

## Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.(Note: Dependencies like Tailwind CSS are already included in package.json, so no additional setup is needed after installation.)
- **React Router**: Used for routing in the React application.

---

## Setup and Installation

### Prerequisites

Ensure you have the following installed on your machine:

- **npm** (or **yarn**) package manager
- **Git**

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Patrickodida/React-FortuneConnect-Landing-Page.git
   ```

2. **Navigate into the Project directory**

```bash
cd React-FortuneConnect-Landing-Page
```

3. **Install Dependencies**

```bash
npm install
```

4. **Start the development server:**

```bash
npm run dev
```

5. **Access the application:**

Navigate to http://localhost:5173 in your browser to view the platform.

6. **Build for production:**

To generate a production build of the project, run:

```bash
npm run build
```

7. **Project Structure**

Here is the project structure for the FortuneConnect Platform:

```bash
  React-FortuneConnect-Landing-Page/
├── public/                # Publicly accessible static assets
│   ├── index.html         # Main HTML file
│   └── favicon.ico        # Favicon for the app
├── src/                   # Source code for the React app
│   ├── assets/            # Images, logos, and other static assets
│   ├── components/        # Reusable components
│   │   ├── Footer.jsx        # Footer section for landing and dashboard pages
│   │   ├── Features.jsx      # Features section on the landing page
│   │   ├── Hero.jsx          # Hero section with a call to action
│   │   ├── InvestmentCard.jsx # Displays individual investment details
│   │   ├── Navbar.jsx        # Navigation bar for the landing page
│   │   ├── Notification.jsx  # Notification section for user updates
│   │   ├── PerformanceChart.jsx # Chart to display investment performance
│   │   ├── PortfolioCard.jsx  # Displays portfolio details in the dashboard
│   │   ├── Sidebar.jsx       # Sidebar navigation for the dashboard
│   │   ├── Topbar.jsx        # Top bar component showing user info and sign-out
│   │   └── Testimonials.jsx  # Testimonials section on the landing page
│   ├── pages/              # Pages for routing
│   │   ├── Home.jsx         # Landing page of the application
│   │   ├── Login.jsx        # User login page
│   │   ├── Signup.jsx       # User signup page
│   │   ├── Pricing.jsx      # Pricing information page
│   │   └── Dashboard.jsx    # User dashboard page
│   ├── data/               # Mock data used within the application
│   │   ├── investment.js    # Data for investments
│   │   ├── notification.js  # Data for notifications
│   │   └── user.js          # Data for user information
│   ├── images/             # All images used in the app
│   ├── App.js              # Main App component where routing and layout are handled
│   ├── index.js            # Entry point for the React application
│   ├── index.css           # Main stylesheet where Tailwind directives are imported
├── tailwind.config.js       # Tailwind CSS configuration file
├── postcss.config.js        # PostCSS configuration for processing Tailwind
├── package.json             # Project metadata and dependencies
├── .gitignore               # Git ignored files (e.g., node_modules)
└── README.md                # Project README file
```

### Key Folders and Files:

- **components/**: Contains reusable components like the footer, sidebar, hero section, and charts used throughout the platform.

- **pages/:** Includes the core pages of the application like the home (landing) page, login, signup, pricing, and dashboard.

- **data/:** Holds mock data files:

- **_investment.js:_** Contains mock data for investments (e.g., investment name, performance, status).
- **_notification.js:_** Contains mock data for user notifications (e.g., recent activities, messages).
- **_user.js:_** Contains mock data for user profiles (e.g., name, avatar, and profile data).

- **images/:** This folder holds all the images used in the application, such as logos, icons, and other visuals.
