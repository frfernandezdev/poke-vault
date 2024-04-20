# PokeVault 

## Getting Started

Welcome to Pokevault! A Pokeindex for all Pokémon fans.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v20 or higher)
- npm (or yarn)

### Installation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

1. Clone the repository:
   
   ```sh
   git clone https://github.com/frfernandezdev/poke-vault.git
  
3. Navigate to the project directory:

   ```sh
   cd pokevault

5. Install dependencies by running the following command:

   ```sh
   npm install
   # or
   yarn install

### Configuration

1. Copy the .env.example file and rename it to .env.

   ```sh
   cp .env.example .env
   
3. Open the .env file and configure the environment variables as needed.
   
### Execution

Once you have installed the dependencies and configured the .env file, you can start the development server with the following command:

```sh
npm run dev
# or 
yarn dev
```

This will start the Next.js development server. Open http://localhost:3000 in your browser to view the application.

## Testing

### Unit Tests with Jest
Run the following command to execute unit tests:

```sh
npm test
# or
yarn test
```

This command will run all the unit tests in the project and provide feedback on test coverage and any failing tests.

### End-to-End Tests with Cypress
Cypress is a fast, easy-to-use end-to-end testing framework for web applications. To run E2E tests in Pokevault:

1. Make sure your development server is running. If not, start it with:

   ```sh
   npm run dev
   @ or
   yarn run dev
   
3. In a new terminal window, navigate to the project directory:

   ```sh
   npm run cypress:open
   # or
   yarn cypress:open
   
This will open the Cypress Test Runner. Click on any test file to run the tests in the browser. Cypress will provide real-time feedback on test execution and any failures encountered.Alternatively, you can run Cypress tests in headless mode (without the Test Runner) using the following command:

```sh
npm run cypress:run
# or
yarn cypress:run
```

This command will execute all E2E tests in the background and output the results to the terminal.

## Technologies Involved
Pokevault is built using the following technologies:

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- npm/yarn: Package managers for installing dependencies and managing packages.
- Next.js: A React framework for building server-rendered applications.
- React: A JavaScript library for building user interfaces.
- SWR: React Hooks library for remote data fetching.
- ChakraUI: A simple, modular and accessible component library for React.
- Recoil: A state management library for managing global state in React applications.
- Motion-Framer: A React library for creating animations and interactive UI components.
- PokeAPI: An open RESTful API for Pokémon data.
These technologies work together to create a fast, responsive, and interactive Pokeindex experience.

## Software Design Patterns
Pokevault follows key software design patterns to ensure clean, maintainable, and scalable code:

- **Clean Architecture**: Organizes code into layers (presentation, domain, data) to maximize maintainability and testability.
- **SOLID Principles**: Adheres to principles like Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion for modular, extensible, and maintainable code.
- **BLoC Pattern**: Separates business logic from UI components using the Business Logic Component pattern, enhancing code readability, testability, and maintainability.

These design patterns contribute to a clean, modular, and scalable codebase, facilitating easier development, testing, and maintenance of the Pokevault application.

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
