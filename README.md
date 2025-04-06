# MLM Prototype

A prototype of an MLM (Multi-Level Marketing) company system similar to Treasure NFT. This system includes user registration, referral tracking, and earnings management.

## Features

- User registration and authentication
- Referral system with unique referral codes
- Multi-level referral tracking
- Dashboard to view referrals and earnings
- Referral tree visualization
- Secure authentication using JWT

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mlm-prototype
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mlm-db
JWT_SECRET=your-secret-key-here
```

4. Start MongoDB server

5. Run the application:
```bash
npm run dev
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### Dashboard
- GET /api/dashboard - Get user dashboard data
- GET /api/referral-tree - Get user's referral tree

## Security

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Input validation using express-validator
- CORS enabled for API access

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. #   M L M _ C o m p a n y  
 