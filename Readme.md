# Code_Quest Backend

## Overview

This is the backend implementation for the **Code_Quest** DSA Sheet assignment. The backend includes APIs for managing users, topics, subtopics, and problems related to DSA. The app is built with **Node.js**, **Express**, and **MongoDB** and is designed to be lightweight, scalable, and optimized for read-heavy operations.

---

## Features

### User Management

1. **Signup API**

   - Allows new users to register using their email and password.
   - Features:
     - Password hashing using `bcrypt`.
     - Validation for duplicate users.
     - Payload validation using `Joi` schema.

2. **Login API**
   - Authenticates existing users.
   - Features:
     - Generates a JWT token with a 1-hour expiration.
     - Validates credentials against stored records.
     - Payload validation using `Joi` schema.

### Topic Management

1. **Create Topic/Subtopic/Problem API**

   - Allows users to create topics, subtopics, and problems.
   - Currently a public API (admin-based role access can be added in the future).

2. **Fetch Topic/Subtopic/Problem API**
   - Retrieves detailed information about topics, subtopics, and problems.
   - Features:
     - Fetch by topic, subtopic, or problem.
     - Accessible by both logged-in and logged-out users.

### Problem Management

1. **Mark Problem as Complete/Incomplete API**

   - Enables logged-in users to mark a problem as completed or incomplete.

2. **Delete APIs**
   - APIs to delete topics, subtopics, or problems as required.

---

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**

### Why MongoDB?

1. MongoDB is a NoSQL database that efficiently handles unstructured or semi-structured data, which suits our schema-less approach.
2. Optimized for **read-heavy** applications, making it ideal for fetching details about DSA problems, topics, and subtopics.
3. Flexible schema design simplifies managing dynamic data like user progress and problem hierarchies.

---

## API Endpoints

### User APIs

1. **Signup**

   - **Endpoint:** `/api/signup`
   - **Method:** `POST`
   - **Payload:**
     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```

2. **Login**
   - **Endpoint:** `/api/login`
   - **Method:** `POST`
   - **Payload:**
     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```
   - **Response:**
     ```json
     {
       "token": "jwt_token_here"
     }
     ```

### Topic/Subtopic/Problem APIs

1. **Create Topic**

   - **Endpoint:** `/api/topic`
   - **Method:** `POST`
   - **Payload:**
     ```json
     {
       "name": "Arrays",
       "description": "Basic array operations"
     }
     ```

2. **Create SubTopic**

   - **Endpoint:** `/api/subtopic`
   - **Method:** `POST`
   - **Payload:**
     ```json
     {
       "topicId": "6737c1ecffd9fa93e6a4cd0b",
       "name": "Sorting",
       "description": "This is Sorting SubTopic"
     }
     ```

3. **Create Problem**

   - **Endpoint:** `/api/problem`
   - **Method:** `POST`
   - **Payload:**
     ```json
     {
       "name": "Bubble Sort",
       "level": "Easy",
       "description": "A basic sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order",
       "tutorialLink": "https://www.example.com/bubble-sort-tutorial",
       "leetcodeLink": "https://www.leetcode.com/problems/bubble-sort",
       "articleLink": "https://www.example.com/bubble-sort-article",
       "topicId": "6737c1ecffd9fa93e6a4cd0b",
       "subtopicId": "6737c28c7582668e2c9dd467"
     }
     ```

4. **Fetch Topics By Id**

   - **Endpoint:** `/api/topic/{topicId}`
   - **Method:** `GET`
   - **Params Parameters:**
     - `topicId`
   - **Response:**

   ```json
   {
     "_id": "6737c1ecffd9fa93e6a4cd0b",
     "name": "Array",
     "description": "This is an Array Topic",
     "createdAt": "2024-11-15T21:49:32.991Z",
     "updatedAt": "2024-11-15T21:49:32.991Z",
     "_v": 0
   }
   ```

5. **Fetch SubTopics**

   - **Endpoint:** `/api/subtopic`
   - **Method:** `GET`
   - **Response:**

   ```json
   [
     {
       "_id": "6737c28c7582668e2c9dd467",
       "topicId": {
         "_id": "6737c1ecffd9fa93e6a4cd0b",
         "name": "Array"
       },
       "name": "Sorting",
       "description": "This is Sorting SubTopic",
       "createdAt": "2024-11-15T21:52:12.033Z",
       "updatedAt": "2024-11-15T21:52:12.033Z",
       "__v": 0
     }
   ]
   ```

6. **Fetch Problem By Id**
   - **Endpoint:** `/api/problem/{problemId}`
   - **Method:** `GET`
   - **Params Parameters:**
     - `problemId`
   - **Response:**
   ```json
   {
     "_id": "6737c54389521ce51975d559",
     "name": "Bubble Sort",
     "level": "Easy",
     "description": "A basic sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order",
     "tutorialLink": "https://www.example.com/bubble-sort-tutorial",
     "leetcodeLink": "https://www.leetcode.com/problems/bubble-sort",
     "articleLink": "https://www.example.com/bubble-sort-article",
     "topicId": {
       "_id": "6737c1ecffd9fa93e6a4cd0b",
       "name": "Array"
     },
     "subtopicId": {
       "_id": "6737c28c7582668e2c9dd467",
       "name": "Sorting"
     },
     "createdAt": "2024-11-15T22:03:47.768Z",
     "updatedAt": "2024-11-15T22:03:47.768Z",
     "__v": 0
   }
   ```

### User Progress APIs

1. **Mark Problem Complete/Incomplete**

   - **Endpoint:** `/api/user/toggle-completion/{userId}`
   - **Method:** `POST`
   - **Payload:**
     ```json
     {
       "problemId": "6737c54389521ce51975d559"
     }
     ```

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone <clone-url>
   cd <folder-name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:

   ```env
   MONGO_URI=mongodb://localhost:27017/zesty_zone
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

5. A video is recorded and stored in the video folder.

---

## Future Enhancements

1. **Role-Based Access Control (RBAC):**

   - Restrict topic and problem creation to admins.

2. **Pagination:**

   - Implement pagination for fetch APIs to handle large datasets.

3. **Search:**

   - Add search functionality for topics, subtopics, and problems.

4. **Cache:**
   - Use Redis for caching frequently accessed data.

---
