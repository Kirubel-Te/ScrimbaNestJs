# Dev Match

A small profile-matching API built with NestJS. It provides a REST endpoint for listing, creating, reading, updating, and deleting developer profiles.

## Tech stack

- NestJS 12
- TypeScript
- Vitest
- class-validator
- NestJS Observe

## Prerequisites

- Node.js 20 or newer
- npm

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run start:dev
```

The API is available at `http://localhost:3000` by default. Set `PORT` to use a different port:

```bash
PORT=4000 npm run start:dev
```

> On Windows PowerShell, set the port with `$env:PORT=4000`.

## API

Profiles are stored in memory and reset whenever the application restarts.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | Health/status-style greeting |
| `GET` | `/profiles` | List all profiles |
| `GET` | `/profiles/:id` | Get a profile by UUID |
| `POST` | `/profiles` | Create a profile |
| `PUT` | `/profiles/:id` | Update a profile by UUID |
| `DELETE` | `/profiles/:id` | Delete a profile by UUID |

### Example

Create a profile:

```bash
curl -X POST http://localhost:3000/profiles ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Ada Lovelace\",\"description\":\"Compiler enthusiast looking for a pair-programming partner.\"}"
```

List profiles:

```bash
curl http://localhost:3000/profiles
```

The create and update request bodies require a `name` and `description`:

```json
{
  "name": "Ada Lovelace",
  "description": "Compiler enthusiast looking for a pair-programming partner."
}
```

- `name` must be a string between 3 and 100 characters.
- `description` must be a string.
- Profile IDs must be valid UUIDs.

## Scripts

| Command | Description |
| --- | --- |
| `npm run start:dev` | Run in watch mode |
| `npm run start:debug` | Run in debug and watch mode |
| `npm run start:prod` | Run the compiled application |
| `npm run build` | Compile the application to `dist/` |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:cov` | Run tests with coverage |
| `npm run lint` | Lint source and test files |
| `npm run format` | Format source and test files |

## NestJS Observe

The application includes NestJS Observe instrumentation. Telemetry is disabled until the project is linked:

```bash
npx @nestjs/observe link
```

This writes `OBSERVE_APP_KEY` and `OBSERVE_APP_SECRET` to `.env`. Do not commit these credentials.