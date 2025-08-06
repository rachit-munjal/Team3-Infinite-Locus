# Local Reviews Platform
A crowdsourced review platform where users can review, rate, and browse local businesses by category. Admins can approve or reject reviews before they are published.

---

## Features
- Browse local businesses by category (restaurants, shops, services, etc.)
- Submit reviews with ratings on multiple criteria:
  - Quality
  - Service
  - Value
- View average ratings for each business
- Admin approval system for reviews before publication
- Search and filter businesses by location, category, and rating

---

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/rachit-munjal/Team3-Infinite-Locus.git
```
### 2. Server Setup
```bash
cd server
npm install
```
### 3. Client Setup
```bash
cd client
npm install
``` 
### 4. Setup .env in Server Directory
``` bash
MONGO_URI = <your_mongoDb_url>
PORT = <port_you_want_to_define>
JWT_SECRET = <your_jwt_secret>
```
### 5. Run Server
``` bash
cd server
npm start
```
### 6. Run Client
``` bash
cd client
npm run dev
```
