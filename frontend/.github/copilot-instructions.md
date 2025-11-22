# Copilot Instructions for Musliem-Community-Project

## Project Overview
This is a full-stack community platform. The `frontend/` is a Vite+React+TypeScript app using Tailwind CSS for UI, with modular features and context-based state management. Backend is not included here.

## Architecture & Key Patterns
- **Feature Folders:** All major features (e.g., Events, Groups, Auth) are in `src/features/`, each with its own components and logic.
- **Context API:** Shared state (e.g., user, groups, products) is managed via React Contexts in `src/context/` and custom stores in `src/store/`.
- **Services:** API calls are abstracted in `src/services/` (e.g., `authService.tsx`, `groupService.tsx`). Always use these for network requests.
- **Types:** Shared types/interfaces are in `src/types/` and `src/components/interfaces/`.
- **UI Components:** Reusable UI elements are in `src/components/ui/` and `src/components/common/`.
- **Routing:** All routes are defined in `src/routes/AppRoutes.tsx`.

## Developer Workflows
- **Start Dev Server:**
  ```powershell
  cd frontend; npm install; npm run dev
  ```
- **Build for Production:**
  ```powershell
  cd frontend; npm run build
  ```
- **Linting:**
  ```powershell
  cd frontend; npm run lint
  ```
- **No formal test suite detected.**

## Conventions & Patterns
- **Absolute Imports:** Use `@/` as alias for `src/` (see `tsconfig.json`).
- **Debounced Search:** Use `useDebounce` from `src/hooks/` for search inputs.
- **Profile & Auth:** Always access user/profile state via `useAuthStore` and `useProfileStore` from `src/store/`.
- **API URLs:** Use `import.meta.env.VITE_BASE_URL` for backend endpoints.
- **Default Images:** Use fallback URLs for missing profile images (see `Navbar.tsx`).

## Integration Points
- **External APIs:** All backend communication is via service files in `src/services/`.
- **Icons:** Use `react-icons` for UI icons.
- **Tailwind:** All styling is via Tailwind classes; avoid inline styles.

## Examples
- **Add a new feature:** Create a folder in `src/features/`, add components, and update `AppRoutes.tsx`.
- **Add a new API call:** Extend the relevant service in `src/services/` and update context/store as needed.

## Key Files & Directories
- `src/features/` — Feature modules
- `src/context/` — Context providers
- `src/store/` — Zustand stores
- `src/services/` — API abstraction
- `src/routes/AppRoutes.tsx` — Routing
- `src/types/` — Shared types

---
**For unclear or missing conventions, ask the user for clarification before making major changes.**
