# Project Overview

This project serves as a **template** for structuring a **Next.js 15 Admin Panel** using the **App Router**. It demonstrates best practices for organizing files and folders, ensuring modularity, reusability, and maintainability. The key aspects highlighted in this project include:

## Key Features

- **Folder Structure:** A well-defined organization of routes, components, hooks, services, and utilities.
- **Reusability of Components:** A modular approach to UI components to prevent redundancy.
- **Service Layer Separation:** API interaction is abstracted into a dedicated `services/` folder, keeping API logic separate from components.
- **Authentication & Authorization (Planned):** Includes a basic setup for authentication with NextAuth.js, with future plans for role-based with permission-based / attribute-based authorization.
- **State Management (Planned):** A `/store` folder is included for state management using **Redux** or **Zustand**, with future plans to implement global state handling.
- **TypeScript Support:** Ensures type safety and better developer experience with strict TypeScript configurations.
- **Environment Configurations:** Uses `.env` files for managing different environments (`.env.development`, `.env.production`).
- **Editor & Code Style Setup:** Provides **VS Code settings**, `.editorconfig`, `.prettierrc`, and other configuration files for consistent development.
- **Testing Setup (Planned):** A `/tests` folder is included, with plans to integrate **Jest** and **React Testing Library** for unit and integration testing.

This template serves as a **solid foundation** for building scalable admin dashboards with Next.js.

---

# Project Structure

## Root Directory

```
├── .editorconfig         # Configuration for consistent code style
├── .env.development      # Environment variables for development
├── .env.production       # Environment variables for production
├── .gitignore            # Ignore files and folders in Git
├── .prettierrc           # Prettier configuration for code formatting
├── .prettierignore       # Ignore files from Prettier formatting
├── .vscode               # VS Code workspace settings
├── components.json       # Shadcn UI configuration
├── README.md             # Project documentation (you are here)
├── next.config.ts        # Next.js configuration file
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint configuration
└── public/               # Static assets like images, icons, etc.
```

## `src/` - Source Code

```
├── src/
│   ├── app/              # Next.js App Router structure (main entry point)
│   ├── components/       # Reusable UI and functional components
│   ├── data/             # Static data, JSON files, and menus
│   ├── fonts/            # Custom font files (if any)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and configuration files
│   ├── providers/        # Context providers (e.g., Auth, Theme)
│   ├── services/         # API functions to interact with backend
│   ├── store/            # State management (if applicable)
│   ├── styles/           # Global and module-based CSS files
│   └── types/            # TypeScript type definitions
│   └── middleware.ts     # Next.js middleware
```

### **`src/app/` - App Router Pages and Routes**

Contains different route groups based on functionality.

```
├── app/
│   ├── (admin)/          # Admin dashboard routes
│   ├── (auth)/           # Authentication routes (Login, Register, etc.)
│   ├── api/              # API route handlers (Next.js API routes)
│   ├── access-denied/    # Access denied page
│   ├── favicon.ico       # Site favicon
│   ├── layout.tsx        # Root layout component
│   ├── not-found.tsx     # Custom 404 page
│   └── page.tsx          # Home page component
```

### **`src/app/api/` - Backend API Routes and Supporting Files**

This folder contains the backend API routes and supporting files. It follows Next.js App Router conventions, organizing API endpoints under (routes) while keeping database-related mock data in `data/` and utility functions in `lib/`.

```
├── api/
│   ├── (routes)/               # API route handlers for different features
│   │   ├── auth/               # Authentication routes
│   │   │   ├── [...nextauth]/  # NextAuth.js authentication handlers
│   │   │   │   └── route.ts    # Handles OAuth, JWT, etc.
│   │   │   └── login/          # Login route
│   │   │       └── route.ts    # Handles login requests
│   │   ├── categories/         # Product category API route
│   │   │   └── route.ts        # Handles category-related CRUD operations
│   │   ├── products/           # Product API route
│   │   │   └── route.ts        # Handles product-related CRUD operations
│   ├── data/                   # Acts as a mock database (for development)
│   │   ├── categories.json     # Sample category data
│   │   ├── products.json       # Sample product data
│   │   └── users.ts            # Sample user data (for authentication)
│   └── lib/                    # Utility functions for API handling
│       ├── config.ts           # Global configurations (e.g., DB, API keys)
│       └── utils.ts            # Helper functions for API processing
```

### **`src/components/` - UI & Functional Components**

This folder contains reusable components categorized by their use case.

```
├── components/
│   ├── core/           # Core utilities (Can be merged with components/layouts)
│   ├── layouts/        # Layout components (Header, Sidebar, etc. and/or Core utilities)
│   ├── modules/        # Page-specific components
│   ├── shared/         # Shared reusable components (Can be merged with components/layouts)
│   ├── skeletons/      # Skeleton loaders for better UX
│   └── ui/             # Shadcn UI components (Button, Modal, Input, etc.)
```

### **`src/data/` - Static Data**

Contains static JSON files and predefined data used in the app.

```
├── data/
│   ├── menu-items.ts     # Navigation menu items
```

### **`src/hooks/` - Custom React Hooks**

Custom hooks that encapsulate logic for reuse. For example, in the following

```
├── hooks/
│   ├── useAuth.ts        # Authentication hook
│   ├── useDarkMode.ts    # Dark mode toggle hook
│   ├── usePagination.ts  # Pagination logic
```

### **`src/lib/` - Utility Functions & Configurations**

Contains helper functions and app configurations.

```
├── lib/
│   ├── auth.ts          # Authentication helper functions
│   ├── config.ts        # App-wide configuration settings
│   ├── constants.ts     # Global constants
│   ├── fonts.ts         # Export Next.js optimized fonts
│   ├── helpers.ts       # Common utility functions (Can be merged with utils)
│   ├── permissions.ts   # User role permissions
│   ├── session.ts       # Session handling functions
│   └── utils.ts         # General utility functions
```

### **`src/providers/` - Context Providers**

Wraps global state and logic in React context providers.

```
├── providers/
│   ├── auth-provider.tsx    # Auth context provider
│   ├── session-provider.tsx # Session provider
│   └── theme-provider.tsx   # Theme management provider
```

### **`src/services/` - API & Backend Calls**

Handles interactions with backend APIs.

```
├── services/
│   ├── auth.ts           # Auth API requests
│   ├── categories.ts     # Product category API requests
│   ├── products.ts       # Product-related API requests
│   ├── ...               # Other service files
```

### **`src/store/` - State Management (Optional)**

If using Zustand, Redux, or Context API for state management.

```
├── store/
│   ├── slices/
│   │   ├── authSlice.ts      # Authentication state slice (reducer, actions)
│   │   ├── productSlice.ts   # Product state slice (reducer, actions)
│   │   ├── uiSlice.ts        # UI-related state slice (theme, sidebar, etc.)
│   │   └── ...               # Other slices
│   ├── store.ts              # Redux store configuration
│   ├── actions.ts            # Optional, for separate action creators
│   └── selectors.ts          # Optional, for state selectors
```

### **`src/styles/` - CSS & Styling**

Contains all global and modular styles for the app.

```
├── styles/
│   ├── admin.module.css  # Admin panel styles
│   ├── globals.css       # Global styles
```

### **`src/types/` - TypeScript Type Definitions**

Defines TypeScript types and interfaces used throughout the app.

```
├── types/
│   ├── global.d.ts       # Global TypeScript declarations
│   ├── index.ts          # Centralized type exports
│   ├── next-auth.d.ts    # NextAuth-specific types
│   ├── product.ts        # Product-related types
│   └── user.ts           # User-related types
```

### **`tests/` - Application Tests**

This folder contains all the tests for the application, including unit tests, integration tests, and end-to-end tests.

## **How to Use This Project**

### 1. **Environment Requirements**

Ensure the following versions are installed on your system:

- **Node.js**: v22.13.1
- **npm**: v10.9.2

### 2. **Install Dependencies**

You can install the dependencies using either `npm` or `yarn`. Choose one of the following:

- Using **npm** (recommended):

  ```bash
  npm install
  ```

- Or using **yarn**:

  ```bash
  yarn install
  ```

### 3. **Run the Development Server:**

- Using **npm** (recommended):

  ```bash
  npm run dev
  ```

- Or using **yarn**:

  ```bash
  yarn dev
  ```

### 4. **Build for Production:**

- ```bash
  npm run build
  ```

## **Contributing**

- Follow the folder structure to maintain consistency.
- Reuse components from `components/` instead of duplicating code.
- Keep API calls in `services/` for maintainability.
- Define new types in `types/` whenever adding new data models.

---

## **Note**

There is no one-size-fits-all best practice for Next.js file and folder structure, as it largely depends on the specific needs of the project and the developer's preferences. After conducting thorough research and drawing from my years of experience working with Next.js, I have arrived at this structure.

For more information on common strategies for organizing a Next.js project, you can refer to the official Next.js documentation and community discussions:

- [Next.js Project Structure - Official Documentation](https://nextjs.org/docs/app/getting-started/project-structure#common-strategies)
- [Next.js Folder Structure Discussion on Stack Overflow](https://stackoverflow.com/questions/76214501/nextjs-13-folder-structure-best-practice)

Feel free to reach out if you have any questions or need further clarification.
