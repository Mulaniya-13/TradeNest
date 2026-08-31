##📈 TradeNest

A modern full-stack stock trading & investment platform built from scratch.

TradeNest is a full-stack fintech web application inspired by modern online stock-brokerage platforms. It allows users to explore stocks, manage a portfolio, place simulated buy/sell orders, track holdings, and monitor their overall investment performance — all through a clean, responsive interface.

«⚠️ Disclaimer: TradeNest is an educational project built for learning and demonstration purposes. It does not execute real trades or handle real money.»

---

✨ Features

🔐 Authentication & Security

- User registration and login
- Secure authentication
- Protected routes
- Session/token-based authorization
- User-specific portfolio data

📊 Market Dashboard

- Explore available stocks
- View stock prices and market information
- Search and filter stocks
- Market overview
- Interactive stock details

💰 Trading

- Simulated stock buying
- Simulated stock selling
- Order quantity management
- Buy/sell validation
- Order history
- Transaction tracking

📦 Portfolio Management

- View current holdings
- Track invested amount
- Monitor current portfolio value
- Calculate profit/loss
- Individual stock performance
- Portfolio summary

📋 Orders & Transactions

- View pending/completed orders
- Transaction history
- Buy/sell records
- Order details
- Transaction timestamps

📈 Analytics

- Portfolio performance
- Profit & loss tracking
- Investment distribution
- Stock-wise performance
- Visual charts and statistics

🎨 User Interface

- Responsive design
- Modern fintech-inspired UI
- Clean dashboard
- Mobile-friendly layouts
- Interactive components
- Loading and error states

---

🖥️ Screenshots

«Add screenshots of your application here as you complete the UI.»

Dashboard

"Dashboard" (./screenshots/dashboard.png)

Trading Interface

"Trading" (./screenshots/trading.png)

Portfolio

"Portfolio" (./screenshots/portfolio.png)

Orders

"Orders" (./screenshots/orders.png)

---

🏗️ Tech Stack

Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS / Bootstrap
- Axios
- React Router
- Chart.js / Recharts

Backend

- Node.js
- Express.js
- REST APIs
- Authentication & Authorization

Database

- MongoDB
- Mongoose

Development Tools

- Git
- GitHub
- VS Code
- Postman
- npm

---

🧩 Architecture

                    ┌───────────────────┐
                    │      Client       │
                    │   React Frontend  │
                    └─────────┬─────────┘
                              │
                              │ HTTP / REST API
                              ▼
                    ┌───────────────────┐
                    │      Server       │
                    │ Node.js + Express │
                    └─────────┬─────────┘
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
       Authentication     Trading API      Portfolio API
             │                │                │
             └────────────────┼────────────────┘
                              ▼
                    ┌───────────────────┐
                    │      MongoDB      │
                    │     Database      │
                    └───────────────────┘

---

📂 Project Structure

TradeNest/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── layouts/
│       ├── hooks/
│       ├── services/
│       ├── utils/
│       ├── assets/
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── utils/
│   ├── config/
│   └── server.js
│
├── screenshots/
│
├── .gitignore
├── README.md
└── package.json

---

🚀 Getting Started

Follow these steps to run TradeNest locally.

1. Clone the repository

git clone https://github.com/YOUR_USERNAME/TradeNest.git

cd TradeNest

---

2. Install dependencies

Frontend

cd frontend
npm install

Backend

Open another terminal:

cd backend
npm install

---

3. Configure environment variables

Create a ".env" file inside the backend directory.

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173

«Never commit your ".env" file to GitHub.»

---

4. Start the backend

cd backend
npm run dev

The backend will run on:

http://localhost:5000

---

5. Start the frontend

In another terminal:

cd frontend
npm run dev

The frontend will normally be available at:

http://localhost:5173

---

🔄 Application Flow

User
 │
 ▼
Login / Register
 │
 ▼
Dashboard
 │
 ├───────────────┐
 ▼               ▼
Explore Stocks   Portfolio
 │               │
 ▼               ▼
Stock Details    Holdings
 │               │
 ▼               ▼
Buy / Sell       P&L
 │               │
 └───────┬───────┘
         ▼
     Order History

---

🗄️ Database Design

The application can be organized around the following core entities:

User

User
├── name
├── email
├── password
├── balance
└── createdAt

Stock

Stock
├── symbol
├── companyName
├── currentPrice
├── exchange
└── updatedAt

Holding

Holding
├── userId
├── stockId
├── quantity
├── averagePrice
└── createdAt

Order

Order
├── userId
├── stockId
├── type
├── quantity
├── price
├── status
└── createdAt

---

🛠️ API Overview

Method| Endpoint| Description
"POST"| "/api/auth/register"| Register a user
"POST"| "/api/auth/login"| Login
"GET"| "/api/stocks"| Get stocks
"GET"| "/api/stocks/:id"| Get stock details
"POST"| "/api/orders/buy"| Place simulated buy order
"POST"| "/api/orders/sell"| Place simulated sell order
"GET"| "/api/orders"| Get order history
"GET"| "/api/portfolio"| Get portfolio
"GET"| "/api/holdings"| Get holdings

«API routes may change as the project evolves.»

---

📊 Trading Logic

TradeNest uses simulated trading logic.

Buy

Total Cost = Stock Price × Quantity

Before placing an order, the system checks:

- User authentication
- Available balance
- Valid stock
- Valid quantity

After a successful simulated purchase:

New Balance = Current Balance - Total Cost

and the holding is updated accordingly.

Sell

Before selling:

- User must own the stock
- Quantity must be valid
- Requested quantity cannot exceed available holdings

After the simulated sale:

New Balance = Current Balance + Sale Value

---

📈 Profit & Loss

For an individual holding:

Invested Value = Average Buy Price × Quantity

Current Value = Current Market Price × Quantity

Profit/Loss = Current Value - Invested Value

Percentage return:

Return % =
((Current Value - Invested Value) / Invested Value) × 100

---

🔮 Roadmap

TradeNest is continuously evolving.

Phase 1 — Foundation

- [x] Project setup
- [x] Frontend architecture
- [x] Backend architecture
- [ ] Database integration
- [ ] Authentication

Phase 2 — Trading

- [ ] Stock listing
- [ ] Stock search
- [ ] Buy orders
- [ ] Sell orders
- [ ] Order history
- [ ] Portfolio management

Phase 3 — Analytics

- [ ] Interactive charts
- [ ] Portfolio performance
- [ ] Profit/loss analytics
- [ ] Market statistics
- [ ] Watchlist

Phase 4 — Advanced Features

- [ ] Real-time market data
- [ ] WebSocket integration
- [ ] Advanced charts
- [ ] Price alerts
- [ ] Notifications
- [ ] Improved order management

Phase 5 — Production

- [ ] Automated testing
- [ ] API documentation
- [ ] Security hardening
- [ ] Performance optimization
- [ ] CI/CD
- [ ] Production deployment

---

🧪 Testing

Testing tools used/planned:

- Postman
- Jest
- React Testing Library
- API integration tests

Example:

npm test

---

🔐 Security Considerations

The project follows common web-development security practices such as:

- Password hashing
- Authentication middleware
- Protected API routes
- Environment variables
- Input validation
- Authorization checks
- Secure database access

«This is an educational project and should not be considered production-ready financial software.»

---

🌐 Deployment

The application can be deployed using services such as:

Frontend

Vercel / Netlify

Backend

Render / Railway

Database

MongoDB Atlas

Add your live application here once deployed:

🔗 Live Demo: YOUR_DEPLOYED_URL

---

🎯 Project Goals

The primary goals of TradeNest are to:

- Understand full-stack application architecture
- Build a complex React interface
- Develop RESTful APIs
- Work with MongoDB
- Implement authentication
- Understand trading and portfolio logic
- Practice database relationships
- Build production-style UI components
- Learn deployment and DevOps fundamentals

---

🧠 What I Learned

Building TradeNest helped me gain practical experience with:

- Full-stack JavaScript development
- React component architecture
- REST API development
- MongoDB data modeling
- Authentication
- State management
- API integration
- Financial calculations
- Git & GitHub
- Debugging
- Deployment

---

⚠️ Disclaimer

TradeNest is not affiliated with, endorsed by, or connected to Zerodha or any other brokerage platform.

This project is created solely for educational and portfolio purposes.

No real money is involved, and simulated transactions do not represent actual stock-market trades.

---

👨‍💻 Author

Aashish Mulaniya

B.Tech — Computer Science & Engineering
Specialization: Artificial Intelligence & Machine Learning

I'm interested in:

- Full-Stack Development
- MERN Stack
- Artificial Intelligence
- Machine Learning
- FinTech
- Software Engineering

Connect with me

- GitHub: "https://github.com/Mulaniya-13"
- LinkedIn: "YOUR_LINKEDIN_URL"

---

⭐ Support

If you found this project interesting, consider giving the repository a ⭐ on GitHub.

It helps support the project and motivates me to keep improving it.

---

📜 License

This project is licensed under the MIT License.

See the "LICENSE" file for more information.

---

<p align="center">Built with ❤️, ☕ and a lot of debugging.

TradeNest — Learn. Build. Invest.

</p>
