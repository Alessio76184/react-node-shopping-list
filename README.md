# React + Node.js Shopping List App with Test Automation

This is a simple shopping list web application with a React frontend and a Node.js (Express) backend. That we will have to check

## 🚀 Features

- Login with hardcoded credentials (admin / admin)
- Add, edit, and delete shopping list items
- Fully automated UI and API tests

## 💠 Setup Instructions

### 1. Clone the repository

cd ~/Desktop/Projects
git clone <your-repo-url> react-node-shopping-list
cd react-node-shopping-list

### 2. Install Frontend Dependencies

cd frontend
npm install

### 3. Install Backend Dependencies

cd ../backend
npm install

### 4. Install Playwright

From the project root:

npm install --save-dev @playwright/test
npx playwright install

## ▶️ Running the App

### Start the Backend
cd backend
node server.js

### Start the Frontend (with HTTP)
cd frontend
HTTPS=false npm start

Visit: http://localhost:3000

## ✅ Running the Tests

### API Tests (Jest + Supertest)

cd backend
npm test

### UI Tests (Playwright)

Ensure both frontend and backend are running, then:

cd ..
npx playwright test
--- 

# Test Plan — Shopping List App

## 📋 Scope

This test plan covers both API and UI functionality for a basic shopping list app. The app supports login and CRUD operations for list items.
---

## ✅ What is Being Tested

### 1. API

- POST /login: Valid and invalid credentials
- GET /items: Returns current list
- POST /items: Adds item
- PUT /items/:id: Edits item
- DELETE /items/:id: Deletes item

### 2. UI (Functional)

- Login (success/failure)
- Add new item
- Edit existing item
- Delete item
- Assert correct data is rendered

---

## 🧰 Tools Used

| Area       | Tool            |
|------------|-----------------|
| API Tests  | Supertest + Jest|
| UI Tests   | Playwright      |
| Backend    | Express (Node.js) |
| Frontend   | React (CRA)     |

---

## 📦 Test Coverage

| Feature      | Coverage Type  | Test Location                  |
|--------------|----------------|--------------------------------|
| Login        | API + UI       | `api.test.js`, `shopping.spec.js` |
| Add Item     | API + UI       | `api.test.js`, `shopping.spec.js` |
| Edit Item    | API + UI       | `api.test.js`, `shopping.spec.js` |
| Delete Item  | API + UI       | `api.test.js`, `shopping.spec.js` |

---


## 🏃 How to Run Tests

### API Tests

cd backend
npm test

## UI Tests

# From project root
npx playwright test

Make sure both backend and frontend are running before running Playwright.

## 💾 Assumptions & Limitations

- No persistent database; data resets on restart
- Auth is mocked and insecure (demo only)
- Only tested on local machine (Chrome)