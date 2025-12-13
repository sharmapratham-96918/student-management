# Student Management System

This is a simple **Student Management System** built using **React, Tailwind CSS, Node.js, Express, and MongoDB**.

The project is mainly focused on **admin login** and **student CRUD operations**.  
Only **admin users** can manage students.

This project is created for **learning purpose and practice**.

---

## Features

- User Register & Login
- JWT Authentication
- Admin protected routes
- Add student
- View students (table & card view)
- Update student
- Delete student
- Responsive UI
- Toast notifications

---

## Tech Stack

**Frontend**
- React
- Tailwind CSS
- React Router
- Context API
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- JWT

---

## Student Data Structure

```json
{
  "name": "Student Name",
  "fatherName": "Father Name",
  "motherName": "Mother Name",
  "rollNumber": 101,
  "address": "City Address",
  "class": 12,
  "subjects": ["Maths", "English"],
  "isActive": true
}
