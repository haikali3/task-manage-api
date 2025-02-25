# Task Manager API

This is a Task Manager API built with Node.js and TypeScript. It allows users to manage their tasks with authentication and database support.

## Project Structure

```
task-manager-api/
│── src/
│   ├── models/
│   │   ├── User.ts
│   │   ├── Task.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── taskRoutes.ts
│   ├── middleware/
│   │   ├── authMiddleware.ts  <-- (For JWT authentication)
│   ├── config/
│   │   ├── db.ts  <-- (For database connection)
│   ├── index.ts
│── .env
│── package.json
│── tsconfig.json
│── nodemon.json
│── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/your-username/task-manager-api.git
  ```
2. Navigate to the project directory:
  ```sh
  cd task-manager-api
  ```
3. Install dependencies:
  ```sh
  npm install
  ```
4. Create a `.env` file and add your environment variables:
  ```
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  ```

### Running the API

1. Start the development server:
  ```sh
  npm run dev
  ```
2. The API will be running at `http://localhost:3000`.

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login a user

### Tasks

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `GET /tasks/:id` - Get a task by ID
- `PATCH /tasks/:id` - Update a task by ID
- `DELETE /tasks/:id` - Delete a task by ID

## License

This project is licensed under the MIT License.