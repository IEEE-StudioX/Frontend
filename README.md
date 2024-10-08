# React.js Project V18.3.1 + TypeScript V5.5.3
1. **Clone The Project**:
   ```bash
   git clone https://github.com/IEEE-StudioX/Frontend.git
2. **Install Project Dependencies**:
   ```bash
   npm install
3. **Run The Project**:
    ```bash
    # npm
    npm run dev

    # yarn
    yarn dev

    # pnpm
    pnpm dev

    # bun
    bun dev
4. **Preview The Project**:
    ```bash
    http://localhost:5173
# Studio-X Frontend

This project is a frontend project built using React.js and TypeScript. Below is a summary of the libraries and technologies we used to handle authentication, navigation and enhance user experience in our project in future.

## Libraries and Technologies

### Core Technologies
- **React.js**
- **TypeScript**
- **Vite**
- **React-Router-Dom**

### UI Components
- **Tailwind CSS**
- **React Icons**
- **sweetalert2**

### State Management and Data Fetching
- **Context API**
- **Axios**

### Vite Plugins
- **vite-plugin-svgr**: Allows importing SVG files as React components.
- **vite-tsconfig-paths**: Enables TypeScript paths mapping in Vite projects, simplifying imports.


## Project Folder Structure

This project follows a modular structure for better organization and maintainability. Below is a breakdown of the main folders and their purpose:

```plaintext
src/                    # Main source folder containing all project files
├── components/          # Contains all reusable and page-specific components
│   ├── common/          # Components shared across multiple parts of the app (e.g., navbar, footer)
│   ├── feedback/        # Components related to the feedback feature
│   └── studioX/         # Components related to the StudioX feature of the platform
├── context/             # Context API related files for global state management
├── hooks/               # Custom React hooks
├── interfaces/          # TypeScript interfaces and types used throughout the project
├── layouts/             # Layout components (e.g., home, login page layout)
├── pages/               # Page components representing different routes/views in the app
├── routes/              # Routing-related files (e.g., route definitions)
├── styles/              # Global styles, SCSS/CSS files
├── utils/               # Utility functions used across the app
├── main.tsx             # Entry point of the React application
├── vite-env.d.ts        # Environment variables type definitions
```

## Frontend Developed By:
[Ihab Mahmoud](https://eh-ihabmahmoud.netlify.app/)
[Ammar Yasser](https://github.com/Amoory-Elmihy-77)