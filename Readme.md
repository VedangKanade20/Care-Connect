# Care Connect

Care Connect is a donation and NGO support platform built as a full-stack application with a React frontend and an Express/MongoDB backend. The app supports three user roles — **Donor**, **NGO Staff**, and **Admin** — and allows donors to submit donations, NGO staff to manage surplus and deliveries, and admins to manage users and donation records.

---

## Project Overview

This repo contains two main folders:

- `backend/` — Express API server, MongoDB models, authentication, donation routes, and middleware.
- `client/` — React application built with Vite, role-based dashboards, donation pages, and protected routing.

A top-level `package.json` is used to launch both frontend and backend together with `concurrently`.

---

## Tech Stack

### Backend

- Node.js + Express
- MongoDB via Mongoose
- JWT authentication
- Password hashing with `bcryptjs`
- File upload support with `multer`
- Email/notifications support placeholder via `nodemailer`
- Payment integration placeholder via `stripe`
- Logging with `winston`
- Environment config with `dotenv`
- Development tooling: `nodemon`, `eslint`, `prettier`, `husky`

### Frontend

- React + React Router DOM
- Vite build tool
- UI components with Chakra UI, MUI, and Tailwind CSS
- Radix UI primitives for modals, tooltips, avatars, and more
- State management with Redux Toolkit and `zustand`
- HTTP requests with `axios`
- Stripe client integration with `@stripe/stripe-js`
- Animations with `framer-motion`
- Toast notifications with `react-hot-toast`

---

## Core Features

### User Roles

- **Donor**
  - Register and log in
  - Submit surplus donations
  - Submit monetary donations
  - View own donation history
  - Update profile

- **NGO Staff**
  - Access NGO dashboards
  - View pending surplus donations
  - Manage assigned deliveries
  - View completed deliveries
  - Update surplus donation statuses (core staff)

- **Admin**
  - View and manage all users
  - View and manage surplus donations
  - View and manage monetary donations
  - Remove donation records and user accounts

### Backend APIs

- `POST /api/users/register` — register new users
- `POST /api/users/login` — login and receive JWT
- `GET /api/users/logout` — logout endpoint
- `PUT /api/users/update-user` — update user profile
- `GET /api/users/get-allUsers` — admin-only list users
- `DELETE /api/users/:id` — admin-only delete user

- `POST /api/donations/monetary` — donor creates a monetary donation
- `GET /api/donations/monetary/get-donation` — admin/NGO staff fetch all monetary donations
- `GET /api/donations/monetary/get-donationById/:id` — fetch donation by ID
- `GET /api/donations/monetary/my-donation` — donor donation history

- `POST /api/donations/surplus/donate-surplus` — donor creates surplus donation
- `GET /api/donations/surplus/get-donations` — admin/NGO staff fetch all surplus donations
- `GET /api/donations/surplus/get-donationById/:id` — fetch surplus donation by ID
- `GET /api/donations/surplus/my-donations` — donor surplus history
- `PUT /api/donations/surplus/update-donation/:id` — update surplus status
- `DELETE /api/donations/surplus/delete-donation` — admin removes surplus donation

---

## Frontend Pages

- Landing page
- Login / Register
- About, Contact, News Feed, Tutorial
- Role-based dynamic dashboard
- Donor pages for monetary and surplus donations
- Donation history page
- Admin management pages for users, surplus donations, and monetary donations
- NGO core and delivery staff pages for pending surplus, assigned deliveries, and completed deliveries
- Protected routes that enforce role-based access control

---

## Setup Instructions

### 1. Install dependencies

From the root folder:

```bash
npm install
```

Then install backend and frontend dependencies separately:

```bash
cd backend
npm install
cd ../client
npm install
```

### 2. Configure environment variables

Create a `.env` file in `backend/` with:

```env
PORT=9000
MONGO_URI=your-mongo-connection-string
JWT_SECRET=your-secret-key
```

Create a `.env` file in `client/` with:

```env
VITE_API_URL=http://localhost:9000
```

> If you use a deployed backend, update `VITE_API_URL` to the deployed backend URL.

### 3. Run the app locally

From the root folder:

```bash
npm run dev
```

This starts the backend server and the frontend dev server together.

### 4. Build the frontend

To build the React app for production:

```bash
npm run build --prefix client
```

---

## How to Add Features

Suggested areas to extend the app:

- Add donation status filters and search for admins/NGO staff
- Add role-based dashboards with charts and summary cards
- Add payment integration to complete monetary donation flows
- Add file attachments and images for surplus donations
- Add email notifications for donation approvals and assignment updates
- Add reporting and export features for admin users

---

## Project Structure

- `backend/`
  - `index.js` — server startup
  - `app.js` — Express app config
  - `routes/` — API routes
  - `controllers/` — request handlers
  - `models/` — MongoDB schemas
  - `middlewares/` — auth and role middleware
  - `database/db.js` — MongoDB connection

- `client/`
  - `src/` — React source files
  - `src/pages/` — route pages
  - `src/components/` — reusable UI components
  - `src/hooks/` — custom hooks
  - `src/services/` — API service wrappers
  - `src/store/` — Redux slices and store config

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Implement the feature and follow coding conventions
4. Commit and push your changes
5. Open a pull request

---

## License

This project is open source and available under the MIT License.
