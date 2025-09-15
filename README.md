# typescript-boilerplate

A modern TypeScript boilerplate project with built-in helpers, ready-to-use configuration for ESLint, Prettier, Jest, and Docker. Designed to help you start new TypeScript projects quickly and with best practices.

## Features

- **TypeScript**: Strict, modern configuration for scalable apps and libraries.
- **ESLint**: Pre-configured with recommended rules for TypeScript, import sorting, and Prettier integration.
- **Prettier**: Automatic code formatting.
- **Jest**: Ready-to-use test setup.
- **Docker**: Containerization support for development and production.
- **Environment Management**: Example `.env` file for easy configuration.
- **Helpers**: Utility functions and setup scripts to speed up development.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/typescript-boilerplate.git
cd typescript-boilerplate
```

### 2. Install dependencies

Using [pnpm](https://pnpm.io/):

```bash
pnpm install
```

Or with npm/yarn if you prefer.

### 3. Start coding

Edit files in the `src/` directory and use the helpers provided.

## Available Scripts

All scripts are defined in `package.json`. Common commands:

- `pnpm lint` — Run ESLint to check code quality.
- `pnpm format` — Format code with Prettier.
- `pnpm test` — Run tests with Jest.
- `pnpm build` — Build the project.
- `pnpm dev` — Start development mode (if configured).

## ESLint & Prettier

- ESLint is configured in `eslint.config.mjs` with recommended rules for TypeScript and import sorting.
- Prettier config is in `.prettierrc.json`.
- Run `pnpm lint` and `pnpm format` to enforce code style.

## Testing

- Tests are located in the `__tests__` directory.
- Run all tests with `pnpm test`.
- Jest configuration is in `jest.config.js`.

## Project Structure

```
src/                # Source code
  config/           # Environment and config helpers
  index.ts          # Main entry point
  test-setup.ts     # Test setup utilities

__tests__/          # Test files

.env.example        # Example environment variables
Dockerfile          # Docker build instructions
docker-compose.yml  # Docker Compose setup
```

## Environment Variables

- Copy `.env.example` to `.env` and fill in your secrets and configuration.
- Access environment variables via the helpers in `src/config/env.ts`.

## Docker Support

- Build the Docker image:
  ```bash
  docker build -t typescript-boilerplate .
  ```
- Run with Docker Compose:
  ```bash
  docker-compose up
  ```

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.

## License

This project is licensed under the MIT License.

---

**References & Further Reading**

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [Docker](https://www.docker.com/)

---
