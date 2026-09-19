# Restaurant App

A modern restaurant ordering web app built with React on the frontend and an Express backend for Stripe payments. The project includes menu browsing, product detail views, cart management, authentication, and a checkout flow designed for a restaurant storefront experience.

## Main Features

- Browse restaurant menu categories such as burgers, pasta, and pizzas
- View product details and add items to the cart
- Manage cart quantity, totals, and order summary
- Protected app routes for authenticated users
- Login and sign-up flows powered by Supabase Auth
- Checkout experience using Stripe Payment Element
- Responsive layout with mobile-friendly navigation
- Homepage promotional slider and featured offers

## Tech Stack

- Frontend: React, Vite, Redux Toolkit, React Router, Tailwind CSS
- State/Data: TanStack React Query, Supabase JavaScript client
- Payment: Stripe React SDK and Stripe API
- Backend: Supabase
- Deployment: Vercel

## Installation and Setup

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```
3. Install backend dependencies:
   ```bash
   cd ../server
   npm install
   ```
4. Add the required environment variables in the relevant project folders.

## Environment Variables

The project expects the following environment variable names (values are not included here):

- `VITE_SUPABASE_KEY`
- `STRIPE_SECRET_KEY`

## How to Run

Start the backend first:

```bash
cd server
node server.js
```

Then start the frontend in a separate terminal:

```bash
cd client
npm run dev
```

The frontend is configured to proxy API requests to the local backend at `http://localhost:4242`.

## Live Demo

- Frontend: https://restaurant-website-eight-tan.vercel.app/

## Notes

This project is a full-stack restaurant storefront demo with real integration points for Supabase authentication and Stripe checkout. The app structure reflects the current implementation and has not been modified beyond the README update.
