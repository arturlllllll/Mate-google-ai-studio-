# AGENTS.md - Coding Agent Guidelines

This document provides guidelines for AI coding agents working in this repository.

## Project Overview

A React 19 landing page for Mate Academy built with Vite and TypeScript.
Deployed to Cloudflare Workers/Pages. Created via Google AI Studio.

## Build Commands

```bash
# Start development server (port 3000)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build
npm run preview
```

## Testing

No testing framework is currently configured. No Jest, Vitest, or other test runners.
If tests are added in the future, update this section.

## Environment Variables

| Variable | Description | Location |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Gemini API key | `.env.local` |

Environment variables are exposed as `process.env.API_KEY` and `process.env.GEMINI_API_KEY`.

## Project Structure

```
/
├── components/           # React components
│   ├── Button.tsx
│   ├── CourseCard.tsx
│   ├── CourseSection.tsx
│   ├── Header.tsx
│   └── Hero.tsx
├── dist/                 # Build output
├── App.tsx               # Root component
├── index.tsx             # React DOM entry point
├── types.ts              # Shared TypeScript types
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── wrangler.jsonc        # Cloudflare deployment config
```

## Code Style Guidelines

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `CourseCard`, `Hero` |
| Component files | PascalCase.tsx | `CourseCard.tsx` |
| Variables/functions | camelCase | `isMenuOpen`, `handleClick` |
| Types/Interfaces | PascalCase | `Course`, `ButtonProps` |
| Enums | PascalCase | `TagType` |
| Enum values | SCREAMING_SNAKE_CASE | `SKORO_START` |

### Import Organization

Order imports as follows:
1. React imports
2. Third-party libraries
3. Local components (relative paths `./` or `../`)
4. Types from `../types`

```typescript
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Course, TagType } from './types';
```

### Formatting

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for imports, double quotes for JSX attributes
- **Semicolons**: Required
- **Trailing commas**: Use in arrays and objects

No ESLint or Prettier is configured. Follow existing code patterns.

### TypeScript Patterns

**Component Declaration**:
```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (/* JSX */);
};
```

**Key TypeScript Settings**:
- Target: ES2022
- Module: ESNext
- JSX: react-jsx (React 17+ transform)
- Path alias: `@/*` maps to project root
- Strict mode: NOT enabled

**Type Definitions**:
- Define shared types in `types.ts`
- Define component props inline above component
- Use `React.FC<Props>` for component type annotations

### Component Patterns

**Exports**:
- Use **named exports** for all components
- Only `App.tsx` uses default export

**State Management**:
- Local state with `useState` only
- No Redux or Context API

**Sub-components**:
- Define helper components within parent file if tightly coupled
```typescript
// Inside CourseCard.tsx
const Tag: React.FC<{ type: TagType }> = ({ type }) => { /* ... */ };
```

### Styling

**Tailwind CSS** loaded via CDN. Use utility classes for styling.

**Custom Typography Classes** (defined in dist/index.html):
- `.text-micro-s` - Small uppercase labels
- `.text-micro-m` - Medium text
- `.text-headline-l` - Large headlines
- `.text-headline-xs` - Extra small headlines
- `.text-subtitle` - Subtitle text

**Color Palette**:
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Red | `#E25544` | CTAs, highlights |
| Red Hover | `#C52A20` | Hover states |
| Primary Purple | `#5955F4` | Accents |
| Dark BG | `#212631` | Backgrounds |
| Light BG | `#F5F6FA` | Light sections |
| Text Dark | `#22262F` | Primary text |
| Text Medium | `#464E62` | Secondary text |

**Responsive Design**:
Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`

### Error Handling

Current patterns:
```typescript
// Root element validation
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
```

When adding new features:
- Validate required elements exist
- Handle API errors gracefully
- Provide fallback UI for error states

## Language

UI text content is in **Ukrainian**. Maintain this for user-facing strings.

## Dependencies

**Production**:
- React 19.2.3
- React DOM 19.2.3

**Development**:
- Vite 6.2.0
- TypeScript 5.8.2
- @vitejs/plugin-react 5.0.0

## Agent Best Practices

1. **Match existing patterns** - Follow code style in surrounding files
2. **Use named exports** - Except for App.tsx
3. **Keep components focused** - Single responsibility principle
4. **Use Tailwind** - Prefer utility classes over custom CSS
5. **Type everything** - Define interfaces for props and data
6. **No strict mode** - But maintain good typing practices
7. **Responsive first** - Consider mobile breakpoints
8. **Ukrainian UI** - Keep user-facing text in Ukrainian
