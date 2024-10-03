# TeachTrack

## Overview

This application is a comprehensive online gradebook system designed for teachers to manage their classes, students, grades, and attendance efficiently. It provides a user-friendly interface for teachers to keep track of their students' academic progress and attendance records.


![image](https://github.com/user-attachments/assets/5bb718b3-bff7-4648-be44-6611cf6cf769)


## Features

### User Authentication
- Create an account using username, password, and email
- Login with either email or username and password

### Class Management
- Create, Read, Update, and Delete (CRUD) operations for classes
- View all classes on the main dashboard
- Search and filter classes by academic year, subject, or name

 ![image](https://github.com/user-attachments/assets/8730cb4a-c550-4705-8d26-105657499d8c)



### Student Management
- Add students to each class
- Students are automatically sorted alphabetically within each class

### Grade Management
- Add, edit, and delete grades for each student
- Grades are displayed from most recent to oldest
- Calculate and display average grade for each student
- Color-coded grade display:
  - Green for grades 8 and above
  - Yellow for grades between 5 and 8
  - Red for grades below 5

### Attendance Tracking
- Record student attendance (Present, Absent, Late)
- Attendance records are sorted by date, with the most recent at the top

## User Interface

The application features a clean and intuitive user interface:

- **Main Dashboard**: Displays all classes with options to edit, delete, or view each class
- **Class View**: Shows a list of students in the class with their grades and attendance records
- **Student Card**: Each student's card displays their name, average grade, individual grades, and attendance records

## Technologies Used

### Frontend
- React
- Bootstrap
- Zustand (for state management)
- Axios (for API requests)
- React Router DOM (for routing)

### Backend
- Node.js
- Express
- pg (PostgreSQL client)
- dotenv (for environment variables)
- body-parser
- bcrypt (for password hashing)

### Database
- PostgreSQL

## Hosting

- Frontend: Hosted on Vercel
- Backend: Hosted on Render
- Database: Hosted on Supabase
