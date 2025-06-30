# Subscription Tracker API

A RESTful API for managing user subscriptions, built with Node.js, Express, and MongoDB.

## Overview
This project provides user authentication, authorization, and subscription tracking features.

## Features
- User authentication with JWT and bcrypt
- Protected routes with JWT middleware
- Subscription models with auto-renewal
- MongoDB Atlas integration
- Arcjet rate limiting and bot protection
- Global error handling

## Installation
1. Clone repo: `git clone https://github.com/vkochiyaniya/subscription-tracker.git`
2. Install dependencies: `npm install`
3. Set environment variables (see below)

## Environment Variables
Create `.env.development.local`:
- PORT=5500
- NODE_ENV=development
- DB_URI=your_mongodb_atlas_connection_string
- JWT_SECRET=your_secure_jwt_secret
- JWT_EXPIRES_IN=1d
- ARCJET_KEY=your_arcjet_key
- ARCJET_ENV=development


## API Endpoints
- `POST /api/v1/auth/sign-up`: Create user
- `POST /api/v1/auth/sign-in`: Authenticate user
- `GET /api/v1/users`: List all users
- `GET /api/v1/users/:id`: Get user (protected)

## Development
- Start server: `npm run dev`
- Access at `http://localhost:5500`

## Testing
- Use Postman to test endpoints
- Example: `curl -X POST http://localhost:5500/api/v1/auth/sign-up -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","password":"pass123"}'`

## Contributing
- Fork repo
- Create feature branch
- Commit changes
- Push and submit PR

