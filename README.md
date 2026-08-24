# CivicOS — AI-Powered Interoperable Municipal Operating System

> **SIH 2026 Target Problem Statement**: *"System integration and interoperability among government digital platforms, resulting in fragmented service delivery."*
>
> **CivicOS Solution**: A unified municipal intelligence platform and **Interoperability Engine** that normalizes citizen requests into an Open Civic Data Format (CIV-ODF v1.0) and routes them seamlessly across fragmented departmental government APIs.

---

## 🌐 SIH 2026 Innovation: CivicOS Interoperability Layer

CivicOS solves government digital fragmentation by acting as a **central integration gateway & middleware layer**:

```
[ Citizen (Mobile / Web) ]
           │
           ▼
[ CivicOS AI Triage & Geo-clustering ]
           │
           ▼
[ Interoperability Engine (CIV-ODF v1.0 Standard) ]
           │
           ├─────────────────────────┬─────────────────────────┐
           ▼                         ▼                         ▼
  [ Road Department API ]   [ Water Board API ]     [ Waste Mgmt API ]
  (Ext ID: ROAD-PW-8921)   (Ext ID: WATER-WSS-3342)  (Ext ID: WASTE-SWM-4012)
           │                         │                         │
           └─────────────────────────┼─────────────────────────┘
                                     ▼
                     [ Real-Time Unified Citizen Tracking ]
                                     ▼
                     [ Closed-Loop Verification (YES / NO) ]
```

### Key SIH Capabilities:
1. **Government Services Hub (`/interoperability` / `/services`)**: Dedicated real-time dashboard displaying 6 connected departmental gateways (`Roads`, `Waste`, `Water & Sewerage`, `Street Lighting`, `Public Health`, `Municipal Complaints`) with live status, latency metrics, and prototype integration badges.
2. **Unified Request Mapping**: Generates both a **CivicOS Request ID** (`CIV-2026-001245`) and an **External Department Request ID** (`ROAD-PW-8921`), demonstrating cross-platform data exchange.
3. **Cross-Department Linked Requests**: Handles multi-department hazards (e.g. Damaged Road + Water Pipe Leakage) by generating linked requests for Primary (`Roads & Infrastructure`) and Secondary (`Water Supply & Sanitation`) departments under 1 unified CivicOS case.
4. **CIV-ODF v1.0 Common Data Standard**: Open JSON format for exchanging civic issue metadata across proprietary government platforms.
5. **Closed-Loop Citizen Verification**: Sends resolution confirmation prompts to citizens (*"Has this issue actually been resolved? YES / NO"*). If NO, reopens case & escalates to senior officers.
6. **Haversine Geo-clustering & Duplicate Detection**: Automatically groups multiple citizen complaints within 300m into 1 unified civic incident.

---

## 🌟 Key Core Features & Innovations

- **Smart Citizen Complaint Reporting**: Mobile reporting with camera photo evidence, auto GPS geotagging, category suggestion, and location pickers across India.
- **AI Classification & Deterministic Priority Engine**: Natural Language Processing (LLM / Rule-engine fallback in English, Hindi, and Marathi) calculating **0–100 Priority Scores**.
- **Geospatial Intelligence Map**: Full-screen interactive Leaflet map rendering colored severity pins, cluster radius circles, category filters, and slide-out drawer metadata.
- **Department Capacity & SLA Countdown Enforcement**: Target deadlines, 80%+ warning thresholds, and overdue escalation alerts with department workload progress bars.
- **Mobile Field Officer Desk**: Mobile-optimized job cards with GPS navigation links, SLA countdown timers, photo evidence uploads, and status transition workflows.

---

## 🎨 Natural Glass Civic Design System

CivicOS uses an enterprise **Natural Glass Civic Visual Language**:

- **Primary Background**: Deep Charcoal / Near-Black (`#0A0D14`)
- **Card Surfaces**: Warm Graphite (`#121722`) with Frosted Glass (`rgba(255, 255, 255, 0.05); backdrop-filter: blur(18px); border: 1px solid rgba(255, 255, 255, 0.10);`)
- **Primary Accents**: Muted Sage Green (`#10B981`) & Muted Teal (`#0D9488`)
- **Status Tokens**: Critical (`#EF4444`), High (`#F97316`), Medium (`#F59E0B`), Low (`#10B981`)

---

## 🏗️ Architecture & Tech Stack

```
CivicOS Interoperable Stack
┌─────────────────────────────────────────────────────────┐
│                      Client Layer                       │
│ React 18 + Vite • Leaflet Maps • Recharts • Lucide • i18n│
└────────────────────────────┬────────────────────────────┘
                             │ REST API / JSON
┌────────────────────────────▼────────────────────────────┐
│              Server & Interoperability Layer            │
│   Node.js + Express • Interoperability Gateway Adapters │
│   CIV-ODF v1.0 Normalizer • JWT Auth • AI Triage Engine  │
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
│   │   ├── components/      # Sidebar, Header, CommandPalette, NotificationDrawer, LeafletMapPicker
│   │   ├── context/         # AuthContext, LanguageContext state management
│   │   ├── layouts/         # Navbar, Footer
│   │   ├── pages/           # LandingPage, InteroperabilityCenter, Overview, ComplaintsList, MapExperience, FieldOfficerDesk, ReportComplaint, TrackComplaint
│   │   ├── services/        # Centralized Axios API service layer (complaintAPI, interoperabilityAPI)
│   │   ├── App.jsx          # Route mounting & global shell layout
│   │   └── index.css        # Natural Glass Design System tokens
│   ├── package.json
│   └── .env.example
│
├── server/
│   ├── config/              # MongoDB connection setup
│   ├── controllers/         # Auth, Complaint, Interoperability, Dashboard, Analytics controllers
│   ├── middleware/          # Auth JWT middleware & Centralized error handler
│   ├── models/              # User, Complaint, Incident, Department, Ward schemas
│   ├── routes/              # Express API route endpoints (interoperability.routes.js, etc.)
│   ├── services/            # Interoperability gateway adapters, AI service, duplicate service
│   ├── seed/                # Seeder script populating demo complaints and accounts
│   ├── server.js            # Express application entrypoint
│   ├── package.json
│   └── .env.example
│
├── README.md
└── .gitignore
```

---

## 🎬 SIH Jury 18-Step End-to-End Demo Flow

1. **Open CivicOS App**: Visit `https://civicos-beta.vercel.app/`
2. **Select Language**: Switch between English 🇬🇧, Marathi 🇮🇳, and Hindi 🇮🇳.
3. **Open Report Issue (`/report`)**: Citizen captures issue via mobile/desktop.
4. **AI Natural Language Triage**: Type *"water leaking and road damaged near college gate"*.
5. **AI Classification**: System categorizes as `Road Damage` (High Severity) and links Secondary Dept (`Water Supply & Sanitation`).
6. **Geospatial Location Pin**: Drop pin on Leaflet map or click `📍 Use Current GPS Location`.
7. **Submit Report**: CivicOS ID `CIV-2026-001245` generated.
8. **Interoperability Gateway Transformation**: Complaint normalized to `CIV-ODF v1.0` JSON standard.
9. **Dispatch to Department API**: Government Gateway `ROAD-PW-API` accepts request and assigns linked Ext ID `ROAD-PW-8921`.
10. **Open Interoperability Center (`/interoperability`)**: View connected service health cards and raw transformed JSON payload.
11. **Open Track Issue (`/track?code=CIV-2026-001245`)**: View unified multi-system timeline showing both CivicOS ID and Department Request ID.
12. **Switch to Officer Desk (`/officer`)**: Field officer views complaint in queue.
13. **Officer Changes Status**: Move status from `Assigned` → `In Progress`.
14. **Simulate External Dept Callback**: Click `Simulate API: Resolved` on Interoperability Center.
15. **Citizen Receives Status Update**: Track Issue page updates to `Resolved`.
16. **Citizen Verification Prompt**: Prompts citizen *"Has this issue actually been resolved?"*
17. **Citizen Confirms (YES)**: Status updates to `CITIZEN_VERIFIED_RESOLVED`.
18. **Closed-Loop Complete**: Interoperability metrics update in real-time on Admin Command Center.

---

## ⚡ Quick Start & Setup Instructions

### Prerequisites
- Node.js (v18+) & npm
- MongoDB Community Server running locally on `mongodb://127.0.0.1:27017` (or a MongoDB Atlas URI)

### 1. Run Server
```bash
cd server
npm install
npm run dev
```

### 2. Run Client
```bash
cd client
npm install
npm run dev
```
