# 🕌 Musliem Community Project

A comprehensive full-stack community platform built to empower Muslim communities with seamless features for connection, commerce, education, and social engagement.

> **Frontend Repository** — Built with modern web technologies for a responsive, performant, and user-friendly experience.

![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite&logoColor=white)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Architecture & Patterns](#architecture--patterns)
- [Development Conventions](#development-conventions)
- [Contributing](#contributing)

---

## 🎯 Overview

Musliem Community Project is a vibrant platform designed to bring Muslim communities together. It provides tools for:

- **Community Building** — Create and manage groups, organize events
- **E-Commerce** — Sell products, offer services, and explore halal businesses
- **Messaging & Chat** — Real-time communication with private messaging and group chat
- **Membership & Payments** — Subscription plans, donations, and payment processing
- **Content Sharing** — Advertisements, product listings, and business directories
- **Education** — Quranic tutoring and educational services

---

## ✨ Key Features

### Community & Groups
- 👥 **Create & Manage Groups** — Build communities around shared interests
- 📅 **Event Management** — Organize, schedule, and manage community events
- 💬 **Real-time Messaging** — Socket.io powered messaging system
- 👤 **Member Profiles** — Customizable user profiles with verification

### E-Commerce & Business
- 🛍️ **Product Listings** — Sell and browse products in a halal-focused marketplace
- 🏪 **Service Marketplace** — Business services including babysitting and tutoring
- 📢 **Advertisements** — Create and manage product/service advertisements
- 💼 **Halal Business Directory** — Curated directory of halal-certified businesses
- 🎓 **Quranic Tutoring** — Connect with qualified Quran tutors

### Payments & Subscriptions
- 💳 **Membership Plans** — Tiered subscription system for premium features
- 💰 **Payment Processing** — Secure payment integration
- 🎁 **Donations** — Support community through donations
- 📊 **Payment History** — Track and manage all transactions

### Admin & Moderation
- 🔍 **Content Approval Workflows** — Admin dashboard for reviewing submitted content
- ✅ **Pending Reviews** — Manage advertisements, events, products, and services
- 📈 **Analytics Dashboard** — Monitor platform activity and user engagement

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework and component library |
| **TypeScript 5.8** | Type-safe JavaScript |
| **Vite 7** | Lightning-fast build tool |
| **Tailwind CSS 3.4** | Utility-first CSS framework |
| **Zustand** | Lightweight state management |
| **React Context API** | Additional state management |
| **React Router v7** | Client-side routing |
| **TanStack Query 5** | Server state management |

### Libraries & Tools
| Library | Use Case |
|---------|----------|
| **Axios** | HTTP client for API requests |
| **Socket.io** | Real-time bidirectional communication |
| **Framer Motion** | Smooth animations and transitions |
| **Recharts** | Data visualization charts |
| **React Icons / Lucide** | Icon libraries |
| **Embla Carousel** | Carousel/slider component |
| **Date-fns** | Date manipulation |
| **Lodash** | Utility functions |
| **ESLint** | Code quality & linting |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16+ 
- **npm** or **yarn**
- Backend API running on `VITE_BASE_URL` environment variable

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/Musliem-Community-Project.git
   cd Musliem-Community-Project/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_BASE_URL=http://localhost:5000
   VITE_SOCKET_URL=http://localhost:5000
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3001`

---

## 📁 Project Structure

```
src/
├── features/              # Feature modules (Events, Groups, Auth, etc.)
│   ├── Advertise/
│   ├── Latest-Events/
│   ├── OurGroups/
│   ├── login/
│   ├── register/
│   └── ...
├── layouts/               # Page layouts and full-page components
│   ├── Home/
│   ├── ProfilePage/
│   ├── sell-products-page/
│   └── ...
├── components/            # Reusable UI components
│   ├── common/           # Shared across app (Navbar, Footer)
│   ├── ui/               # Generic UI elements
│   └── interfaces/       # Component prop types
├── context/              # React Context providers
│   ├── authContext.ts
│   ├── groupContext.ts
│   └── ...
├── store/                # Zustand state management stores
├── hooks/                # Custom React hooks
│   ├── useAuth.ts
│   ├── useGroups.ts
│   ├── useDebounce.ts
│   └── ...
├── services/             # API service abstraction
│   ├── authService.tsx
│   ├── groupService.tsx
│   └── ...
├── api/                  # Raw API utilities
├── types/                # TypeScript type definitions
├── routes/               # Route configuration (AppRoutes.tsx)
├── utils/                # Utility functions
└── assets/               # Images, icons, fonts
```

---

## 📜 Available Scripts

```bash
# Development
npm run dev           # Start dev server (port 3001)
npm run build:check   # Type check without building

# Production
npm run build         # Build for production
npm run preview       # Preview production build

# Code Quality
npm run lint          # Run ESLint
```

---

## 🏛️ Architecture & Patterns

### Feature-First Organization
Each major feature (Events, Groups, Products) is self-contained in `src/features/` with its own components, logic, and styling.

### State Management
- **Global State**: User authentication and profile → `useAuthStore` / `useProfileStore`
- **Shared Context**: Groups, Events, Products → Context API in `src/context/`
- **Server State**: API responses → TanStack Query

### API Abstraction
All backend communication flows through service files in `src/services/`. This centralizes API calls and makes mocking/testing easier.

**Example:**
```typescript
// ✅ Good: Use service
import { authService } from '@/services/authService';
const { data } = await authService.login(credentials);

// ❌ Avoid: Direct API calls
const { data } = await axios.post('/auth/login', credentials);
```

### Routing Convention
All routes are defined in [src/routes/AppRoutes.tsx](src/routes/AppRoutes.tsx). Routes use lazy loading for code splitting and optimal performance.

### Styling
All styling uses **Tailwind CSS**. Avoid inline styles and custom CSS when possible.

**Example:**
```tsx
// ✅ Good
<button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
  Click me
</button>

// ❌ Avoid
<button style={{ padding: '8px 16px', backgroundColor: '#3B82F6' }}>
  Click me
</button>
```

---

## 📝 Development Conventions

### Absolute Imports
Use `@/` alias (configured in `tsconfig.json`) for cleaner imports:

```typescript
// ✅ Preferred
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/Button';

// ❌ Avoid
import { useAuthStore } from '../../../store/authStore';
import { Button } from '../../../components/ui/Button';
```

### Hook Usage
- Use `useDebounce` from `@/hooks/useDebounce` for search inputs to avoid excessive API calls
- Access auth/profile via `useAuthStore` and `useProfileStore` from `@/store/`

### Default/Fallback Values
Use placeholder images for missing profile pictures:

```typescript
const profileImage = user?.avatar || 'https://via.placeholder.com/150';
```

### Type Safety
Define all component props with TypeScript interfaces in `src/components/interfaces/` or inline for small components.

---

## 🔄 Integration Points

### Backend Communication
- **Base URL**: Set via `VITE_BASE_URL` environment variable
- **Services Location**: `src/services/`
- **Examples**: `authService.tsx`, `groupService.tsx`, `productService.tsx`

### Real-Time Features
- **Socket.io Client**: Configured in `src/context/socketContext.tsx`
- **Use Cases**: Live messaging, notifications, real-time updates

### External Libraries
- **Icons**: Use `react-icons` or `lucide-react`
- **Animations**: Use `framer-motion` for smooth transitions
- **Charts**: Use `recharts` for data visualization

---

## 🤝 Contributing

### Code Standards
- ✅ Always use TypeScript — no `any` types without explicit reason
- ✅ Use ESLint — run `npm run lint` before committing
- ✅ Follow the established folder structure
- ✅ Use absolute imports with `@/` alias
- ✅ Write meaningful commit messages

### Creating a New Feature
1. Create a folder in `src/features/YourFeature/`
2. Add components, hooks, and logic
3. Update routes in [src/routes/AppRoutes.tsx](src/routes/AppRoutes.tsx)
4. Add any new API methods to `src/services/`
5. Test thoroughly before submitting PR

### Pull Request Checklist
- [ ] Code follows project conventions
- [ ] No ESLint errors (`npm run lint`)
- [ ] TypeScript type checks pass (`npm run build:check`)
- [ ] Tested on development server
- [ ] Updated relevant documentation

---

## 📄 License

This project is licensed under the **ISC License** — see LICENSE file for details.

---

## 📞 Support & Questions

For questions or issues:
- 📧 Contact the development team
- 🐛 Report bugs through GitHub Issues
- 💡 Suggest features via GitHub Discussions

---

**Happy Coding! 🚀** Let's build an amazing community together!
