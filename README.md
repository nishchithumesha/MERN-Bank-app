# Bank App (MERN-like)

A simple banking web application built with Node.js, Express, MongoDB, and EJS. This project supports user registration, login, deposit, withdrawal, transfers, transaction history, and PDF statement generation.

## Features

- User registration and login
- Secure password hashing with `bcryptjs`
- Session-based authentication with `express-session`
- MongoDB session storage using `connect-mongo`
- Deposit and withdrawal actions
- Peer-to-peer transfers between registered users
- Transaction history for each user
- PDF bank statement export using `pdfkit`
- EJS view templates and Bootstrap-friendly UI

## Technologies

- Node.js
- Express
- MongoDB / Mongoose
- EJS
- bcryptjs
- express-session
- connect-mongo
- pdfkit
- dotenv

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Bank_APP_MERN-main
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with the following variables:

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/bank_app
SESSION_SECRET=your-secret-key
```

4. Start the application:

```bash
node app.js
```

5. Open the app in your browser:

```text
http://localhost:3000
```

## Available Routes

- `/` — Home page
- `/register` — Registration page
- `/login` — Login page
- `/dashboard` — Protected dashboard page
- `/deposit` — Deposit funds
- `/withdraw` — Withdraw funds
- `/transfer` — Transfer funds to another user
- `/statement/pdf` — Download PDF statement
- `/logout` — Logout

## Project Structure

- `app.js` — Main Express application and route setup
- `routes/authRoutes.js` — Authentication routes
- `routes/accountRoutes.js` — Account actions and PDF statement route
- `controllers/authController.js` — Auth controllers for login/register/logout
- `models/User.js` — User schema
- `models/Transaction.js` — Transaction schema
- `middleware/auth.js` — Route protection middleware
- `views/` — EJS templates
- `public/` — Static assets (CSS, images)

## Notes

- Make sure MongoDB is running locally or update `MONGO_URL` to use a remote MongoDB instance.
- The session store and user authentication depend on `SESSION_SECRET` being set.
- Passwords are hashed before saving to the database.

## Future Improvements

- Add form validation and improved error handling
- Create a native `npm start` script
- Add unit tests and request validation
- Support account balance history charts

---

Enjoy building and customizing your banking app! 🚀
