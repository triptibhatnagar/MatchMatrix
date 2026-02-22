# MatchMatrix - Resume Analyzer & Job Match Platform
MatchMatrix is a MERN-based resume-job compatibility engine that parses resumes, extracts skills, and computes match scores against job descriptions to identify skill gaps.

## 📌 Project Overview

MatchMatrix is a full-stack MERN application that simulates a lightweight Applicant Tracking System (ATS).

The platform allows students to upload resumes, automatically extracts skills, and matches them against job descriptions to compute a compatibility score and identify missing skills.

This system helps students understand:
- Why their resume gets rejected
- Which skills they are missing
- How well they match a specific job role

---

# 1️⃣ Problem Statement

## 🎯 Target Users
- Final-year students
- Freshers applying for internships or jobs
- College placement applicants

## 🚨 Core Problem

Students apply to multiple jobs without knowing:
- Whether their resume matches job requirements
- What skills they are missing
- Why they are being rejected

Most resume rejections happen due to:
- ATS keyword filtering
- Skill mismatch
- Poor alignment with job descriptions

There is no simple tool that gives structured feedback on resume-job compatibility.

---

# 2️⃣ Proposed Solution

MatchMatrix solves this problem by:

- Parsing resume PDFs
- Extracting structured skill data
- Comparing resume skills with job required skills
- Calculating a match percentage
- Identifying missing skills
- Providing analytics insights

This system acts as a simplified ATS simulation for students.

---

# 3️⃣ Core Features (MVP Scope)

## 👤 Authentication
- User Registration (Student / Admin)
- Login using JWT
- Role-based access control

---

## 📄 Resume Management
- Upload resume (PDF format)
- Extract raw text from PDF
- Extract technical skills
- Store structured resume data in database

---

## 💼 Job Management
- Admin can post job openings
- Students can view job listings
- Each job contains required skills

---

## 🔎 Matching Engine
- Compare resume skills with job required skills
- Calculate match percentage
- Display:
  - Matched skills
  - Missing skills
  - Match score

---

## 📊 Analytics
- Most demanded skills
- Student skill distribution
- Match history tracking

---

# 4️⃣ System Architecture

## 🏗️ High-Level Architecture

Client (React Frontend)
        ↓
Node.js + Express Backend
        ↓
MongoDB Database

---

## 🔄 Resume Upload Flow

1. User uploads resume
2. Backend receives file using Multer
3. PDF is parsed using pdf-parse
4. Raw text is extracted
5. Skill extraction logic runs
6. Extracted skills are stored in MongoDB

---

## 🔄 Job Matching Flow

1. User selects a job
2. Backend fetches:
   - Resume skills
   - Job required skills
3. Matching algorithm runs
4. Match percentage is calculated
5. Response returned with:
   - Match %
   - Matched skills
   - Missing skills

---

# 5️⃣ Database Design (MongoDB Collections)

## 🧑 Users Collection

- _id
- name
- email
- password (hashed)
- role (student | admin)
- createdAt
- updatedAt

---

## 📄 Resumes Collection

- _id
- userId (Reference to Users)
- rawText
- extractedSkills [Array]
- education
- experience
- uploadedAt

---

## 💼 Jobs Collection

- _id
- title
- company
- description
- requiredSkills [Array]
- postedBy (Reference to Users)
- createdAt

---

## 📊 Match History Collection

- _id
- userId
- jobId
- matchPercentage
- matchedSkills [Array]
- missingSkills [Array]
- createdAt

---

# 6️⃣ Backend Architecture

## 📂 Folder Structure

backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── resumeController.js
│   ├── jobController.js
│   └── matchController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Resume.js
│   ├── Job.js
│   └── Match.js
│
├── routes/
│   ├── authRoutes.js
│   ├── resumeRoutes.js
│   ├── jobRoutes.js
│   └── matchRoutes.js
│
├── utils/
│   ├── skillExtractor.js
│   └── matchEngine.js
│
└── server.js

---

# 7️⃣ Backend Logic (Phase-wise)

## ✅ Phase 1 – Authentication
- User registration
- Password hashing (bcrypt)
- JWT token generation
- Protected routes

---

## ✅ Phase 2 – Resume Upload & Parsing
- File upload using Multer
- PDF parsing using pdf-parse
- Extract raw text
- Run skill extraction utility

---

## ✅ Phase 3 – Job CRUD
- Admin can create jobs
- Students can fetch jobs
- Update/delete job (admin only)

---

## ✅ Phase 4 – Matching Engine

### Skill Extraction Strategy

Maintain a predefined skill dictionary, for example:

- react
- node
- mongodb
- sql
- aws
- docker
- java
- python

Check if these keywords exist in resume text.

---

### Matching Algorithm

1. Find common skills between resume and job.
2. Calculate match percentage:

matchPercentage = (commonSkills / totalRequiredSkills) × 100

3. Return:
   - Match percentage
   - Matched skills
   - Missing skills

---

# 8️⃣ Future Enhancements

- NLP-based skill extraction
- AI-powered resume suggestions
- Skill demand heatmaps
- Resume scoring algorithm
- Company dashboard
- Multi-resume support

---

# 🎯 Project Goal

MatchMatrix aims to bridge the gap between student resumes and job requirements using structured data extraction and algorithmic skill matching.

It demonstrates:
- Full MERN stack implementation
- Backend system design
- File handling & parsing
- Algorithm-based matching logic
- Scalable architecture

---

## 🚀 Tech Stack

Frontend: React  
Backend: Node.js, Express  
Database: MongoDB  
Authentication: JWT  
File Handling: Multer  
PDF Parsing: pdf-parse  

---
