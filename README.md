# CivicOS — AI-Powered Municipal Operating System

> **"Transforming unstructured citizen complaints into real-time municipal intelligence, prioritized incident clusters, automated workflows, and verified civic action."**

CivicOS is a hackathon-ready, production-grade **Municipal Operating System** built on the MERN stack. Designed for modern city administrators, municipal department heads, field officers, and citizens, CivicOS bridges the gap between raw public reports and rapid municipal field resolution.

---

## 🌟 Key Features & Innovations

- **Smart Citizen Complaint Reporting**: Simplified mobile reporting with auto-location geotagging, category suggestion, and immediate nearby duplicate warnings.
- **AI Classification & Deterministic Priority Engine**: Natural Language Processing (LLM / Rule-engine fallback) extracting category, severity, safety risk flags, and calculating transparent **0–100 Priority Scores**.
- **Haversine 500m Duplicate Detection & Incident Clustering**: Aggregates nearby complaints into unified **Incident Clusters** (e.g. `CLUSTER #INC-1042` combining 37 citizen reports into 1 single field action).
- **Geospatial Intelligence Map**: Full-screen interactive Leaflet map rendering colored severity pins (Critical: red, High: orange, Medium: yellow, Low: green), 500m cluster radius circles, category filters, and slide-out drawer metadata.
- **Department Capacity & SLA Countdown Enforcement**: Category-based target deadlines, 80%+ warning thresholds, and overdue escalation alerts with department workload progress bars (e.g. Public Works 87% overloaded).
- **Mobile Field Officer Desk**: Mobile-optimized job cards with GPS navigation links, SLA countdown timers, photo evidence uploads, and status transition workflows.
- **Citizen Resolution Verification**: Closed-loop feedback enabling citizens to verify resolution or reopen unresolved complaints.
- **CivicOS Intelligence AI Assistant**: Interactive slide-out query drawer answering questions on city health, SLA breaches, and ward hotspots.

---

## 🎨 Natural Glass Civic Design System

CivicOS rejects generic cyberpunk neon glows and blue AI templates in favor of an enterprise **Natural Glass Civic Visual Language**:

- **Primary Background**: Deep Charcoal / Near-Black (`#0A0D14`)
- **Card Surfaces**: Warm Graphite (`#121722`) with Frosted Glass (`rgba(255, 255, 255, 0.05); backdrop-filter: blur(18px); border: 1px solid rgba(255, 255, 255, 0.10);`)
- **Primary Accents**: Muted Sage Green (`#10B981`) & Muted Teal (`#0D9488`)
- **Status Tokens**: Critical (`#EF4444`), High (`#F97316`), Medium (`#F59E0B`), Low (`#10B981`)
- **Text & Hierarchy**: Outfit headings + Inter body font, clean grid textures, and thin architectural divider lines.

---

## 🏗️ Architecture & Tech Stack

```
CivicOS Architecture
┌─────────────────────────────────────────────────────────┐
│                      Client Layer                       │
│    React 18 + Vite • Leaflet Maps • Recharts • Lucide   │
└────────────────────────────┬────────────────────────────┘
                             │ REST API / JSON
┌────────────────────────────▼────────────────────────────┐
│                      Server Layer                       │
│     Node.js + Express.js • JWT Auth • Centralized Error │
└────────────────────────────┬────────────────────────────┘
                             │ Mongoose ODM
┌────────────────────────────▼────────────────────────────┐
│                     Database Layer                      │
│     MongoDB 7.0 (2dsphere Spatial Indexes & Seed Data)  │
└─────────────────────────────────────────────────────────┘
```

### Stack Components:
- **Frontend**: React 18, Vite, React Router DOM v6, React Leaflet / Leaflet, Lucide Icons, Recharts, Axios
- **Backend**: Node.js, Express.js, JWT, bcryptjs, Helmet, CORS, dotenv
- **Database**: MongoDB & Mongoose ODM (Geospatial 2dsphere indexing)

---

## 📂 Project Structure

```
civicos/
├── client/
│   ├── src/
│   │   ├── components/      # Sidebar, Header, CommandPalette, NotificationDrawer, AiAssistantDrawer
│   │   ├── context/         # AuthContext state management
│   │   ├── layouts/         # Navbar, Footer
│   │   ├── pages/           # LandingPage, Overview, ComplaintsList, ComplaintDetail, MapExperience, Departments, SlaMonitor, AiIntelligence, FieldOfficerDesk, ReportComplaint, TrackComplaint
│   │   ├── services/        # Centralized Axios API service layer
│   │   ├── App.jsx          # Route mounting & global shell layout
│   │   └── index.css        # Natural Glass Design System tokens
│   ├── package.json
│   └── .env.example
│
├── server/
│   ├── config/              # MongoDB connection setup
│   ├── controllers/         # Auth, Complaint, Dashboard, Analytics, Department, Incident, Prediction, AI controllers
│   ├── middleware/          # Auth JWT middleware & Centralized error handler
│   ├── models/              # User, Complaint, Incident, Department, Notification, CitizenFeedback, Ward, Prediction schemas
│   ├── routes/              # Express API route endpoints
│   ├── seed/                # Seeder script populating 520 complaints & demo accounts
│   ├── server.js            # Express application entrypoint
│   ├── package.json
│   └── .env.example
│
├── README.md
└── .gitignore
```

---

## ⚡ Quick Start & Setup Instructions

### Prerequisites
- Node.js (v18+) & npm
- MongoDB Community Server running locally on `mongodb://127.0.0.1:27017` (or a MongoDB Atlas URI)

### 1. Clone & Configure Environment

```bash
git clone https://github.com/your-username/civicos.git
cd civicos
```

#### Backend Setup (`/server`)
```bash
cd server
cp .env.example .env
npm install
npm run seed     # Populate database with 520 complaints & demo credentials
npm run dev      # Starts API server on http://localhost:5000
```

#### Frontend Setup (`/client`)
```bash
cd ../client
cp .env.example .env
npm install
npm run dev      # Starts Vite client on http://localhost:5173
```

---

## 🔑 Demo Access Credentials

The database seeder provisions pre-configured roles for instant hackathon demonstration:

| Role | Email | Password | Access Level |
| :--- | :--- | :--- | :--- |
| **Admin Commander** | `admin@civicos.gov` | `admin123` | Full Municipal Operating System & Command Center |
| **Field Inspector** | `officer@civicos.gov` | `officer123` | Mobile Field Desk & Assignment Job Cards |
| **Citizen User** | `citizen@civicos.gov` | `citizen123` | Public Reporting & Verification Portal |

---

## 📡 REST API Reference Overview

### Health Check
- `GET /api/health`: Returns `{ "success": true, "status": "healthy", "database": "connected" }`

### Authentication
- `POST /api/auth/login`: Authenticate staff or citizen user
- `POST /api/auth/register`: Create new user account
- `GET /api/auth/me`: Get current authenticated profile

### Complaints Management
- `GET /api/complaints`: List complaints with category, severity, ward, and search filters
- `GET /api/complaints/:id`: Get complaint detail with visual timeline and history logs
- `POST /api/complaints`: Create complaint with auto AI classification & 500m duplicate detection
- `PATCH /api/complaints/:id`: Update status, priority, or field officer assignment
- `PATCH /api/complaints/:id/verify`: Citizen resolution verification / reopening feedback

### Municipal Operations & Analytics
- `GET /api/dashboard/overview`: Get City Health Score, City Pulse, Live activity stream, and Explainable AI rationale
- `GET /api/analytics/departments`: Get department workload capacity % and SLA metrics
- `GET /api/analytics/sla`: Get SLA compliance %, overdue breaches, and warning countdowns
- `GET /api/incidents`: Get multi-report Incident Clusters
- `GET /api/predictions`: Get predictive risk alerts for preventive inspections

---

## 🎯 3-Minute Hackathon Demo Story Flow

1. **Citizen Reporting**: Navigate to `http://localhost:5173/report`, type *"Large water pipeline burst near Ward 14 bus stop"*. Show automatic AI classification into **Water Infrastructure**, **CRITICAL** severity, and instant nearby duplicate warning.
2. **AI Clustering**: Open `/admin` Overview to highlight the **City Health Score (82/100)** and **City Pulse**. Point to **Incident Cluster #INC-1042** aggregating 37 citizen reports into 1 field action.
3. **Geospatial Map**: Open `/map` to show interactive Leaflet pins, 500m cluster radius overlays, and slide-out complaint drawer.
4. **SLA Countdown**: Navigate to `/sla` to highlight overdue breaches (`OVERDUE BY 2h 14m`) and at-risk countdown timers (`03h 42m remaining`).
5. **Field Officer Action**: Navigate to `/officer`, click **Action & Evidence** on Job #CIV-2847, upload resolution proof photo, and mark **RESOLVED**.
6. **Citizen Verification**: Open Complaint Detail `/complaints/:id` and click **"Yes, Confirmed Resolved"** to close the municipal loop.

---

## 🌐 Production Deployment

### Frontend (Vercel / Netlify)
- Root Directory: `client`
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables: `VITE_API_URL=https://your-backend-api.render.com/api`

### Backend (Render / Railway)
- Root Directory: `server`
- Start Command: `node server.js`
- Environment Variables: `MONGODB_URI`, `JWT_SECRET`, `CLIENT_URL`

---

## 📄 License

Distributed under the MIT License. Built for hackathons, municipal digital transformation, and open-source civic innovation.
