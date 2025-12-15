# 🎯 CareerPilot - AI-Powered Career Path Advisor

<div align="center">

![CareerPilot](https://img.shields.io/badge/CareerPilot-AI%20Career%20Advisor-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**An intelligent full-stack platform that helps students and professionals discover suitable career paths through AI-powered analysis, personalized roadmaps, and weekly coaching.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [API Docs](./docs/API_DOCS.md) • [Architecture](./docs/ARCHITECTURE.md)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Development Roadmap](#-development-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 About

**CareerPilot** is a full-stack AI platform designed to solve the career guidance gap for students and early-career professionals. By analyzing skills, CVs, interests, and goals, the system generates personalized career recommendations, creates detailed learning roadmaps, and provides ongoing AI coaching.

### Key Highlights
- 🤖 **AI-Powered Analysis** - Uses OpenAI GPT models to analyze CVs and recommend career paths
- 📊 **Skill Gap Analysis** - Identifies missing skills and suggests targeted learning resources
- 🗺️ **Personalized Roadmaps** - Generates 3-6 month step-by-step career development plans
- 💬 **Weekly AI Coaching** - Provides ongoing guidance, tasks, and feedback
- 📈 **Progress Tracking** - Visual dashboards to monitor skill development

---

## 🎯 The Problem

Most students and early-career individuals face these challenges:

❌ **Don't know what career suits their skills** - Lack of self-awareness about strengths  
❌ **Don't know which courses/certifications to take** - Overwhelmed by options  
❌ **Don't understand current market demand** - Skills don't match job requirements  
❌ **Don't have a mentor to guide them weekly** - No personalized feedback  

**Result:** Confusion, wasted money on wrong courses, and delayed career growth.

---

## ✅ The Solution

CareerPilot provides an end-to-end career guidance system:

### 1. **Intelligent Profile Creation**
Users create detailed profiles including:
- Current skills and experience
- Education background
- Career interests and goals
- CV upload for automated analysis

### 2. **AI-Powered CV Analysis**
The system automatically:
- Extracts skills, tools, and experience from CVs
- Identifies strength areas and gaps
- Compares profile against market demands

### 3. **Personalized Career Recommendations**
Using AI and market data, generates:
- **Top 3-5 suitable career paths** based on current skills
- **Missing skills analysis** for each path
- **Recommended certifications** (AWS, Google, Microsoft, etc.)
- **Market demand insights** and salary ranges

### 4. **Customized Learning Roadmaps**
Creates detailed 3-6 month plans with:
- Weekly skill-building tasks
- Course recommendations (Coursera, Udemy, freeCodeCamp)
- Hands-on project ideas
- Certification preparation guides
- Interview preparation resources

### 5. **Weekly AI Coaching**
Continuous support through:
- Weekly check-ins and progress reviews
- Personalized task assignments
- Skill assessments and feedback
- Career Q&A chatbot
- Motivational guidance

---

## ✨ Features

### 🎯 AI-Powered Features
- ✅ CV Parsing & Skill Extraction (PDF/DOCX support)
- ✅ Natural Language Career Recommendations
- ✅ AI Chatbot Coach (GPT-4 powered)
- ✅ Personalized Upskilling Plans
- ✅ Automated Roadmap Generation
- ✅ Skill-Gap Analysis Engine

### 🧭 Platform Functionality
- ✅ User Authentication (JWT-based)
- ✅ Interactive User Dashboard
- ✅ Profile Management System
- ✅ CV Upload & Viewer
- ✅ Real-time AI Chat Interface
- ✅ Progress Tracking System
- ✅ Visual Roadmap Viewer

### 📊 Advanced Features
- ✅ Job Market Insights (Live API data)
- ✅ Course Recommendations Engine
- ✅ Skill Progress Visualization (Charts/Graphs)
- ✅ Weekly Email Coaching (Scheduled tasks)
- ✅ Community Resources Library

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 + Vite
- **Styling:** TailwindCSS v4
- **Routing:** React Router v7
- **Charts:** Recharts
- **Icons:** React Icons
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js 20+
- **Framework:** Express v5
- **Authentication:** JWT + bcrypt
- **AI Integration:** OpenAI API v6
- **File Processing:** Multer, pdf-parse
- **Security:** CORS, cookie-parser

### Database
- **Database:** PostgreSQL
- **ORM:** Sequelize v6
- **Migrations:** Sequelize CLI

### DevOps & Tools
- **Version Control:** Git
- **Package Manager:** npm
- **Environment:** dotenv
- **API Testing:** Postman/Thunder Client
- **Code Quality:** ESLint, Prettier

### Deployment (Planned)
- **Frontend:** Vercel / Netlify
- **Backend:** Render / Railway
- **Database:** PostgreSQL (Supabase / Neon)

---

## 📁 Project Structure

```
CareerPilot/
│
├── backend/                      # Node.js + Express API
│   ├── src/
│   │   ├── controllers/          # Request handlers
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── cvController.js
│   │   │   ├── careerController.js
│   │   │   └── chatController.js
│   │   │
│   │   ├── routes/               # API routes
│   │   │   ├── authRoutes.js
│   │   │   ├── userRoutes.js
│   │   │   ├── cvRoutes.js
│   │   │   ├── careerRoutes.js
│   │   │   └── chatRoutes.js
│   │   │
│   │   ├── models/               # Database models (Sequelize)
│   │   │   ├── User.js
│   │   │   ├── Profile.js
│   │   │   ├── CV.js
│   │   │   ├── Skill.js
│   │   │   ├── CareerPath.js
│   │   │   ├── Roadmap.js
│   │   │   └── Progress.js
│   │   │
│   │   ├── services/             # Business logic
│   │   │   ├── authService.js
│   │   │   ├── cvService.js
│   │   │   ├── careerService.js
│   │   │   └── progressService.js
│   │   │
│   │   ├── ai/                   # AI integration
│   │   │   ├── openaiClient.js
│   │   │   ├── careerAdvisor.js
│   │   │   ├── roadmapGenerator.js
│   │   │   └── chatbot.js
│   │   │
│   │   ├── cv_parser/            # CV processing
│   │   │   ├── pdfParser.js
│   │   │   ├── skillExtractor.js
│   │   │   └── experienceParser.js
│   │   │
│   │   └── utils/                # Utilities
│   │       ├── jwtHelper.js
│   │       ├── validators.js
│   │       └── errorHandler.js
│   │
│   ├── config/
│   │   └── database.js           # DB configuration
│   │
│   ├── migrations/               # Database migrations
│   ├── seeders/                  # Seed data
│   ├── uploads/                  # CV uploads
│   ├── tests/                    # Unit/Integration tests
│   ├── app.js                    # Express app setup
│   ├── server.js                 # Server entry point
│   ├── package.json
│   └── .env.example
│
├── frontend/                     # React + Vite
│   ├── src/
│   │   ├── components/           # Reusable components
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Card.jsx
│   │   │   │
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   └── RegisterForm.jsx
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   ├── StatsCard.jsx
│   │   │   │   ├── SkillChart.jsx
│   │   │   │   └── ProgressBar.jsx
│   │   │   │
│   │   │   ├── profile/
│   │   │   │   ├── ProfileEditor.jsx
│   │   │   │   └── SkillSelector.jsx
│   │   │   │
│   │   │   ├── cv/
│   │   │   │   ├── CVUploader.jsx
│   │   │   │   └── CVViewer.jsx
│   │   │   │
│   │   │   ├── career/
│   │   │   │   ├── CareerCard.jsx
│   │   │   │   ├── RoadmapViewer.jsx
│   │   │   │   └── SkillGapChart.jsx
│   │   │   │
│   │   │   └── chat/
│   │   │       ├── ChatInterface.jsx
│   │   │       └── MessageBubble.jsx
│   │   │
│   │   ├── pages/                # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── CVUpload.jsx
│   │   │   ├── CareerRecommendations.jsx
│   │   │   ├── Roadmap.jsx
│   │   │   ├── Chat.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── hooks/                # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useApi.js
│   │   │   └── useChat.js
│   │   │
│   │   ├── services/             # API services
│   │   │   ├── authService.js
│   │   │   ├── userService.js
│   │   │   ├── cvService.js
│   │   │   ├── careerService.js
│   │   │   └── chatService.js
│   │   │
│   │   ├── assets/               # Images, fonts, etc.
│   │   ├── App.jsx               # Main app component
│   │   ├── index.css             # Global styles
│   │   └── main.jsx              # Entry point
│   │
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── docs/                         # Documentation
│   ├── API_DOCS.md               # API endpoints
│   ├── DATABASE.md               # Database schema
│   ├── ARCHITECTURE.md           # System design
│   └── ROADMAP.md                # Development plan
│
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 20+ ([Download](https://nodejs.org/))
- **PostgreSQL** 15+ ([Download](https://www.postgresql.org/))
- **npm** or **yarn**
- **Git**

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/careerpilot.git
cd careerpilot
```

#### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your credentials
# - Add PostgreSQL connection details
# - Add OpenAI API key
# - Set JWT secret

# Run database migrations
npx sequelize-cli db:migrate

# (Optional) Seed database
npx sequelize-cli db:seed:all

# Start development server
npm run dev
```

Backend runs on `http://localhost:5000`

#### 3. Frontend Setup

```bash
# Navigate to frontend (from root)
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with backend API URL

# Start development server
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 🔐 Environment Variables

### Backend `.env`

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=careerpilot_db
DB_USER=postgres
DB_PASSWORD=your_password

# JWT Configuration
JWT_SECRET=your_super_secret_key_change_this
JWT_EXPIRES_IN=7d

# OpenAI Configuration
OPENAI_API_KEY=sk-your-openai-api-key-here
OPENAI_MODEL=gpt-4o-mini

# CORS Configuration
FRONTEND_URL=http://localhost:5173

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_DIR=./uploads
```

### Frontend `.env`

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
VITE_API_TIMEOUT=30000

# App Configuration
VITE_APP_NAME=CareerPilot
VITE_MAX_UPLOAD_SIZE=5
```

---

## 📚 API Documentation

Detailed API documentation is available in [`docs/API_DOCS.md`](./docs/API_DOCS.md)

### Quick Overview

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | User registration |
| `/api/auth/login` | POST | User login |
| `/api/user/profile` | GET | Get user profile |
| `/api/cv/upload` | POST | Upload CV |
| `/api/cv/parse` | POST | Parse CV & extract skills |
| `/api/career/recommend` | POST | Get career recommendations |
| `/api/career/roadmap` | POST | Generate learning roadmap |
| `/api/chat/message` | POST | Send message to AI coach |
| `/api/progress/track` | POST | Update progress |

---

## 🗄️ Database Schema

Full database documentation in [`docs/DATABASE.md`](./docs/DATABASE.md)

### Core Tables
- **users** - User accounts and authentication
- **profiles** - User profile details (skills, education, goals)
- **cvs** - Uploaded CV files and metadata
- **skills** - Skills extracted from CVs and profiles
- **career_paths** - Available career paths and requirements
- **roadmaps** - Generated learning roadmaps
- **progress** - User progress tracking
- **chat_messages** - AI coaching conversations

---

## 🏗️ Architecture

System architecture details in [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)

### High-Level Overview

```
┌─────────────────┐
│  React Frontend │ ──────> User Interface
└────────┬────────┘
         │ HTTPS/REST
         ▼
┌─────────────────┐
│  Express API    │ ──────> Authentication, Business Logic
└────────┬────────┘
         │
    ┌────┴────┬──────────┬─────────┐
    ▼         ▼          ▼         ▼
┌────────┐ ┌──────┐ ┌─────────┐ ┌──────┐
│Postgres│ │OpenAI│ │CV Parser│ │Cache │
└────────┘ └──────┘ └─────────┘ └──────┘
```

---

## 📅 Development Roadmap

Full 4-week development plan in [`docs/ROADMAP.md`](./docs/ROADMAP.md)

### Phase 1 - Foundation (Week 1)
- ✅ Project setup & folder structure
- ✅ Database schema design
- ⏳ Authentication system
- ⏳ Basic frontend layout

### Phase 2 - Core Features (Week 2)
- ⏳ CV upload & parsing
- ⏳ User profile management
- ⏳ OpenAI integration
- ⏳ Career recommendation engine

### Phase 3 - AI Features (Week 3)
- ⏳ Roadmap generation
- ⏳ Chatbot implementation
- ⏳ Skill gap analysis
- ⏳ Progress tracking

### Phase 4 - Polish & Deploy (Week 4)
- ⏳ UI/UX improvements
- ⏳ Testing & bug fixes
- ⏳ Documentation
- ⏳ Deployment

---

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# Run all tests
npm run test:all
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


<div align="center">

**Built with ❤️ for helping people find their dream careers**

</div>
