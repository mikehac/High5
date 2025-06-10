# High5 - Stock Portfolio Application

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A full-stack stock portfolio application built using Nx monorepo, React, NestJS, and MongoDB.

## Project Overview

High5 is a stock portfolio management application that allows users to:

- Search for stocks using a dedicated browser interface
- View detailed stock information including current prices and changes
- Add stocks to a personal portfolio
- Manage their stock portfolio (view and remove stocks)

The application is built as a monorepo using Nx, with separate frontend and backend applications.

## Project Structure

```
High5/
├── app/
│   ├── backend/            # NestJS backend application
│   │   ├── src/
│   │   │   ├── app/        # Main application module
│   │   │   ├── externalapi/ # Stock API integration
│   │   │   ├── mongo/      # MongoDB integration
│   │   │   └── schema/     # MongoDB schemas
│   │   └── ...
│   │
│   ├── backend-e2e/        # Backend end-to-end tests
│   │
│   └── frontend/           # React frontend application
│       ├── src/
│       │   ├── app/
│       │   │   ├── components/ # React components
│       │   │   ├── interfaces/ # TypeScript interfaces
│       │   │   ├── stores/     # MobX stores
│       │   │   └── styles/     # SCSS stylesheets
│       │   └── utils/          # Utility functions
│       └── ...
│
├── interfaces/             # Shared interfaces library
└── packages/               # Additional packages directory
```

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm
- MongoDB (local or cloud instance)

### Environment Setup

1. Create a `.env` file in the project root with the following variables:

```
API_KEY=your_financial_api_key
API_BASE_URL=https://financialmodelingprep.com
MONGO_CONNECTION_STRING=your_mongodb_connection_string
```

### Installation

1. Clone the repository
2. Install dependencies:

```sh
npm install
```

## Running the Application

To run the entire application (both frontend and backend) at once:

```sh
npm run start:all
```

This will start:

- Frontend at: http://localhost:4200
- Backend at: http://localhost:3000/api

### Running Individual Applications

To run the frontend only:

```sh
npx nx serve frontend
```

To run the backend only (with debugging enabled):

```sh
npx nx serve backend
```

## Development

### Generate a Library

```sh
npx nx g @nx/js:lib packages/my-lib --publishable --importPath=@high5/my-lib
```

### Run Tasks

To build a specific project:

```sh
npx nx build project-name
```

To run other tasks:

```sh
npx nx <target> <project-name>
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks) or defined in the `project.json` or `package.json` files.

### Keep TypeScript Project References Up to Date

```sh
npx nx sync
```

## Project Capabilities

- **Stock Search**: Search for stocks by symbol or company name
- **Stock Details**: View detailed information about a specific stock
- **Portfolio Management**: Add, view, and remove stocks from your portfolio
- **Responsive Design**: User-friendly interface that works on multiple device sizes

## Key Features

1. **Stock Browser**:

   - Search for stocks by name or symbol
   - View basic stock information
   - Navigate to detailed stock views

2. **Stock Details**:

   - View comprehensive stock information
   - See real-time price data
   - Add stocks to your portfolio

3. **User Portfolio**:
   - Manage your stock selections
   - Remove stocks from your portfolio
   - Access detailed information about your saved stocks

## Technical Architecture

### Frontend

- **React**: UI library for building the user interface
- **MobX**: State management library for managing application state
- **React Router**: Navigation between different views
- **Ant Design**: UI component library for a polished look and feel
- **SCSS**: For component styling
- **Vite**: Build tool for fast development and optimized production builds

### Backend

- **NestJS**: Progressive Node.js framework for building efficient and scalable server-side applications
- **MongoDB**: NoSQL database for storing user stock portfolios
- **Mongoose**: MongoDB object modeling tool for Node.js
- **External API Integration**: Connection to financial data providers for stock information

### Shared

- **TypeScript**: For type-safe code across the entire application
- **Nx**: For managing the monorepo and optimizing the development workflow

## API Endpoints

- `GET /api/mongo/:userId` - Get a user's stock portfolio
- `POST /api/mongo/:userId` - Add a stock to a user's portfolio
- `DELETE /api/mongo/:userId/:stockSymbol` - Remove a stock from a user's portfolio
- `GET /api/externalapi/search/:query` - Search for stocks by name or symbol
- `GET /api/externalapi/quote/:symbol` - Get detailed information about a specific stock

## Built With

- [Nx](https://nx.dev/) - Build system and monorepo tool
- [React](https://reactjs.org/) - Frontend framework
- [MobX](https://mobx.js.org/) - State management
- [NestJS](https://nestjs.com/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database

## Useful Links

- [Nx Documentation](https://nx.dev/nx-api/js)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [NestJS Documentation](https://docs.nestjs.com/)
- [MobX Documentation](https://mobx.js.org/README.html)
