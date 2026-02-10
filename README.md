# Calendar Booking Backend Service

**Kraftshala – Intern, Backend Developer Assignment (2026)**

This project is a **calendar booking system** that allows users to schedule meetings while **strictly preventing overlapping time slots**, as per the assignment requirements.

---

## 🚀 Live Demo

* **Frontend (Deployed):**
  👉 [https://kraftshala-sfa-task.netlify.app/](https://kraftshala-sfa-task.netlify.app/)

* **Backend Repository:**
  👉 [https://github.com/farazsfa007/Kraftshala-task-backend](https://github.com/farazsfa007/Kraftshala-task-backend)

* **Frontend Repository:**
  👉 [https://github.com/farazsfa007/Kraftshala-task-frontend](https://github.com/farazsfa007/Kraftshala-task-frontend)

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* Sequelize ORM
* SQLite3
* dotenv
* CORS

### Frontend (Demo)

* React
* Fetch API
* Plain CSS

---

## ✨ Features

### User Management

* Create user
* Fetch user by ID
* Unique email validation

### Meeting Management

* Create meeting
* List meetings
* Get meeting by ID
* Update meeting
* Delete meeting

### Core Business Rule (Mandatory)

❌ **Overlapping meetings are not allowed**

A conflict exists if:

```
existing.startTime < new.endTime
AND
existing.endTime > new.startTime
```

If a conflict exists, the API responds with:

* **HTTP 400**

```json
{
  "message": "Time slot already booked"
}
```

---

## 📁 Backend Project Structure

```
src/
 ├─ app.js
 ├─ server.js
 ├─ config/
 │   └─ database.js
 ├─ middlewares/
 │   └─ errorHandler.js
 ├─ utils/
 │   └─ asyncHandler.js
 └─ modules/
     ├─ user/
     │   ├─ service.jsx
     │   ├─ interface.jsx
     │   └─ routes.jsx
     └─ meeting/
         ├─ service.jsx
         ├─ interface.jsx
         └─ routes.jsx
```

**Architecture Flow:**

```
Routes → Controller → Service → Model → Database
```

---

## 🗄 Database Design

### users table

* `id` (Primary Key)
* `name` (string, required)
* `email` (string, required, unique)
* `createdAt`, `updatedAt`

### meetings table

* `id` (Primary Key)
* `userId` (Foreign Key → users.id)
* `title` (string, required)
* `startTime` (datetime, required)
* `endTime` (datetime, required)
* `createdAt`, `updatedAt`

**Relationship:**

* One User → Many Meetings

---

## 🔗 API Endpoints

### Users

**Create User**

```
POST /users
```

```json
{
  "name": "Faraz",
  "email": "faraz@test.com"
}
```

**Get User**

```
GET /users/:id
```

---

### Meetings

**Create Meeting**

```
POST /meetings
```

```json
{
  "userId": 1,
  "title": "Interview",
  "startTime": "2026-02-10T10:00:00.000Z",
  "endTime": "2026-02-10T10:30:00.000Z"
}
```

**List Meetings**

```
GET /meetings
```

Optional query params:

* `userId`
* `startDate`
* `endDate`

**Get Meeting**

```
GET /meetings/:id
```

**Update Meeting**

```
PUT /meetings/:id
```

**Delete Meeting**

```
DELETE /meetings/:id
```

---

## 🧪 Conflict Prevention Example

1. Create meeting: **10:00 – 10:30** ✅
2. Try creating meeting: **10:15 – 10:45** ❌

   ```json
   {
     "message": "Time slot already booked"
   }
   ```
3. Create meeting: **10:30 – 11:00** ✅

---

## ⚙️ Backend Setup (Local)

```bash
git clone https://github.com/farazsfa007/Kraftshala-task-backend.git
cd Kraftshala-task-backend
npm install
```

### Create `.env`

```env
PORT=3000
DB_STORAGE=database.sqlite
```

### Start Server

```bash
npm run dev
```

Backend runs on:

```
http://localhost:3000
```

---

## 🖥 Frontend (Demo Purpose)

```bash
git clone https://github.com/farazsfa007/Kraftshala-task-frontend.git
cd Kraftshala-task-frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🎥 Screen Recording (Demo Video)

The demo video includes:

* Feature walkthrough
* Conflict rejection demo
* API testing using Postman
* Quick code walkthrough (structure + key logic)

🔗 **Screen Recording Link:**
👉 *(https://www.loom.com/share/72a773d848544c1c976d8db8431a05d8)*

---

## 📝 Key Notes

* SQLite is used for simplicity and fast local setup.
* Conflict logic is implemented in the **service layer**.
* Same conflict logic is reused for **create and update** operations.
* Proper HTTP status codes and meaningful error messages are returned.

---

## ✅ Assignment Checklist

✔ Node.js + Express
✔ Sequelize ORM
✔ SQL Database
✔ Clean modular architecture
✔ Business rule enforcement
✔ Validation & error handling
✔ Deployed frontend
✔ Public GitHub repositories

---